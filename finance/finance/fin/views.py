from django.shortcuts import render
from finance.fin.models import Company

def home(request):
    context = {
        'namez': Company.objects.count(),
        # 'openning': Company.objects.openning(),

    }
    return render(request, "base.html", context)
