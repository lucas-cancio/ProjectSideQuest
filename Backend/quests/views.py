from typing import Any
from django.db.models.query import QuerySet
from django.shortcuts import render
from django.views import generic

from .models import Quest


class QuestSearchView(generic.ListView):
    model = Quest
    template_name = "quests/questSearch.html"
    context_object_name = "quest_results"

    def get_queryset(self):
        return Quest.objects.filter(start_waypoint__isnull=False).filter(pub_date__isnull=False)[:5]
    


class QuestDetailsView(generic.DetailView):
    model = Quest
    template_name = "quests/questDetails.html"

def questCreator(request):
    return render(request, "quests/questCreator.html")