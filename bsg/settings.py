# -*- coding: utf-8 -*-
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

def rel(*x):
    return os.path.join(os.path.abspath(os.path.dirname(__file__)), *x)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '1tu#(2hi3p(oetlg4g2=uk@$sb%m&mlepkjx^yfe007!cpwbiy'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []
ALLOWED_INCLUDE_ROOTS = ()

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'bsg.core',
    'extdirect.django'
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

ROOT_URLCONF = 'bsg.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(os.path.dirname(__file__), 'templates').replace('\\', '/')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                "django.contrib.auth.context_processors.auth",
                "django.template.context_processors.debug",
                "django.template.context_processors.i18n",
                "django.template.context_processors.media",
                "django.template.context_processors.static",
                "django.template.context_processors.tz",
                "django.contrib.messages.context_processors.messages"
            ],
        },
    },
]

WSGI_APPLICATION = 'bsg.wsgi.application'

# # #

CONN_MAX_AGE = 3600
SESSION_COOKIE_AGE = 86400
SESSION_SAVE_EVERY_REQUEST = False

# Database

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'bsg_db',
        'USER': 'root',
        'PASSWORD': 'A0895848298a',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}

# Internationalization

LANGUAGE_CODE = 'ru-ru'
TIME_ZONE = 'Europe/Moscow'
USE_I18N = True
USE_L10N = True
USE_TZ = True
CODING = "utf-8"
# SITE_ID = 1

# Static files (CSS, JavaScript, Images)
STATIC_ROOT = rel('static/')
STATIC_URL = '/static/'

# Media
# MEDIA_ROOT = rel('media/')
# MEDIA_URL = '/media/'

STATICFILES_STORAGE = (
    'django.contrib.staticfiles.storage.StaticFilesStorage'
)

STATICFILES_FINDERS = (
    'bsg.staticfinders.staticfinder.StaticRootFinder',
    # "django.contrib.staticfiles.finders.FileSystemFinder",
    # "django.contrib.staticfiles.finders.AppDirectoriesFinder"
)

#
SERIALIZATION_MODULES = {
    "extdirect": "bsg.core.serializer"
}


#################################
# Using local settings if exists
#################################

try:
    from .local import settings as localsettings
    for name in vars().keys():
        if name[0] == '_':
            continue
        if name.isupper():
            if hasattr(localsettings, name):
                vars()[name] = getattr(localsettings, name)
except ImportError:
    # nothing to do
    pass
