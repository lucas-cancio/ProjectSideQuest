from django.test import TestCase
from django.utils import timezone
from django.db.utils import IntegrityError
from django.urls import reverse
from django.template.loader import render_to_string

from django.contrib.auth.models import User
from .models import Profile
from quests.models import Quest

class ProfileModelTests(TestCase):
    def test_create_profile_with_class_method(self):
        """
        A profile instance created with the Profile 'create_profile' class method is created with correct 
        initial values: with the inputted user, no xp, no quests completed, and date_created is set.
        """
        user = User.objects.create(first_name="John", last_name="Doe", email="john_doe@example.com", username="john_doe", password="12345678")
        profile = Profile.create_profile(user=user)

        self.assertEqual(profile.user, user)
        self.assertEqual(profile.xp, 0)
        self.assertEqual(profile.quests_completed.count(), 0)
        self.assertIsNotNone(profile.date_created)

    def test_create_profile_with_objects_create_method(self):
        """
        A profile instance created with the 'Profile.objects.create' method is created with correct inputted values.
        """
        user = User.objects.create(first_name="John", last_name="Doe", email="john_doe@example.com", username="john_doe", password="12345678")
        
        _xp = 5
        _now = timezone.now()
        profile = Profile.objects.create(user=user, xp=_xp, date_created=_now)

        self.assertEqual(profile.user, user)
        self.assertEqual(profile.xp, _xp)
        self.assertEqual(profile.quests_completed.count(), 0)
        self.assertEqual(profile.date_created, _now)

    def test_str_representation(self):
        """
        The string representation of a profile instance is the profile's user's space-separated first and last name.
        """
        user = User.objects.create(first_name="John", last_name="Doe", email="john_doe@example.com", username="john_doe", password="12345678")
        profile = Profile.create_profile(user=user)
        
        self.assertEqual(str(profile), profile.user.first_name + " " + profile.user.last_name)

    def test_user_field_cannot_be_null(self):
        """
        A profile created without a user with the 'objects.create' function raises an IntegrityError and with the 
        'Profile.create_profile' class method, it does not create the profile and return None.
        """
        profile = Profile.create_profile(user=None)
        self.assertIsNone(profile)

        with self.assertRaises(IntegrityError):
            Profile.objects.create(user=None)

    def test_add_quest_completed(self):
        """
        A quest can be added to a profile instance's quests_completed many-to-many field
        """
        user = User.objects.create(first_name="John", last_name="Doe", email="john_doe@example.com", username="john_doe", password="12345678")
        profile = Profile.create_profile(user=user)
        quest = Quest.objects.create(name="dummyQuest", rating=3, difficulty=2)

        profile.quests_completed.add(quest)

        self.assertIn(quest, profile.quests_completed.all())


class ProfileViewAndTemplateTests(TestCase):

    def setUp(self):
        self.user = User.objects.create(first_name="John", last_name="Doe", username="John_Doe", password="123456789")
        self.profile = Profile.create_profile(self.user)
        
    def test_profile_inaccessible_when_user_not_logged_in(self):
        """
        URL '/account/profile/ returns 302 status code because the view redirects the user to the login page since they
        are not logged in.
        """
        self.client.logout()
        response = self.client.get(reverse("account:profile"))

        self.assertEqual(response.status_code, 302)        


    def test_user_has_no_quests_completed(self):
        """
        Quests completed section informs user that they have not completed any quests and provides link to Quest
        Search Page.
        """
        self.client.force_login(self.user)
        response = self.client.get(reverse("account:profile"))

        expectedHTMLOutput = render_to_string("account/profile.html", {'user': self.user})
        self.assertIn(response.content.decode(), expectedHTMLOutput)

    def test_user_has_quests_completed(self):
        """
        Quests completed section displays list of quests user has completed.
        """
        self.client.force_login(self.user)

        quest1 = Quest.objects.create(name="First completed quest", rating=1, difficulty=2)
        quest2 = Quest.objects.create(name="Second completed quest", rating=2, difficulty=3)
        self.user.profile.quests_completed.add(quest1)
        self.user.profile.quests_completed.add(quest2)

        response = self.client.get(reverse("account:profile"))

        self.assertContains(response, quest1.name)
        self.assertContains(response, quest2.name)

    def test_quests_completed_map_displays_completed_quest_startpoint_markers(self):
        """
        Each quest the user has completed should have a marker on the quests-completed map that indicates the 
        start point of the quest.
        """
        self.client.force_login(self.user)

        quest1 = Quest.objects.create(name="First completed quest", rating=1, difficulty=2)
        quest2 = Quest.objects.create(name="Second completed quest", rating=2, difficulty=3)
        self.user.profile.quests_completed.add(quest1)
        self.user.profile.quests_completed.add(quest2)

        response = self.client.get(reverse("account:profile"))

        self.assertContains(response, "completed_quest_#" + str(quest1.id) + "_marker")
        self.assertContains(response, "completed_quest_#" + str(quest2.id) + "_marker")

    def test_user_has_no_quests_created(self):
        """
        Quests completed section informs user that they have not created any quests and provides link to Quest
        Creation Page.
        """
        self.client.logout()
        response = self.client.get(reverse("account:profile"))

        expectedHTMLOutput = render_to_string("account/profile.html", {'user': self.user})
        self.assertIn(response.content.decode(), expectedHTMLOutput)

    def test_user_has_quests_created(self):
        """
        Quests completed section display list of quests user has created.
        """
        self.client.force_login(self.user)

        quest1 = Quest.objects.create(name="First created quest", rating=1, difficulty=2)
        quest2 = Quest.objects.create(name="Second created quest", rating=2, difficulty=3)
        self.user.profile.quests_created.add(quest1)
        self.user.profile.quests_created.add(quest2)

        response = self.client.get(reverse("account:profile"))

        self.assertContains(response, quest1.name)
        self.assertContains(response, quest2.name)

    def test_quests_created_map_displays_created_quest_startpoint_markers(self):
        """
        Each quest the user has creaetd should have a marker on the quests-created map that indicates the start
        point of the quest.
        """
        self.client.force_login(self.user)

        quest1 = Quest.objects.create(name="First completed quest", rating=1, difficulty=2)
        quest2 = Quest.objects.create(name="Second completed quest", rating=2, difficulty=3)
        self.user.profile.quests_created.add(quest1)
        self.user.profile.quests_created.add(quest2)

        response = self.client.get(reverse("account:profile"))

        self.assertContains(response, "created_quest_#" + str(quest1.id) + "_marker")
        self.assertContains(response, "created_quest_#" + str(quest2.id) + "_marker")