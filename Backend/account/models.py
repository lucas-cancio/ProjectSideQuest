from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Profile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile", null=False)
    xp = models.IntegerField('XP', default=0)

    quests_completed = models.ManyToManyField('quests.Quest', related_name="completed_by")

    date_created = models.DateField()

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name
    
    @classmethod
    def create_profile(profileClass, user):
        """
        Class method to create a new instance of profile
        """
        if (user == None):
            return
            
        instance = profileClass.objects.create(user=user, xp=0, date_created=timezone.now())
        return instance


    