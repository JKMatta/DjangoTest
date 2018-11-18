# myproject/views.py
from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'home.html'

class Adopta(TemplateView):
    template_name = 'post_list.html'