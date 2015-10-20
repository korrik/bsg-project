from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    term = models.IntegerField(default = 1)
    balance = models.IntegerField(default = 10000)
