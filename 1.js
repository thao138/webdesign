window.addEventListener('scroll', function() {
    document.body.classList.toggle('scrolled', window.scrollY > 0);
});

// Optional: Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
