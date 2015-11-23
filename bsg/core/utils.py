# -*- coding: utf-8 -*-

########################################
#   Helpers for model instance saving  #
########################################

from django.db import models
from django.db import transaction
from django.core.exceptions import ObjectDoesNotExist
import datetime
import dateutil.parser

try:
    from django.utils.encoding import smart_unicode
except ImportError:
    from django.utils.encoding import smart_text as smart_unicode

import logging


logger = logging.getLogger('base')


def _set_field_data(instance, fieldname, data):
    """
    Sets field value.
    """
    setattr(instance, fieldname, data)


def fill_instance(instance, data, exclude=None, include=None):
    """
    Extracts data from the QueryDict (or dict) object and fills the instance fields,
    but does not save it to the database.
    instance = model instance
    data = dict with field name as keys and field value as value
    exclude = list of field names, wich won`t be handle (black list).
    include = list of field names, wich will be handle (white list).

    If include is set, exclude parameter will be ignored.
    """
    if not data or not instance:
        return

    if include:
        exclude = None

    opts = instance._meta
    file_field_list = []

    for f in opts.fields:
        if not f.name in data:
            continue
        if not f.editable or isinstance(f, models.AutoField):
            continue
        if exclude and f.name in exclude:
            continue
        if include and f.name not in include:
            continue
        if isinstance(f, models.FileField):
            file_field_list.append(f)
            continue
        if isinstance(f, models.BooleanField):
            if data[f.name] == 'true':
                data[f.name] = True
            else:
                data[f.name] = False
        if isinstance(f, models.IntegerField):
            if data[f.name] == '':
                data[f.name] = None
        if isinstance(f, models.DateField):
            data[f.name] = dateutil.parser.parse(data[f.name])
            value = smart_unicode(data[f.name], strings_only=True)
            if not value or value is None:
                continue
        if data[f.name] == 'null':
            data[f.name] = None
        _set_field_data(instance, f.name, smart_unicode(data[f.name], strings_only=True))

    for f in file_field_list:
        _set_field_data(instance, f.name, smart_unicode(data[f.name], strings_only=True))


def fill_fk_fields(instance, data):
    """
    Foreign key handler.
    """
    opts = instance._meta

    for f in opts.fields:
        if isinstance(f, models.ForeignKey):
            fkfield = f.name + '_id'
            if fkfield in data:
                fkval = data.get(fkfield)
                if not fkval or fkval is None:
                    continue
                fkmodel = opts.get_field(f.name, False).rel.to
                try:
                    obj = fkmodel.objects.get(id=fkval)
                    _set_field_data(instance, f.name, obj)
                except ObjectDoesNotExist:
                    logger.warning('%s with id == %s does not exist' % (f.name, fkval))


def save_m2m_fields(instance, data, exclude):
    """
    Many2many field handler.
    """
    opts = instance._meta

    for f in list(opts.many_to_many) + opts.virtual_fields:
        if exclude and f.name in exclude:
            continue
        m2mfield = f.name + '_ids'
        if data and m2mfield in data:
            values = []
            if data[m2mfield] is None:
                values = []

            elif type(data[m2mfield]) is list:
                for item in data[m2mfield]:
                    if item:
                        values.append(item)
            else:
                for val in data[m2mfield].split(','):
                    if val:
                        values.append(int(val))
            _set_field_data(instance, f.name, values)
    
    instance.save()


def save_instance(instance, data=None, exclude=None, include=None, model=None):
    """
    Retrieves data from QueryDict object ``data``, insert its into model instance ``instance`` and save instance.
    """
    print data
    if 'id' in data: 
        if data['id'] != '' and data['id'] is not None:

            instance = model.objects.get(id=data['id'])

    fill_instance(instance, data, exclude, include)
    fill_fk_fields(instance, data)
    instance.save()
    save_m2m_fields(instance, data, exclude)
    
    return instance


def save_array_instance(instance, data=None, model=None, exclude=None, include=None, lang=None):
    array_instance_ids = []
    array_instance = []
    for item in data:
        dataItem = dict(item)
        instance = model()
        instance = save_instance(instance, dataItem, exclude, include, lang, model)
        array_instance_ids.append(instance.id)
        array_instance.append(instance)

    return array_instance_ids, array_instance


###########################
# Others helpers.         #
###########################


def m2m_to_str(ref, fieldname):
    """
    Returns comma separated sequence of m2m field values as string.
    """
    result = ""
    for val in ref.values_list(fieldname, flat='true'):
        result += ", " + str(val)
    return result[1:].strip()


def exception_to_str(e):
    return str(e)
    # msg = e.message
    # if not msg and hasattr(e, 'messages'):
    #     msg = e.messages[len(e.messages)-1]
    # return smart_unicode(msg)

def registry_event(user, action, result, msg=''):
    from bsg.core.models import History

    if user.is_anonymous():
        user = None
        msg = '[AnonymousUser]' + msg

    log = History(user=user, operation=action, time=datetime.datetime.now(), result=result, info=msg)
    log.save()