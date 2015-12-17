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
	s = ShippingCosts()
	s.name = 'Китай'
	s.country_one = None
	s.country_two = 130
	s.country_three = 230
	s.country_four = 320
	s.country_five = 290
	s.save()

	s = ShippingCosts()
	s.name = 'Россия'
	s.country_one = 130
	s.country_two = None
	s.country_three = 150
	s.country_four = 210
	s.country_five = 245
	s.save()

	s = ShippingCosts()
	s.name = 'Великобритания'
	s.country_one = 230
	s.country_two = 150
	s.country_three = None
	s.country_four = 220
	s.country_five = 180
	s.save()

	s = ShippingCosts()
	s.name = 'Бразилия'
	s.country_one = 320
	s.country_two = 210
	s.country_three = 220
	s.country_four = None
	s.country_five = 120
	s.save()

	s = ShippingCosts()
	s.name = 'США'
	s.country_one = 290
	s.country_two = 245
	s.country_three = 180
	s.country_four = 120
	s.country_five = None
	s.save()

