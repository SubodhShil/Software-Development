from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Student

def studentsView(request):
    students = Student.objects.all()
    students_list = list(students.values())
    return JsonResponse(students_list)
