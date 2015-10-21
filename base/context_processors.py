from django.contrib import auth
#from django.shortcuts import render_to_response, redirect, render

def extra_context(request):
    args = {}
    args['term'] = auth.get_user(request).term
    args['username'] = auth.get_user(request).username
    args['first_name'] = auth.get_user(request).first_name
    args['last_name'] = auth.get_user(request).last_name
    return args
        