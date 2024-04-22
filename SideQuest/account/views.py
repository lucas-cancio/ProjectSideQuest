from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from .models import Profile

def loginView(request):
    return render(request, "account/login.html")

def authorizeUserLogin(request):
    
    username = request.POST["username"]
    password = request.POST["password"]

    user = authenticate(request, username=username, password=password)

    if user is not None:
        print(username + " IS AUTHENTiCATED")
        login(request, user)
        return HttpResponseRedirect(reverse("account:profile"))
    else:
        login_error_msg = "Error: Invalid login credentials"
        return render(request, "account/login.html", {"login_error_msg": login_error_msg})


def signup(request):
    return render(request, "account/signup.html")

def createUser(request):
    
    firstName = request.POST["firstName"]
    lastName = request.POST["lastName"]
    username = request.POST["username"]
    email = request.POST["email"]
    password = request.POST["password"]
    confirmedPassword = request.POST["confirmedPassword"]

    # validate sign up info
    validation_error_msgs = validate_signup_info(firstName, lastName, username, email, password, confirmedPassword)

    if (validation_error_msgs == {}):

        # create user and profile instance
        user = User.objects.create_user(username=username, email=email, first_name=firstName, last_name=lastName, password=password)
        user.save()

        userProfile = Profile.create_profile(user=user)
        userProfile.save()

        return HttpResponseRedirect(reverse("account:login"))
    
    else:
        return render(request, "account/signup.html", {"validation_error_msgs": validation_error_msgs})

def signOut(request):
    logout(request)
    return HttpResponseRedirect(reverse("account:login"))

@login_required
def profile(request):

    return render(request, "account/profile.html")
        



######## HELPER FUNCTIONS ###############

def validate_signup_info(firstName, lastName, username, email, password, confirmedPassword):

    validation_error_msgs = {}

    feedback = checkIfEmailAlreadyRegistered(email)
    if (feedback):
        validation_error_msgs["emailFeedback"] = feedback

    feedback = checkIfUsernameAlreadyExists(username)
    if (feedback):
        validation_error_msgs["usernameFeedback"] = feedback

    feedback = validatePasswordEntry(password, confirmedPassword)
    if (feedback):
        validation_error_msgs["passwordFeedback"] = feedback

    return validation_error_msgs


def checkIfEmailAlreadyRegistered(email):

    usersWithSameEmail = User.objects.filter(email=email)
    return "This email is already in use." if usersWithSameEmail.count() > 0 else ""
    

def checkIfUsernameAlreadyExists(username):

    usersWithSameUsername = User.objects.filter(username=username)
    return "This username is already in use." if usersWithSameUsername.count() > 0 else ""


def validatePasswordEntry(password, confirmedPassword):

    minPasswordLength = 8

    if (len(password) < minPasswordLength):
        return "Password must contain at least " + str(minPasswordLength) + " characters."

    if (password != confirmedPassword):
        return "Passwords do not match"
    
    return ""
    