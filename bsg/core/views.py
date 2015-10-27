#!/usr/bin/env python
# -*- coding: utf-8 -*-

import collections
import json

from django.template import RequestContext
from django.shortcuts import render_to_response
from django.forms.models import model_to_dict
from django.db.models import Q
from django.core import serializers

from bsg.core.models import *

def index(request):
    return render_to_response('index.html', context_instance=RequestContext(request))

def main(request):
    # TODO: Проверка на авторизацию
    return render_to_response('main.html', context_instance=RequestContext(request))

def login(request):
    return render_to_response('login.html', context_instance=RequestContext(request))
