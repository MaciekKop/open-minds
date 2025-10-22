// Smooth scroll jest już w CSS (scroll-behavior: smooth)

// Animacja fade-in przy przewijaniu
const sections = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => observer.observe(section));

// Walidacja formularza
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Dziękujemy za kontakt! Odezwiemy się wkrótce.');
});