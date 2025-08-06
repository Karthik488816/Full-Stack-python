from django.db import models

# Create your models here.
class Student(models.Model):
    images=models.ImageField(upload_to='images',null=True)
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=50)
    age=models.IntegerField()
    email=models.EmailField(unique=True,max_length=50)
    branch=models.CharField(max_length=50)
    phone_no=models.CharField(blank=True,max_length=12)
    dob=models.DateField(blank=True)
    grades=models.CharField(max_length=10,null=True)
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.first_name