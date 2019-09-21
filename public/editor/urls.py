from django.conf.urls import url
from FlipKraft.editor import views as editor_views

urlpatterns = (
    url('', editor_views.editor),
)
