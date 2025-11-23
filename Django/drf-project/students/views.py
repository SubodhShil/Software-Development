from django.shortcuts import render
from django.http import HttpResponse


def students(request):
    students = [
        {'id': 1, 'name': 'John Doe', 'age': 25}
    ]

    return HttpResponse(students)
