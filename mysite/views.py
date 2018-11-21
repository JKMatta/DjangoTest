# myproject/views.py
from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'index.html'

class Adopta(TemplateView):
    template_name = 'post_list.html'