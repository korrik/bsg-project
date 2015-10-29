from django.conf.urls import include, url
from django.contrib import admin
from bsg.core.views import *

urlpatterns = [
    url(r'^$', index),
    url(r'^main', main),
    url(r'^login', login),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^registration', registration),

    url(r'^remoting/router/$', remotingProvider.router),
    url(r'^remoting/provider.js', remotingProvider.script),
]
