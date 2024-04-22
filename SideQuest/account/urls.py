from django.urls import path

from . import views

app_name = "account"
urlpatterns = [
    path("login/", views.loginView, name="login"),
    path("signup/", views.signup, name="signup"),
    path("profile/", views.profile, name="profile"),
    path("createUser/", views.createUser, name="createUser"),
    path("authorizeUserLogin/", views.authorizeUserLogin, name="authorizeUserLogin"),
    path("signout/", views.signOut, name="signOut"),
]