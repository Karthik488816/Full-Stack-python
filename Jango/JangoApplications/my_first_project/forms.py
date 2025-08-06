from django import forms

class Contact_form(forms.Form):
    name=forms.CharField(required=False)
    email=forms.EmailField(label="Enter your email")
    feedback=forms.CharField(widget=forms.Textarea)