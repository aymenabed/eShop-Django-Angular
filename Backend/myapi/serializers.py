# Importer le sérialiseur de REST Framework
from rest_framework import serializers
# Importer les modèles
from .models import Product, Caddie


#Créer une nouvelle classe qui relie le Produit à son sérialiseur
#Serialization des models produit et caddie
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id', 'name', 'short_desc', 'photo', 'qte', 'qteDemander', 'prix',
            'caddie', 'created_date'
        ]


class CaddieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caddie
        fields = ['id', 'created_date']


# la sérialisation est le processus de conversion d'un fichier Model en JSON.
# À l'aide d'un sérialiseur, nous pouvons spécifier quels champs doivent être présents dans la représentation JSON du modèle.
# Lorsqu'un utilisateur POST des données JSON dans notre API,
# Le sérialiseur convertit ce JSON en modèle Product , Caddie pour que nous puissions les enregistrer ou les valider.