# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_factory_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='factory',
            name='power',
            field=models.IntegerField(null=True, verbose_name=b'\xd0\x9c\xd0\xbe\xd1\x89\xd0\xbd\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c \xd0\xb7\xd0\xb0\xd0\xb2\xd0\xbe\xd0\xb4\xd0\xb0 (\xd0\xbd\xd0\xb0\xd1\x87\xd0\xb0\xd0\xbb\xd1\x8c\xd0\xbd\xd0\xb0\xd1\x8f 5000)', blank=True),
        ),
        migrations.AlterField(
            model_name='factory',
            name='price',
            field=models.IntegerField(null=True, verbose_name=b'\xd0\xa6\xd0\xb5\xd0\xbd\xd0\xb0 \xd0\xbe\xd1\x82\xd0\xba\xd1\x80\xd1\x8b\xd1\x82\xd0\xb8\xd1\x8f \xd0\xb7\xd0\xb0\xd0\xb2\xd0\xbe\xd0\xb4\xd0\xb0 \xd0\xb2 \xd1\x81\xd1\x82\xd1\x80\xd0\xb0\xd0\xbd\xd0\xb5', blank=True),
        ),
    ]
