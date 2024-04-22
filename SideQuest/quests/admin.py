from django.contrib import admin

from .models import Quest, Waypoint

class WaypointInline(admin.StackedInline):
    model = Waypoint
    extra = 2

class QuestAdmin(admin.ModelAdmin):
    fields = ["name", "difficulty", "creator", "rating", "pub_date", "start_waypoint"]

    inlines = [WaypointInline]



admin.site.register(Quest, QuestAdmin)