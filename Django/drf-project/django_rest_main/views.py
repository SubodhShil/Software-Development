from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from students.models import Student


def studentsView(request):
    students = Student.objects.all()
    students_list = list(students.values())
    print(students)
    return JsonResponse(students_list, safe=False)
