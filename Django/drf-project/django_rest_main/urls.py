
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/', include('students.urls')),
    # API endpoints
    path('api/v1/', include('api.urls')), 
]
