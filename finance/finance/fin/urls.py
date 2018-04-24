from django.contrib import admin
from django.urls import path
from finance.fin import views

urlpatterns = [
    path('test/', views.home),
    path('admin/', admin.site.urls),
]
