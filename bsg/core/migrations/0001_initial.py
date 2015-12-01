# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('sessions', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Activities',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xba\xd0\xbb\xd1\x8e\xd1\x87\xd0\xb5\xd0\xb2\xd1\x8b\xd1\x85 \xd0\xb2\xd0\xb8\xd0\xb4\xd0\xbe\xd0\xb2 \xd0\xb4\xd0\xb5\xd1\x8f\xd1\x82\xd0\xb5\xd0\xbb\xd1\x8c\xd0\xbd\xd0\xbe\xd1\x81\xd1\x82\xd0\xb8')),
            ],
            options={
                'db_table': 'activities',
            },
        ),
        migrations.CreateModel(
            name='Costs',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xba\xd0\xbb\xd1\x8e\xd1\x87\xd0\xb5\xd0\xb2\xd1\x8b\xd1\x85 \xd0\xb8\xd0\xb7\xd0\xb4\xd0\xb5\xd1\x80\xd0\xb6\xd0\xbe\xd0\xba')),
            ],
            options={
                'db_table': 'costs',
            },
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('operation', models.TextField()),
                ('time', models.DateTimeField()),
                ('result', models.BooleanField()),
                ('info', models.TextField(null=True, blank=True)),
                ('user', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
                'db_table': 'history',
            },
        ),
        migrations.CreateModel(
            name='Offers',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd1\x86\xd0\xb5\xd0\xbd\xd0\xbd\xd0\xbe\xd1\x81\xd1\x82\xd0\xbd\xd1\x8b\xd1\x85 \xd0\xbf\xd1\x80\xd0\xb5\xd0\xb4\xd0\xbb\xd0\xbe\xd0\xb6\xd0\xb5\xd0\xbd\xd0\xb8\xd0\xb9')),
            ],
            options={
                'db_table': 'offers',
            },
        ),
        migrations.CreateModel(
            name='Partner',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xba\xd0\xbb\xd1\x8e\xd1\x87\xd0\xb5\xd0\xb2\xd1\x8b\xd1\x85 \xd0\xbf\xd0\xb0\xd1\x80\xd1\x82\xd0\xbd\xd0\xb5\xd1\x80\xd0\xbe\xd0\xb2')),
            ],
            options={
                'db_table': 'partner',
            },
        ),
        migrations.CreateModel(
            name='Relationship',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xb2\xd0\xb7\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xbe\xd0\xbe\xd1\x82\xd0\xbd\xd0\xbe\xd1\x88\xd0\xb5\xd0\xbd\xd0\xb8\xd0\xb9 \xd1\x81 \xd0\xba\xd0\xbb\xd0\xb8\xd0\xb5\xd0\xbd\xd1\x82\xd0\xb0\xd0\xbc\xd0\xb8')),
            ],
            options={
                'db_table': 'relationship',
            },
        ),
        migrations.CreateModel(
            name='Resources',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xba\xd0\xbb\xd1\x8e\xd1\x87\xd0\xb5\xd0\xb2\xd1\x8b\xd1\x85 \xd1\x80\xd0\xb5\xd1\x81\xd1\x83\xd1\x80\xd1\x81\xd0\xbe\xd0\xb2')),
            ],
            options={
                'db_table': 'resources',
            },
        ),
        migrations.CreateModel(
            name='SalesChannels',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xba\xd0\xb0\xd0\xbd\xd0\xb0\xd0\xbb\xd0\xbe\xd0\xb2 \xd1\x81\xd0\xb1\xd1\x8b\xd1\x82\xd0\xb0')),
            ],
            options={
                'db_table': 'saleschannels',
            },
        ),
        migrations.CreateModel(
            name='Segments',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xbf\xd0\xbe\xd1\x82\xd1\x80\xd0\xb5\xd0\xb1\xd0\xb8\xd1\x82\xd0\xb5\xd0\xbb\xd1\x8c\xd1\x81\xd0\xba\xd0\xb8\xd1\x85 \xd1\x81\xd0\xb5\xd0\xb3\xd0\xbc\xd0\xb5\xd0\xbd\xd1\x82\xd0\xbe\xd0\xb2')),
            ],
            options={
                'db_table': 'segments',
            },
        ),
        migrations.CreateModel(
            name='Stream',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('name', models.TextField(verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb8\xd0\xbc\xd0\xb5\xd0\xbd\xd0\xbe\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xbf\xd0\xbe\xd1\x82\xd0\xbe\xd0\xba\xd0\xbe\xd0\xb2 \xd0\xbf\xd0\xbe\xd1\x81\xd1\x82\xd1\x83\xd0\xbf\xd0\xbb\xd0\xb5\xd0\xbd\xd0\xb8\xd1\x8f \xd0\xb4\xd0\xbe\xd1\x85\xd0\xbe\xd0\xb4\xd0\xbe\xd0\xb2')),
            ],
            options={
                'db_table': 'stream',
            },
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('user', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
                'db_table': 'userprofile',
            },
        ),
        migrations.CreateModel(
            name='UserSession',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hidden', models.BooleanField(default=False)),
                ('last_activity', models.DateTimeField(auto_now=True)),
                ('session', models.ForeignKey(to='sessions.Session', unique=True)),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'django_session_user',
            },
        ),
    ]
