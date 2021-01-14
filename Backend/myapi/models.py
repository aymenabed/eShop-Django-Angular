from django.db import models
from django.conf import settings
from django.utils import timezone
import os

# Create your models here.


# definition du Model caddie
class Caddie(models.Model):
    created_date = models.DateTimeField(default=timezone.now)
    symbol = models.CharField(max_length=129, blank=True)

    #constructeur
    def __str__(self):
        return self.symbol


# definition du Model produit
class Product(models.Model):
    symbol = models.CharField(max_length=129, blank=True)
    name = models.CharField(max_length=255)
    short_desc = models.TextField(null=True, blank=True)
    photo = models.TextField(null=True, blank=True)
    # qte produit en stock
    qte = models.IntegerField(null=True, blank=True)
    # qte demander * prix de chaque produit (prix unitaire)
    total = models.FloatField(null=True, blank=True)
    qteDemander = models.IntegerField(null=True, blank=True)
    prix = models.FloatField(null=True, default=10)
    # Clé étrangère reference caddie
    caddie = models.ForeignKey(Caddie, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now)
