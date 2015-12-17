# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_factory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='factory',
            name='price',
        ),
    ]
