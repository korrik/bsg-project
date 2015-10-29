# -*- coding: utf-8 -*-

from extdirect.django import serializer
from django.utils.encoding import smart_unicode


class Serializer(serializer.Serializer):

    def handle_m2m_field(self, obj, field):
        if field.rel.through._meta.auto_created:
            if self.use_natural_keys and hasattr(field.rel.to, 'natural_key'):
                m2m_value = lambda value: value.natural_key()
            else:
                m2m_value = lambda value: smart_unicode(value._get_pk_val(), strings_only=True)

            list_ids = []
            list_val = []

            for related in getattr(obj, field.name).iterator():

                if not related.hidden:

                    list_ids.append(m2m_value(related))
                    list_val.append(related.__unicode__())

                else:
                    continue

            self._current[field.name + '_ids'] = list_ids
            self._current[field.name] = list_val
        else:
            self.handle_m2m_field_through(obj, field)

    def handle_fk_field(self, obj, field):
        related = getattr(obj, field.name)
        if related is not None:
            if field.rel.field_name == related._meta.pk.name:
                # Related to remote object via primary key
                for item in related._meta.fields:
                    if item.name is not 'id' and 'hidden':
                        self._current[field.name + '_fk_' +  item.name] = smart_unicode(getattr(related, item.name), strings_only=True)
                self._current[field.name + '_id'] = smart_unicode(related._get_pk_val(), strings_only=True)
                self._current[field.name] = smart_unicode(related, strings_only=True)
            else:
                # Related to remote object via other field
                related = getattr(related, field.rel.field_name)
                for item in related._meta.fields:
                    if item.name is not 'id' and 'hidden':
                        self._current[field.name + '_fk_' +  item.name] = smart_unicode(getattr(related, item.name), strings_only=True)
                self._current[field.name] = smart_unicode(getattr(related, field.rel.field_name), strings_only=True)
                self._current[field.name + '_id'] = self._current[field.name]


