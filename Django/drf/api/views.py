from django.shortcuts import render
from django.http import JsonResponse
from products.models import Product

# Create your views here.


def api_home(request, *args, **kwargs):
    # Get a random product from the database
    model_data = Product.objects.all().order_by("?").first()
    data = {}

    return JsonResponse({"message": "Hi, welcome to DRF with Subodh."})
