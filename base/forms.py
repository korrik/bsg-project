# -*- coding: utf-8 -*-

"""from django import forms
from .models import *

class UserProfile(forms.ModelForm):
    term = forms.IntegerField()
    class Meta:
        model = User
        fields = ['term']

class DataforInvestorForm(ModelForm):
    idea_and_product = forms.CharField(widget = forms.Textarea)
    market_capacity = forms.CharField(widget = forms.Textarea)
    competitors = forms.CharField(widget = forms.Textarea)
    costs = forms.CharField(widget = forms.Textarea)
    investements = forms.CharField(widget = forms.Textarea)
    SAM_number = forms.IntegerField()
    SOM_number = forms.IntegerField()
    TAM_field = forms.ChoiceField(widget = forms.Select(), choices = ([ ('L','Бюджетный'),
    ('M','Средний'),
    ('P','Премиальный'), ]), required = True)
    SAM_field = forms.ChoiceField(widget = forms.Select(), choices = ([ ('R','Россия'),
    ('U','США'),
    ('C','Китай'), ]), required = True)

    class Meta:
        model = DataforInvestor
        fields = '__all__'"""
