# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_priceexpansion'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShippingCosts',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(null=True, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd1\x81\xd1\x82\xd1\x80\xd0\xb0\xd0\xbd\xd1\x8b', blank=True)),
                ('country_one', models.IntegerField(null=True, verbose_name=b'\xd0\xa1\xd1\x82\xd1\x80\xd0\xb0\xd0\xbd\xd0\xb0 1', blank=True)),
                ('country_two', models.IntegerField(null=True, verbose_name=b'\xd0\xa1\xd1\x82\xd1\x80\xd0\xb0\xd0\xbd\xd0\xb0 2', blank=True)),
                ('country_three', models.IntegerField(null=True, verbose_name=b'\xd0\xa1\xd1\x82\xd1\x80\xd0\xb0\xd0\xbd\xd0\xb0 3', blank=True)),
                ('country_four', models.IntegerField(null=True, verbose_name=b'\xd0\xa1\xd1\x82\xd1\x80\xd0\xb0\xd0\xbd\xd0\xb0 4', blank=True)),
                ('country_five', models.IntegerField(null=True, verbose_name=b'\xd0\xa1\xd1\x82\xd1\x80\xd0\xb0\xd0\xbd\xd0\xb0 5', blank=True)),
            ],
            options={
                'db_table': 'shippingcosts',
            },
        ),
    ]
