from django.shortcuts import render
from django.http import HttpResponse

app_name = "core"
def index(request):
    return render(request, "core/landing.html")