from django.shortcuts import render_to_response, redirect, render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext, loader
from django.contrib import auth
from django.core.context_processors import csrf
from django.template import RequestContext
from logsys.models import User
from .forms import *
from django.views.generic import *
from .models import *
from django.contrib.auth.decorators import login_required

class LoginRequiredMixin(object):
    @classmethod
    def as_view(cls, **initkwargs):
        view = super(LoginRequiredMixin, cls).as_view(**initkwargs)
        return login_required(view)


@login_required
def main(request):
	args = {}
	args.update(csrf(request))
	args['term'] = auth.get_user(request).term
	if request.method == 'POST':
	    a = User.objects.get(pk = 1)
	    form = UserProfile(request.POST or None, instance = a)
	    if form.is_valid():
	        args['term'] = auth.get_user(request).term
	        term = auth.get_user(request).term
	        term += 1
	        form.save()
	        return redirect ('main.html')
	    else:
	        args['form'] = form
	return render_to_response('main.html', RequestContext(request, args))


class company (TemplateView, LoginRequiredMixin):
    template_name = 'company.html'

    def view(self, request):
        return render_to_response(template_name, context_instance=RequestContext(request))


class product (TemplateView, LoginRequiredMixin):
    template_name = 'product.html'

    def view(self, request):
        return render_to_response(template_name, context_instance=RequestContext(request))

class finance (TemplateView, LoginRequiredMixin):
    template_name = 'finance.html'
    #form_class = DataforInvestorForm

    """def get(self, request, *args, **kwargs):
        c = {}
        form = self.form_class
        c['form'] = form
        return render (request, self.template_name, c)

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            form.save(user=self.request.user)
            return HttpResponseRedirect('finance.html')
        return render(request, self.template_name, {'form': form})"""

    def view(self, request):
        return render_to_response(self.template_name, context_instance=RequestContext(request))

class marketing (TemplateView, LoginRequiredMixin):
    template_name = 'marketing.html'

    def view(self, request):
        return render_to_response(template_name, context_instance=RequestContext(request))


class hr (TemplateView, LoginRequiredMixin):
    template_name = 'hr.html'

    def view(self, request):
        return render_to_response(template_name, context_instance=RequestContext(request))

class production(TemplateView, LoginRequiredMixin):
    template_name = 'production.html'

    def view(self, request):
        return render_to_response(template_name, context_instance=RequestContext(request))
