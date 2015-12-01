#!/usr/bin/env python
# -*- coding: utf-8 -*-

from bsg.core.metadata import meta_fields
from extdirect.django.metadata import meta_columns
from extdirect.django.store import ExtDirectStore
from django.core.serializers import serialize

class BsgDirectStore(ExtDirectStore):
    def build_meta_data(self, optional=None):

        self.metadata = {}

        if self.showmetadata:

            fields = meta_fields(self.model, self.mappings, self.exclude_fields,
                                 self.get_metadata, fields=self.fields) + self.extra_fields

            self.metadata = {
                'idProperty': self.id_property,
                'root': self.root,
                'totalProperty': self.total,
                'successProperty': self.success,
                'fields': fields,
                'messageProperty': self.message
            }
            if self.sort_info:
                self.metadata.update({'sortInfo': self.sort_info})

            self.metadata.update(self.custom_meta)

    def serialize(self, queryset, metadata=True, col_model=False, total=None, fields=None, optional=None):

        meta = {
            'root': self.root,
            'total': self.total,
            'success': self.success,
            'idProperty': self.id_property
        }

        res = serialize('extdirect', queryset, meta=meta, extras=self.extras,
                        total=total, exclude_fields=self.exclude_fields, optional=optional)

        self.build_meta_data(optional=optional)

        if metadata and self.metadata:

            res['metaData'] = self.metadata
            # also include columns for grids
            if col_model:
                res['columns'] = meta_columns(self.model, fields=fields)

        return res