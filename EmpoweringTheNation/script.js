// Back-to-Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Course Card Slide-in Observer
const cards = document.querySelectorAll('.course-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target); // Unobserve to trigger animation only once
        }
    });
}, { threshold: 0.5 });
cards.forEach(card => observer.observe(card));

// Navigation Link Hover Effect
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => link.style.transform = 'scale(1.1)');
    link.addEventListener('mouseleave', () => link.style.transform = 'scale(1)');
});

// Home Content Staggered Fade-in Animation
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.home-content-text h1, .home-content-text p');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transition = 'opacity 1s ease-in-out';
        }, index * 500); // Adds a delay between each element
    });
});

// Apply Fade-in on Page Load (Excluding Navigation)
window.addEventListener('load', () => {
    const mainContent = document.querySelectorAll('body > :not(nav)');
    mainContent.forEach(element => element.classList.add('fade-in'));
});

// Login Button Functionality
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById('loginBtn');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    loginButton.addEventListener('click', () => {
        const username = usernameField.value.trim();
        const password = passwordField.value.trim();
        
        if (username === '' || password === '') {
            alert('Please fill in both the Username and Password fields.');
        } else {
            alert(`Welcome, ${username}!`);
            // Additional login logic or redirect can be added here
        }
    });
});




