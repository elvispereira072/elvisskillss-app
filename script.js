const themeToggleButton = document.getElementById('theme-toggle');
let currentTheme = 'light'; // Tema inicial

themeToggleButton.addEventListener('click', () => {
    if (currentTheme === 'light') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        themeToggleButton.textContent = 'Purple Mode';
        currentTheme = 'dark';
    } else if (currentTheme === 'dark') {
        document.body.classList.remove('dark');
        document.body.classList.add('purple');
        themeToggleButton.textContent = 'White Mode';
        currentTheme = 'purple';
    } else {
        document.body.classList.remove('purple');
        document.body.classList.add('light');
        themeToggleButton.textContent = 'Dark Mode';
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

