from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.parsers import JSONParser

# importation des serialisations ProductSerializer et CaddieSerializer
from .serializers import ProductSerializer, CaddieSerializer
# importation des models produit et Caddie
from .models import Product, Caddie
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

# ModelViewSetest une vue spéciale fournie par Django Rest Framework.
# Il gérera GET et POST for Produits sans que nous ayons à faire plus de travail.


#Nous devons rendre les différents Produit au format JSON.
# Api Get Liste produite associer au caddie
@api_view(["GET"])
# fonction get produit du caddie (params :  requet et id caddie)
def get_products(request, caddie_id):
    products = Product.objects.filter(caddie_id=caddie_id)
    serializer = ProductSerializer(products, many=True)
    return JsonResponse({'products': serializer.data},
                        safe=False,
                        status=status.HTTP_200_OK)


# Api Get Liste All produits
@api_view(["GET"])
def get_Allproducts(request):
    products = Product.objects.filter()
    serializer = ProductSerializer(products, many=True)
    return JsonResponse({'products': serializer.data},
                        safe=False,
                        status=status.HTTP_200_OK)


# Api associer produit au caddie
@api_view(["POST"])
def add_product(request, product_id):
    # data revient du front
    payload = json.loads(request.body)
    product = Product.objects.filter(id=product_id)
    # update produit
    product.update(**payload)
    productitem = Product.objects.get(id=product_id)
    serializer = ProductSerializer(productitem)
    return JsonResponse({'product': serializer.data},
                        safe=False,
                        status=status.HTTP_200_OK)


# Api add caddie
@api_view(["POST"])
def add_caddie(request):
    if request.method == 'POST':
        caddie_data = JSONParser().parse(request)
        caddie_serializer = CaddieSerializer(data=caddie_data)
        if caddie_serializer.is_valid():
            caddie_serializer.save()
            return JsonResponse(caddie_serializer.data,
                                status=status.HTTP_201_CREATED)
        return JsonResponse(caddie_serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)
