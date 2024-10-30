const themeToggleButton = document.getElementById('theme-toggle');
let currentTheme = 'light'; // Tema inicial

themeToggleButton.addEventListener('click', () => {
    if (currentTheme === 'light') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        themeToggleButton.textContent = 'Modo Roxo';
        currentTheme = 'dark';
    } else if (currentTheme === 'dark') {
        document.body.classList.remove('dark');
        document.body.classList.add('purple');
        themeToggleButton.textContent = 'Modo Claro';
        currentTheme = 'purple';
    } else {
        document.body.classList.remove('purple');
        document.body.classList.add('light');
        themeToggleButton.textContent = 'Modo Escuro';
        currentTheme = 'light';
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');
    const testimonials = document.querySelectorAll('.testimonial');
    const blogPosts = document.querySelectorAll('.blog-post');
    const services = document.querySelectorAll('.service');
    const galleryItems = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    projects.forEach(project => observer.observe(project));
    testimonials.forEach(testimonial => observer.observe(testimonial));
    blogPosts.forEach(blogPost => observer.observe(blogPost));
    services.forEach(service => observer.observe(service));
    galleryItems.forEach(galleryItem => observer.observe(galleryItem));
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    alert('Mensagem enviada com sucesso!');
    form.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value.trim();

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    alert('Inscrição realizada com sucesso!');
    document.getElementById('newsletter-form').reset();
});