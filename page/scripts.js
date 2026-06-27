// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll reveal for sections
const sections = document.querySelectorAll('.section');

// Add animate-in class to sections that are not in viewport initially
sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
        section.classList.add('animate-in');
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    if (section.classList.contains('animate-in')) {
        sectionObserver.observe(section);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});