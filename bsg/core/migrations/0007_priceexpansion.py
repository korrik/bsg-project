# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_pricecountry'),
    ]

    operations = [
        migrations.CreateModel(
            name='PriceExpansion',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('power', models.IntegerField(null=True, verbose_name=b'\xd0\x9c\xd0\xbe\xd1\x89\xd0\xbd\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c (\xd0\xb7\xd0\xb0 \xd0\xba\xd0\xb2\xd0\xb0\xd1\x80\xd1\x82\xd0\xb0\xd0\xbb)', blank=True)),
                ('price', models.IntegerField(null=True, verbose_name=b'\xd0\xa1\xd1\x82\xd0\xbe\xd0\xb8\xd0\xbc\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c', blank=True)),
            ],
            options={
                'db_table': 'priceexpansion',
            },
        ),
    ]
