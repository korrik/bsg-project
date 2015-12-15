# -*- coding: utf-8 -*-

from django import forms
from django.db import models
from django.db import IntegrityError
from django.conf import settings
from django.contrib.auth.models import User, Group
from django.db.models.signals import pre_delete, post_save, post_syncdb
from django.contrib.sessions.models import Session
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.contenttypes.models import ContentType
from django.core.files.storage import FileSystemStorage

from bsg.core.db.models import BaseBsgModel
from bsg.core.db.fields import ForeignKeyExtended, ManyToManyFieldExtended


DB_MODEL_VERSION = 1

class History(BaseBsgModel):
	"""
    Model for storing information about events like create, update, delete etc.
    `user` - username field
    `operation` - action, like update, create, login, logout etc.
    `time` - datetime of action
    `result` - true/false
    `info` - message about result (error info, success message)
    """
	user = ForeignKeyExtended(User, default_rel_fieldname='username', blank=True, null=True)
	operation = models.TextField(blank=False, null=False)
	time = models.DateTimeField(blank=False, null=False)
	result = models.BooleanField(blank=False, null=False)
	info = models.TextField(blank=True, null=True)

	class Meta:
		db_table = 'history'

	@staticmethod
	def action():
		return 'History'

class UserProfile(BaseBsgModel):
	"""
	Model userprofile  TODO
	"""
	user = ForeignKeyExtended(User, default_rel_fieldname='username', blank=True, null=True)

	class Meta:
		db_table = 'userprofile'

	@staticmethod
	def action():
		return 'UserProfile'

	def __unicode__(self):
		return self.user.username

class UserSession(BaseBsgModel):
	"""
	Model associates session id with it's user
	"""
	session = models.OneToOneField(Session, null=False, blank=False, unique=True)
	user = models.ForeignKey(User, null=False, blank=False)
	last_activity = models.DateTimeField(auto_now=True)

	class Meta:
		db_table = 'django_session_user'


# Company models!

class Partner(BaseBsgModel):
	"""
	Model Key Partners of Company
	"""
	name = models.TextField(verbose_name = 'Наименование ключевых партнеров', null=False, blank=False)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'partner'

	@staticmethod
	def action():
		return 'Partner'

class Activities(BaseBsgModel):
	"""
	Model Key Activities of Company
	"""
	name = models.TextField(verbose_name = 'Наименование ключевых видов деятельности', null=False, blank=False)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'activities'

	@staticmethod
	def action():
		return 'Activities'

class Costs(BaseBsgModel):
	"""
	Model Key Costs of Company
	"""
	name = models.TextField(verbose_name = 'Наименование ключевых издержок', null=False, blank=False)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'costs'

	@staticmethod
	def action():
		return 'Costs'

class Resources(BaseBsgModel):
	"""
	Model Key resources of Company
	"""
	name = models.TextField(verbose_name = 'Наименование ключевых ресурсов', null=False, blank=False)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'resources'

	@staticmethod
	def action():
		return 'Resources'

class SalesChannels(BaseBsgModel):
	"""
	Model Sales Channels of Company
	"""
	name = models.TextField(verbose_name = 'Наименование каналов сбыта', null=False, blank=False)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'saleschannels'

	@staticmethod
	def action():
		return 'SalesChannels'

class Offers(BaseBsgModel):
	"""
	Model evaluative Offers of Company
	"""
	name = models.TextField(verbose_name = 'Наименование ценностных предложений', null=False, blank=False)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'offers'

	@staticmethod
	def action():
		return 'Offers'

class Relationship(BaseBsgModel):
	"""
	Model Customer Relationship of Company
	"""
	name = models.TextField(verbose_name = 'Наименование взаимоотношений с клиентами', null=False, blank=False)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'relationship'

	@staticmethod
	def action():
		return 'Relationship'

class Stream(BaseBsgModel):
	"""
	Model Stream Income of Company
	"""
	name = models.TextField(verbose_name = 'Наименование потоков поступления доходов', null=False, blank=False)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'stream'

	@staticmethod
	def action():
		return 'Stream'

class Segments(BaseBsgModel):
	"""
	Model Segments of Company
	"""
	name = models.TextField(verbose_name = 'Наименование потребительских сегментов', null=False, blank=False)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'segments'

	@staticmethod
	def action():
		return 'Segments'

class ModelProduct(BaseBsgModel):
	"""
	Model mail field product for version
	"""
	connect_module = models.TextField(verbose_name='Интернет-соединение', null=True, blank=True)
	back_camera = models.TextField(verbose_name='Задняя камера', null=True, blank=True)
	link_module = models.TextField(verbose_name='Модуль связи', null=True, blank=True)
	display = models.TextField(verbose_name='Дисплей', null=True, blank=True)
	touch_screen = models.TextField(verbose_name='Тачскрин', null=True, blank=True)
	battery = models.TextField(verbose_name='Батарея', null=True, blank=True)
	processor = models.TextField(verbose_name='Процессор', null=True, blank=True)
	case = models.TextField(verbose_name='Корпус', null=True, blank=True)

	def __unicode__(self):
		return self.connect_module

	class Meta:
		db_table = 'modelproduct'

	@staticmethod
	def action():
		return 'ModelProduct'



class Product(BaseBsgModel):
	"""
	Model  Main Product
	"""
	name = models.TextField(verbose_name = 'Наименование модели', null=False, blank=False)
	first = ForeignKeyExtended(ModelProduct, default_rel_fieldname='connect_module', null=True, blank=True, related_name='+')
	second = ForeignKeyExtended(ModelProduct, default_rel_fieldname='back_camera', null=True, blank=True, related_name='+')
	result = ForeignKeyExtended(ModelProduct, default_rel_fieldname='link_module', null=True, blank=True, related_name='+')


	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'product'

	@staticmethod
	def action():
		return 'Product'

class RandD(BaseBsgModel):
	# это поле заполняется при генерации данных
	name = models.TextField(verbose_name='Наименование компонента ', null=False, blank=False)
	time = models.IntegerField(verbose_name='Время разработки', null=True, blank=True)
	price = models.IntegerField(verbose_name='Стоимость разработки', null=True, blank=True)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'randd'

	@staticmethod
	def action():
		return 'RandD'

class PriceCountry(BaseBsgModel):
	"""
	Model Price open anything in country (CONSTAN)
	"""

	name = models.TextField(verbose_name='Название страны', null=True, blank=True)
	factory = models.TextField(verbose_name='Цены за открытие завода', null=True, blank=True)
	representation = models.TextField(verbose_name='Цены за открытие предстваительства', null=True, blank=True)
	shop = models.TextField(verbose_name='Цены за открытие магазина', null=True, blank=True)

	def __unicode__(self):
		return self.name

	class Meta:
		db_table = 'pricecountry'

	@staticmethod
	def action():
		return 'PriceCountry'