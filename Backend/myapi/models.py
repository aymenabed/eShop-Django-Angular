
from django.db import models
from django.conf import settings
from django.utils import timezone
import os
# Create your models here.

class Caddie(models.Model):
  created_date = models.DateTimeField(default=timezone.now)
  symbol = models.CharField(max_length=129, blank=True)

  def __str__(self):
    return self.symbol
class Product(models.Model):
    symbol= models.CharField(max_length=129, blank=True)
    name= models.CharField(max_length=255)
    short_desc =models.TextField(null=True, blank=True)
    photo = models.TextField(null=True, blank=True)
    qte = models.IntegerField(null=True, blank=True)
    total = models.FloatField(null=True, blank=True)

    qteDemander = models.IntegerField(null=True, blank=True)
    prix=models.FloatField(null=True, default=10)
    caddie = models.ForeignKey(Caddie, on_delete=models.CASCADE)

    created_date = models.DateTimeField(default=timezone.now)



