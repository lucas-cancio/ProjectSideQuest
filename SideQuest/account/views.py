from django.shortcuts import render

def login(request):
    return render(request, "account/login.html")

def signup(request):
    return render(request, "account/signup.html")

def profile(request):
    return render(request, "account/profile.html")