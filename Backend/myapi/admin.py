from django.contrib import admin
from myapi.models import Product, Caddie
# Register your models here.
# afficher tables dans l'interface admin
admin.site.register(Product)
admin.site.register(Caddie)
