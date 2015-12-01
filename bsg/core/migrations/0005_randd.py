# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20151120_1527'),
    ]

    operations = [
        migrations.CreateModel(
            name='RandD',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xba\xd0\xbe\xd0\xbc\xd0\xbf\xd0\xbe\xd0\xbd\xd0\xb5\xd0\xbd\xd1\x82\xd0\xb0 ')),
                ('time', models.IntegerField(null=True, verbose_name=b'\xd0\x92\xd1\x80\xd0\xb5\xd0\xbc\xd1\x8f \xd1\x80\xd0\xb0\xd0\xb7\xd1\x80\xd0\xb0\xd0\xb1\xd0\xbe\xd1\x82\xd0\xba\xd0\xb8', blank=True)),
                ('price', models.IntegerField(null=True, verbose_name=b'\xd0\xa1\xd1\x82\xd0\xbe\xd0\xb8\xd0\xbc\xd0\xbe\xd1\x81\xd1\x82\xd1\x8c \xd1\x80\xd0\xb0\xd0\xb7\xd1\x80\xd0\xb0\xd0\xb1\xd0\xbe\xd1\x82\xd0\xba\xd0\xb8', blank=True)),
            ],
            options={
                'db_table': 'randd',
            },
        ),
    ]
