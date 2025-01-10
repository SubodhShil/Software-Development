from django.shortcuts import render
from django.http import HttpResponse


def about(request):
    return HttpResponse("Navigation about page")


def contact(request):
    return HttpResponse("Contact")
