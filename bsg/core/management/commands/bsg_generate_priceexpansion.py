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
	p = PriceExpansion()
	p.power = 5000
	p.price = 7000000
	p.save()

	p = PriceExpansion()
	p.power = 15000
	p.price = 20000000
	p.save()

	p = PriceExpansion()
	p.power = 50000
	p.price = 70000000
	p.save()

	p = PriceExpansion()
	p.power = 250000
	p.price = 150000000
	p.save()

	p = PriceExpansion()
	p.power = 1000000
	p.price = 300000000
	p.save()



