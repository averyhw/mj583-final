from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.companies, name = 'companies_list'),
    # path('companies', views.companies, name='companies_list'),
    path('company/<int:pk>', views.company),

    path('admin/', admin.site.urls),
]
