from django.db.models import ForeignKey, ManyToManyField, OneToOneField
from django.db.models.fields import FieldDoesNotExist
from bsg.core import extfields


def _check_default_rel_fieldname(fieldname, model):

    result = False

    if not result:
        try:
            model._meta.get_field_by_name(fieldname)
            result = True
        except FieldDoesNotExist:
            pass

    if not result:
        raise FieldDoesNotExist('{0} has no field named `{1}`'.format(model._meta.model_name, fieldname))


class ForeignKeyExtended(ForeignKey):

    def __init__(self, to, default_rel_fieldname, *args, **kwargs):
        # Default fieldname of relative model for representation fk data.
        self._default_rel_fieldname = default_rel_fieldname
        super(ForeignKeyExtended, self).__init__(to, *args, **kwargs)
        # _check_default_rel_fieldname(self.default_rel_fieldname, self.rel.to)

    def get_internal_type(self):
        return 'ForeignKey'

    def deconstruct(self):

        field_class = "django.db.models.fields.related.ForeignKey"
        name, path, args, kwargs = super(ForeignKeyExtended, self).deconstruct()
        return name, field_class, args, kwargs

    @property
    def default_rel_fieldname(self):
        return self._default_rel_fieldname

# Litle hack for register new type in extdirect extfields
extfields.ForeignKeyExtended = extfields.ForeignKey


class ManyToManyFieldExtended(ManyToManyField):

    def __init__(self, to, default_rel_fieldname, *args, **kwargs):
        self._default_rel_fieldname = default_rel_fieldname
        super(ManyToManyFieldExtended, self).__init__(to, *args, **kwargs)
        # _check_default_rel_fieldname(self.default_rel_fieldname, self.rel.to)

    def get_internal_type(self):
        return 'ManyToManyField'

    def deconstruct(self):

        field_class = "django.db.models.fields.related.ManyToManyField"
        name, path, args, kwargs = super(ManyToManyFieldExtended, self).deconstruct()
        return name, field_class, args, kwargs

    @property
    def default_rel_fieldname(self):
        return self._default_rel_fieldname

extfields.ManyToManyFieldExtended = extfields.ManyToManyField


class OneToOneFieldExtended(OneToOneField):

    def __init__(self, to, default_rel_fieldname, *args, **kwargs):
        self._default_rel_fieldname = default_rel_fieldname
        super(OneToOneFieldExtended, self).__init__(to, *args, **kwargs)
        # _check_default_rel_fieldname(self.default_rel_fieldname, self.rel.to)

    def get_internal_type(self):
        return 'OneToOneField'

    def deconstruct(self):

        field_class = "django.db.models.fields.related.OneToOneField"
        name, path, args, kwargs = super(OneToOneFieldExtended, self).deconstruct()
        return name, field_class, args, kwargs

    @property
    def default_rel_fieldname(self):
        return self._default_rel_fieldname

extfields.OneToOneFieldExtended = extfields.OneToOneField
