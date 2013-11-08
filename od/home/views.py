from django.shortcuts import render_to_response
from django.utils.translation import ugettext_lazy, ugettext as _

def home(request):
    args={}
    args['description'] = _('arkust');
    args['lang'] = 'en'
    args['title'] = 'arkust'
    return render_to_response('home/home.html', args)
