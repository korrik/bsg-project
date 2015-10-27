from django.conf.urls import include, url
from django.contrib import admin
from core import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^main', views.main),
    url(r'^login', views.login),
    url(r'^admin/', include(admin.site.urls)),
]
