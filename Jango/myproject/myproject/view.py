from django.shortcuts import render

def homepage(request):
    data={
        'name':'Karthik',
        'year':2025,
        'location':'Django World',
        'list':['apple','banana','mango'],
        'skills':['HTML','CSS','JS','react Js']
    }
    return render(request, 'homepage.html',data)

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')