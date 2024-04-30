from django.urls import path

from . import views

app_name = "quests"
urlpatterns = [
    path("search/", views.QuestSearchView.as_view(), name="questSearch"),
    path("<int:pk>/", views.QuestDetailsView.as_view(), name="questDetails"),
    path("create/", views.questCreator, name="questCreator"),
]