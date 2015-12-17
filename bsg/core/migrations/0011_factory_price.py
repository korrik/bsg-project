# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_remove_factory_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='factory',
            name='price',
            field=models.IntegerField(null=True, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd1\x81\xd1\x82\xd1\x80\xd0\xb0\xd0\xbd\xd1\x8b', blank=True),
        ),
    ]
