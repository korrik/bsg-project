from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^$', include('landing.urls', namespace='landing')),
    url(r'^admin/', include(admin.site.urls)),
]
