from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
      url(r"^$", 'arkust.home.views.home', name='home'),
    # Examples:
    # url(r'^$', 'arkust.views.home', name='home'),
    # url(r'^arkust/', include('arkust.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
    url(r'^user/login/$', 'arkust.user_account.views.login'),
    url(r'^user/auth/$', 'arkust.user_account.views.auth_login'),
    url(r'^user/register/$', 'arkust.user_account.views.register_user'),
)

from django.contrib.staticfiles.urls import staticfiles_urlpatterns
   
urlpatterns += staticfiles_urlpatterns()