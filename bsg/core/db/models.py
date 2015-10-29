# -*- coding: utf-8 -*-

from django.db import models


class BaseBsgModel(models.Model):

    # Fake deletion flag
    hidden = models.BooleanField(null=False, blank=False, default=False)

    @staticmethod
    def get_unique_fieldname():
        return None

    class Meta:
        abstract = True
