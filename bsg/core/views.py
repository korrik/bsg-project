#!/usr/bin/env python
# -*- coding: utf-8 -*-

import collections
import json

from django.template import RequestContext
from django.shortcuts import render_to_response

from bsg.core.providers import remotingProvider

from bsg.core.direct import *
from bsg.core.utils import *
from bsg.core.models import *

from extdirect.django.decorators import remoting

from django.forms.models import model_to_dict

from django.contrib import auth

from django.db.models import Q

from django.core import serializers

REMOTE_METHOD_NAMESPACE = 'methods'

user_editable_fields = ('username', 'first_name', 'last_name', 'email', 'password')

# Проверка авторизации
def check_auth(request):
    if not request.user.is_authenticated():
        return False
    return True

# Проверка авторизации и метода POST
def check_auth_post(request):
    if not request.method == 'POST':
        if not request.user.is_authenticated():
            return False, dict(success=False, msg=u'Пользователь не авторизован')
    return True, dict(success=True, msg='')

def index(request):
    return render_to_response('index.html', context_instance=RequestContext(request))

def main(request):
    # TODO: Проверка на авторизацию

    if (check_auth(request)):
        return render_to_response('main.html', context_instance=RequestContext(request))
    else:
        return render_to_response('login.html', context_instance=RequestContext(request))

def login(request):
    return render_to_response('login.html', context_instance=RequestContext(request))

def registration(request):
    return render_to_response('registration.html', context_instance=RequestContext(request))

@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, form_handler=True)
def create_user(request):

    success = False
    msg = 'Server error'

    data = dict(request.extdirect_post_data.items())
    try:
        username = data['username']
        passwd = data['password']

        if not username or len(username) < 3:
            return dict(success=False, msg=u'Login is empty or is too short ')
        if not passwd:
            return dict(success=False, msg=u'Password is not set')
        try:
            User.objects.get(username=username)
            return dict(success=False, msg=u'Login {} already exist'.format(username))
        except:
            try:
                user = User()
                fill_instance(user, data, include=user_editable_fields)
                user.set_password(passwd.strip())
                user.save()
                UserProfile.objects.create(user=user)
            except Exception as e:
                return dict(success=False, msg=e.message.decode('utf-8'))
            return dict(success=True, msg=u'User {0} created successfully'.format(username))

    except KeyError as e:
        return dict(success=False, msg=u'Can`t find key `%s`' % e)


@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, length=1, form_handler=True)
def login_user(request):

    data = dict(request.extdirect_post_data.items())

    username = data['username']
    password = data['password']

    try:
        user = User.objects.get(username=username)
    except ObjectDoesNotExist:
        user = None

    #Remove all user sessions if exists
    if user:
        sessions = UserSession.objects.filter(user_id=user.pk)
        for session in sessions:
            session.session.delete()

    #Create new user session
    user = auth.authenticate(username=username, password=password)

    if user is not None:
        if user.is_active:
            auth.login(request, user)
            registry_event(user, 'login', True)
            return dict(success=True, msg=u'Success', username=user.first_name + ' ' + user.last_name)
        else:
            return dict(success=False, msg=u'Account disabled')
    else:
        return dict(success=False, msg=u'Invalid login or password')

@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, length=1, form_handler=False)
def logout_user(request):
    """
    Removes current session.
    """
    user = request.user
    auth.logout(request)
    registry_event(user=user, action='logout', result=True)
    return dict(success=True)

@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, length=1, form_handler=False)
def get_user(request):
    user = User.objects.get(username=request.user)
    return dict(success=True, username = user.username)

def create_modelproduct(data):
    mp_data = dict({'connect_module':data['connect_module'], 'back_camera':data['back_camera'],
                   'link_module':data['link_module'], 'display':data['display'], 'touch_screen':data['touch_screen'],
                   'battery':data['battery'] , 'processor':data['processor'], 'case':data['case']})
    data.pop('connect_module')
    data.pop('back_camera')
    data.pop('link_module')
    data.pop('display')
    data.pop('touch_screen')
    data.pop('battery')
    data.pop('processor')
    data.pop('case')

    inst = save_instance(ModelProduct(), mp_data, None, None, ModelProduct)
    data['first_id'] = inst.id
    data['result_id'] = inst.id

    return data

def update_modelproduct(data):
    mp_data = dict({'connect_module':data['first_fk_connect_module'], 'back_camera':data['first_fk_back_camera'],
                   'link_module':data['first_fk_link_module'], 'display':data['first_fk_display'],
                    'touch_screen':data['first_fk_touch_screen'], 'battery':data['first_fk_battery'] ,
                    'processor':data['first_fk_processor'], 'case':data['first_fk_case']})
    data.pop('first_fk_connect_module')
    data.pop('first_fk_back_camera')
    data.pop('first_fk_link_module')
    data.pop('first_fk_display')
    data.pop('first_fk_touch_screen')
    data.pop('first_fk_battery')
    data.pop('first_fk_processor')
    data.pop('first_fk_case')

    inst = save_instance(ModelProduct(), mp_data, None, None, ModelProduct)
    data['first_id'] = inst.id
    data['result_id'] = inst.id

    return data

@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, form_handler=True)
def create_product(request):
    ok, result = check_auth_post(request)
    if not ok:
        return result

    user = request.user
    success = False
    msg = ''

    data = dict(request.extdirect_post_data.items())

    data = create_modelproduct(data)

    try:
        instance = save_instance(Product(), data, None, None, Product)
        msg = u'Продукт {} успешно создан'.format(instance.name)
        success = True
    except Exception as e:
        msg = exception_to_str(e)
        logger.error(msg)
    finally:
        registry_event(user=user, action='create Product', result=success, msg=msg)
        return dict(success=success, msg=msg)

@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, form_handler=True)
def update_product(request):
    ok, result = check_auth_post(request)
    if not ok:
        return result

    user = request.user
    success = False
    msg = ''

    data = dict(request.extdirect_post_data.items())

    data = update_modelproduct(data)

    try:
        instance = save_instance(Product(), data, None, None, Product)
        msg = u'Продукт {} успешно изменен'.format(instance.name)
        success = True
    except Exception as e:
        msg = exception_to_str(e)
        logger.error(msg)
    finally:
        registry_event(user=user, action='update Product', result=success, msg=msg)
        return dict(success=success, msg=msg)

@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, form_handler=True)
def build_factory(request):
    ok, result = check_auth_post(request)
    if not ok:
        return result

    user = request.user
    success = False
    msg = ''

    data = dict(request.extdirect_post_data.items())

    try:
        instance = save_instance(Factory(), data, None, None, Factory)
        msg = u'Завод успешно построен'
        success = True
    except Exception as e:
        msg = exception_to_str(e)
        logger.error(msg)
    finally:
        registry_event(user=user, action='Build factory', result=success, msg=msg)
        return dict(success=success, msg=msg)


@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, form_handler=True)
def open_representation(request):
    ok, result = check_auth_post(request)
    if not ok:
        return result

    user = request.user
    success = False
    msg = ''

    data = dict(request.extdirect_post_data.items())

    try:
        instance = save_instance(Representation(), data, None, None, Representation)
        msg = u'Представительство успешно открыто!'
        success = True
    except Exception as e:
        msg = exception_to_str(e)
        logger.error(msg)
    finally:
        registry_event(user=user, action='Open representation', result=success, msg=msg)
        return dict(success=success, msg=msg)

@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, form_handler=True)
def open_shop(request):
    ok, result = check_auth_post(request)
    if not ok:
        return result

    user = request.user
    success = False
    msg = ''

    data = dict(request.extdirect_post_data.items())

    try:
        instance = save_instance(Shop(), data, None, None, Shop)
        msg = u'Магазин успешно открыт!'
        success = True
    except Exception as e:
        msg = exception_to_str(e)
        logger.error(msg)
    finally:
        registry_event(user=user, action='Open shop', result=success, msg=msg)
        return dict(success=success, msg=msg)

@remoting(remotingProvider, action=REMOTE_METHOD_NAMESPACE, form_handler=True)
def factory_power_up(request):
    ok, result = check_auth_post(request)
    if not ok:
        return result

    user = request.user
    success = False
    msg = ''

    data = dict(request.extdirect_post_data.items())

    try:
        instance = Factory.objects.get(id=data['id_factory'])
        instance.power = instance.power + int(data['power'])
        instance.price = instance.price + int(data['price'])
        instance.save()
        msg = u'Мощность завода увеличена!'
        success = True
    except Exception as e:
        msg = exception_to_str(e)
        logger.error(msg)
    finally:
        registry_event(user=user, action='Power Up factory', result=success, msg=msg)
        return dict(success=success, msg=msg)