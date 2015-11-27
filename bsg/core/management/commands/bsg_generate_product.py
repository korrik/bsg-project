# -*- coding: utf-8 -*-
from django.core.management.base import BaseCommand
from bsg.core.models import *

import sys

class Command(BaseCommand):

	def handle(self, *args, **options):
		"""
		Start generations
		:param args:
		:param options:
		:return:
		"""
	l = ['Сверхскоростной Wifi+LTE', '10мп камера', 'Retina дисплей', '5,0 Экран', '2000 mah батарея', '4-х ядерный сверхскоростной процессор']

	for item in l:
		r = RandD()
		r.name = item
		r.save()