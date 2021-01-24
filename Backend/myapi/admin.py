# Enregistrer les modèles sur le site d'administration
# Il ne sait pas que le Produit et le Caddie modèles existe, mais avec deux lignes de code, nous pouvons en parler des Produits.

from django.contrib import admin
from myapi.models import Product, Caddie
# Register your models here.
# afficher / Enregistrer les modèles (tables) dans l'interface d'administration
admin.site.register(Product)
admin.site.register(Caddie)
