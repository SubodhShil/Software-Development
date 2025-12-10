from django.db import models


class Employee(models.Model):
    employee_id = models.CharField(max_length=20)
    employee_name = models.CharField(max_length=100)
    designation = models.CharField(max_length=30)

    def __str__(self):
        return self.employee_name
