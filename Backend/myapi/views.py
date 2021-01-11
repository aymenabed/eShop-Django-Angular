from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.parsers import JSONParser

from .serializers import ProductSerializer,CaddieSerializer
from .models import Product,Caddie
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist


@api_view(["GET"])
def get_products(request,caddie_id):
    user = request.user.id
    products = Product.objects.filter(caddie_id=caddie_id)
    serializer = ProductSerializer(products, many=True)
    return JsonResponse({'products': serializer.data}, safe=False, status=status.HTTP_200_OK)
@api_view(["GET"])
def get_Allproducts(request):
    user = request.user.id
    products = Product.objects.filter()
    serializer = ProductSerializer(products, many=True)
    return JsonResponse({'products': serializer.data}, safe=False, status=status.HTTP_200_OK)

def get_caddie(request):
    user = request.user.id
    caddie = Caddie.objects.filter()
    serializer = CaddieSerializer(caddie, many=True)
    return JsonResponse({'caddie': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["POST"])
def add_product(request,product_id):
    payload = json.loads(request.body)

    product = Product.objects.filter(id=product_id)
    product.update(**payload)
    productitem = Product.objects.get(id=product_id)
    serializer = ProductSerializer(productitem)
    return JsonResponse({'product': serializer.data}, safe=False, status=status.HTTP_200_OK)

@api_view(["POST"])
def add_caddie(request):
    if request.method == 'POST':
        caddie_data = JSONParser().parse(request)
        caddie_serializer = CaddieSerializer(data=caddie_data)
        if caddie_serializer.is_valid():
            caddie_serializer.save()
            return JsonResponse(caddie_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(caddie_serializer.errors, status=status.HTTP_400_BAD_REQUEST)