# -*- coding: utf-8 -*-

from django.core.files.storage import FileSystemStorage
from django.contrib.staticfiles.finders import BaseStorageFinder
from django.conf import settings


class StaticRootFinder(BaseStorageFinder):
    #adds STATIC_ROOT to the DEFAULT_FILE_STORAGE
    storage = FileSystemStorage(settings.STATIC_ROOT, settings.STATIC_URL) 
