from django.shortcuts import render_to_response
from django.http import HttpResponse, Http404
from django.utils import simplejson as json
from django.contrib import auth
from django.core.context_processors import csrf
from forms import UserRegistrationForm
from django.utils.translation import ugettext_lazy, ugettext as _


def login(request):
    c={}
    c.update(csrf(request))
    return render_to_response('user_account/login.html',c)

def auth_login(request):
    if request.is_ajax():
        username = request.POST.get('username', '')
        password = request.POST.get('password', '')
        user = auth.authenticate(username = username, password = password)
        response_data = {}

        if user is not None:
            auth.login(request, user)
            response_data['success'] = 1
            response_data['message'] = _("Authetication was successful")
            response_data['user'] = user.username
        else:
            response_data['success'] = 0
            response_data['message'] = _("Invalid credentials")

        return HttpResponse(json.dumps(response_data), content_type="application/json")
    else:
        raise Http404


def register_user(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/user/register')

    else:
        form = UserRegistrationForm()
    args = {}
    args.update(csrf(request))

    args['form'] = form

    return render_to_response('user_account/register.html', args)

