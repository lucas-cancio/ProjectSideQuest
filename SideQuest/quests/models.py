from django.db import models
from django.utils import timezone
from django.contrib import admin

from django.contrib.auth.models import User



class Waypoint(models.Model):

    name = models.CharField(max_length=60)

    longitude = models.FloatField()
    latitude = models.FloatField()

    quest = models.ForeignKey('Quest', on_delete=models.DO_NOTHING, related_name='quest_passing_through')

    def __str__(self):
        return self.name



class Quest(models.Model):

    name = models.CharField(max_length=80)
    rating = models.FloatField(default=0)
    difficulty = models.IntegerField(default=1)

    start_waypoint = models.ForeignKey(Waypoint, on_delete=models.PROTECT, related_name='quest_starting_here', null=True)

    creator = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='quests_created', null=True)
    pub_date = models.DateTimeField('date published', null=True)


    def __str__(self):
        return self.name
