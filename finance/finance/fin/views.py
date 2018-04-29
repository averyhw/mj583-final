from django.shortcuts import render, get_object_or_404, redirect, render_to_response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from finance.fin.models import Company
import json
from django.http import JsonResponse
from . import models

def home(request):
    context = {
        'namez': Company.objects.count(),
        # 'openning': Company.objects.openning(),

    }
    return render(request, "home.html", context)

def company(request, pk):
    company = get_object_or_404(Company, id=pk)
    context = {
        #course = Course.objects.order_by('?'[0])
        'company' : company,
    }
    return render(request, "company.html", context)

def companies(request):
    companies = Company.objects.all()
    paginator = Paginator(companies, 50) # Show 25 contacts per page
    page = request.GET.get('page')
    companies = paginator.get_page(page)
    context = {
        'companies' : companies
    }
    return render(request, "companies.html", context)

def api(request):
    # selected_company = get_object_or_404(Company, id=pk)
    # data = {
    #     "company": selected_company.openning
    # }
    # return JsonResponse({"company": selected_company.to_json()})

    company = request.GET.get('company')

    companies = models.Company.objects.all()

    data = {
        "companies": [w.to_json() for w in companies],
    }

    return JsonResponse(data)
