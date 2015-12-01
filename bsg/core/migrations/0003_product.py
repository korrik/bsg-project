# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20151119_1405'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xbc\xd0\xbe\xd0\xb4\xd0\xb5\xd0\xbb\xd0\xb8')),
                ('connect_module', models.TextField(null=True, verbose_name=b'\xd0\x98\xd0\xbd\xd1\x82\xd0\xb5\xd1\x80\xd0\xbd\xd0\xb5\xd1\x82-\xd1\x81\xd0\xbe\xd0\xb5\xd0\xb4\xd0\xb8\xd0\xbd\xd0\xb5\xd0\xbd\xd0\xb8\xd0\xb5', blank=True)),
                ('back_camera', models.TextField(null=True, verbose_name=b'\xd0\x97\xd0\xb0\xd0\xb4\xd0\xbd\xd1\x8f\xd1\x8f \xd0\xba\xd0\xb0\xd0\xbc\xd0\xb5\xd1\x80\xd0\xb0', blank=True)),
                ('link_module', models.TextField(null=True, verbose_name=b'\xd0\x9c\xd0\xbe\xd0\xb4\xd1\x83\xd0\xbb\xd1\x8c \xd1\x81\xd0\xb2\xd1\x8f\xd0\xb7\xd0\xb8', blank=True)),
                ('display', models.TextField(null=True, verbose_name=b'\xd0\x94\xd0\xb8\xd1\x81\xd0\xbf\xd0\xbb\xd0\xb5\xd0\xb9', blank=True)),
                ('touch_screen', models.TextField(null=True, verbose_name=b'\xd0\xa2\xd0\xb0\xd1\x87\xd1\x81\xd0\xba\xd1\x80\xd0\xb8\xd0\xbd', blank=True)),
                ('battery', models.TextField(null=True, verbose_name=b'\xd0\x91\xd0\xb0\xd1\x82\xd0\xb0\xd1\x80\xd0\xb5\xd1\x8f', blank=True)),
                ('processor', models.TextField(null=True, verbose_name=b'\xd0\x9f\xd1\x80\xd0\xbe\xd1\x86\xd0\xb5\xd1\x81\xd1\x81\xd0\xbe\xd1\x80', blank=True)),
                ('case', models.TextField(null=True, verbose_name=b'\xd0\x9a\xd0\xbe\xd1\x80\xd0\xbf\xd1\x83\xd1\x81', blank=True)),
                ('new_connect_module', models.TextField(null=True, verbose_name=b'\xd0\x98\xd0\xbd\xd1\x82\xd0\xb5\xd1\x80\xd0\xbd\xd0\xb5\xd1\x82-\xd1\x81\xd0\xbe\xd0\xb5\xd0\xb4\xd0\xb8\xd0\xbd\xd0\xb5\xd0\xbd\xd0\xb8\xd0\xb5', blank=True)),
                ('new_back_camera', models.TextField(null=True, verbose_name=b'\xd0\x97\xd0\xb0\xd0\xb4\xd0\xbd\xd1\x8f\xd1\x8f \xd0\xba\xd0\xb0\xd0\xbc\xd0\xb5\xd1\x80\xd0\xb0', blank=True)),
                ('new_link_module', models.TextField(null=True, verbose_name=b'\xd0\x9c\xd0\xbe\xd0\xb4\xd1\x83\xd0\xbb\xd1\x8c \xd1\x81\xd0\xb2\xd1\x8f\xd0\xb7\xd0\xb8', blank=True)),
                ('new_display', models.TextField(null=True, verbose_name=b'\xd0\x94\xd0\xb8\xd1\x81\xd0\xbf\xd0\xbb\xd0\xb5\xd0\xb9', blank=True)),
                ('new_touch_screen', models.TextField(null=True, verbose_name=b'\xd0\xa2\xd0\xb0\xd1\x87\xd1\x81\xd0\xba\xd1\x80\xd0\xb8\xd0\xbd', blank=True)),
                ('new_battery', models.TextField(null=True, verbose_name=b'\xd0\x91\xd0\xb0\xd1\x82\xd0\xb0\xd1\x80\xd0\xb5\xd1\x8f', blank=True)),
                ('new_processor', models.TextField(null=True, verbose_name=b'\xd0\x9f\xd1\x80\xd0\xbe\xd1\x86\xd0\xb5\xd1\x81\xd1\x81\xd0\xbe\xd1\x80', blank=True)),
                ('new_case', models.TextField(null=True, verbose_name=b'\xd0\x9a\xd0\xbe\xd1\x80\xd0\xbf\xd1\x83\xd1\x81', blank=True)),
            ],
            options={
                'db_table': 'product',
            },
        ),
    ]
