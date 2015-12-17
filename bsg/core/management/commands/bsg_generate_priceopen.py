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
	p = PriceCountry()
	p.name = 'США'
	p.factory = 8500000
	p.representation = 4250000
	p.shop = 2125000
	p.save()

	p = PriceCountry()
	p.name = 'Великобритания'
	p.factory = 7500000
	p.representation = 3750000
	p.shop = 1875000
	p.save()

	p = PriceCountry()
	p.name = 'Россия'
	p.factory = 6500000
	p.representation = 3250000
	p.shop = 1625000
	p.save()

	p = PriceCountry()
	p.name = 'Бразилия'
	p.factory = 6000000
	p.representation = 3000000
	p.shop = 1500000
	p.save()

	p = PriceCountry()
	p.name = 'Китай'
	p.factory = 5000000
	p.representation = 2500000
	p.shop = 1250000
	p.save()


