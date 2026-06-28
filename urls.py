from django.urls import path
from .views import resume_home, upload_resume

urlpatterns = [
    path('', resume_home, name='home'),
    path('upload/', upload_resume, name='upload'),
]
