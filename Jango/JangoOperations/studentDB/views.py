from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
# Create your views here.
def home(request):
    if request.method =="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(username=username,password=password)
        if user is not None :
            login(request,user)
            messages.success(request,"Login successfully")
            return redirect('home')
        else:
            messages.error(request,"Failed to login")
            return redirect('home')
    return render(request,'home.html',{})

def about(request):
    return render(request,'about.html',{})

def register_user(request):
    if request.method == "POST":
        form=UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success("registration successfully")
            return redirect('home')
    else:
        form=UserCreationForm()
    return render(request,'register.html',{'form':form})

def logout_user(request):
    logout(request)
    messages.success(request,"Logout successfully")
    return redirect("home")