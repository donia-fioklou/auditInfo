from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from auditApp.views.AnnexeViews import ChapitreList
from auditApp.views.AnnexeViews import SousChapitreList
urlpatterns = [
    path('chapitre/',ChapitreList.as_view() , name='chapitre'),
    path('sous/chapitre/',SousChapitreList.as_view() , name='sous-chapitre'),

]
urlpatterns = format_suffix_patterns(urlpatterns)