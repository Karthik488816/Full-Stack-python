from django.http import HttpResponse
from django.shortcuts import render
from student.models import Student
from django.db.models import Q
from .forms import Contact_form
def home(request):
    # return HttpResponse("<h1>welcome to Django</h1>")
    # student=Student.objects.all()  #select * from students
    # student=Student.objects.filter(first_name="Karthik")  #select * from students where first_name='Karthik';
    # student=Student.objects.filter(age__gt=10) #greater than
    student=Student.objects.filter(first_name="Sunny",age__gt=10)  #and condition using ,  it displays when both conditions are true
    student=Student.objects.filter(Q(first_name="Sunny") | Q (age__gt=10))
    print(student)
    return render(request,'home.html',{'s':student})

def about(request):
    # return HttpResponse("about page")
    return render(request,'about.html')

def contact(request):
    # return HttpResponse("contact page")
    forms=Contact_form()
    return render(request,'contact.html',{'forms':forms})