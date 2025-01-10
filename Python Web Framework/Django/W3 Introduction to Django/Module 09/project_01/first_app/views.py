from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return HttpResponse('This is a home page.')


def courses(request):
    return HttpResponse("This is a course page from first_app.")


def about(request):
    return HttpResponse("This is about page from first_app.")
