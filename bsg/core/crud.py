# -*- coding: utf-8 -*-

from extdirect.django.crud import ExtDirectCRUD
from bsg.core.store import *


class BsgExtDirectCRUD(ExtDirectCRUD):

    def __init__(self, provider, action, model, exclude_fields=[], form=None):
        self.exclude_fields = exclude_fields
        super(BsgExtDirectCRUD, self).__init__(provider, action, model, form)

    def direct_store(self):
        return BsgDirectStore(self.model, metadata=self.metadata)

    def query(self, request, optional, **kw):
        qs = self.model.objects.filter(hidden=False)
        # qs = self.model.objects.all()
        return qs

    def pre_update(self, request, data, optional_data=None):
        # if not permissions.can_update(request.user, self.model, data):
            # return False, permissions.permissions_failue_message
        msg = 'Success'
        opts = self.model._meta
        # Litle fix for many2many working
        for f in opts.many_to_many:
            if f.name in data and f.name + '_ids' in data:
                if type(data[f.name+'_ids']) == str:
                    return False, 'Type m2m fields must be Integer!'
                data[f.name] = data[f.name+'_ids']
        return True, ''

    def update(self, request):

        res = super(BsgExtDirectCRUD, self).update(request)
        if res.get('success'):
            ids = []
            for record in res.get('records'):
                ids.append(record.get('id'))
            msg = 'Records successful updated. Ids = %s' % str(ids)
        else:
            msg = res.get('message')
        return res

    def load(self, request):
        # Almost the same as 'read' action but here we call
        # the serializer directly with a fixed metadata (different
        # from the self.store). Besides, we assume that the load
        # action should return a single record, so all the query
        # options are not needed.
        meta = self.direct_load_metadata
        extdirect_data, optional_data = self.extract_load_data(request)
        ok, msg = self.pre_load(extdirect_data, optional_data)
        if ok:
            queryset = self.model.objects.filter(**extdirect_data)
            res = serialize('extdirect', queryset, meta=meta, single_cast=True, optional=optional_data)
            return res
        else:
            return self.failure(msg)