
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home', include('api.urls')),
    path('api/', include('snippets.urls')),
]
