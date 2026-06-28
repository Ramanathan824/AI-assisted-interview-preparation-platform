from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render

from .models import Resume


@login_required
def resume_home(request):
    resumes = Resume.objects.filter(user=request.user).order_by('-uploaded_at')
    return render(request, 'resume/resume.html', {'resumes': resumes})


@login_required
def upload_resume(request):
    if request.method == 'POST' and request.FILES.get('file'):
        Resume.objects.create(user=request.user, file=request.FILES['file'])
    return redirect('resume:home')
