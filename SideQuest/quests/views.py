from django.shortcuts import render

# Create your views here.

def questSearch(request):
    return render(request, "quests/questSearch.html")

def questDetails(request):
    return render(request, "quests/questDetails.html")

def questCreator(request):
    return render(request, "quests/questCreator.html")