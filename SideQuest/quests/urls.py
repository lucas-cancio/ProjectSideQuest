from django.urls import path

from . import views

app_name = "quests"
urlpatterns = [
    path("search/", views.questSearch, name="questSearch"),
    path("details/", views.questDetails, name="questDetails"),
    path("create/", views.questCreator, name="questCreator"),
]