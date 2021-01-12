from rest_framework import serializers
from .models import Product, Caddie


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