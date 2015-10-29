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
from bsg.core.utils import registry_event

from django.db.models import Q

from django.core import serializers

REMOTE_METHOD_NAMESPACE = 'methods'

user_editable_fields = ('username', 'first_name', 'last_name', 'email', 'password')


def check_auth_post(request):
    if not request.user.is_authenticated():
        print 2
        return False
    return True

def index(request):
    return render_to_response('index.html', context_instance=RequestContext(request))

def main(request):
    # TODO: Проверка на авторизацию

    if (check_auth_post(request)):
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




