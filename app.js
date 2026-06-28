document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        });
    }

    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach((item) => revealObserver.observe(item));

    const heroPanel = document.querySelector('.hero-panel');
    if (heroPanel) {
        heroPanel.addEventListener('mousemove', (event) => {
            const rect = heroPanel.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            heroPanel.style.transform = `perspective(1000px) rotateY(${(x / rect.width - 0.5) * 6}deg) rotateX(${(0.5 - y / rect.height) * 6}deg)`;
        });

        heroPanel.addEventListener('mouseleave', () => {
            heroPanel.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        });
    }
});
