// Select the navbar
const navbar = document.querySelector('.navbar');

// Add a scroll event listener
window.addEventListener('scroll', () => {
    const videoHeight = document.querySelector('.video-section').offsetHeight;

    if (window.scrollY > videoHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
