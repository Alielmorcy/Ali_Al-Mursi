const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking
        navbar.classList.remove('active');
    });
});

// Download CV
const downloadBtn = document.querySelector('.download-btn');
const downloadLink = document.getElementById('cv-download-link');

downloadBtn.addEventListener('click', () => {
    downloadLink.click();
});

// Back to Top button - Scroll to #home section
const backToTopBtn = document.querySelector('.back-to-top');
backToTopBtn.addEventListener('click', () => {
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
    backToTopBtn.style.transform = 'scale(1.2) rotate(360deg)';
});