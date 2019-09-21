from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required(login_url='/account/login/')
def editor(request):
    """
    Load editor template for unity
    :param request: basic request
    :return: httml template
    """
    return render(request, 'unity/editor.html')
