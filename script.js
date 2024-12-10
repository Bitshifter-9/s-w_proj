
const navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    const videoHeight = document.querySelector('.video-section').offsetHeight;

    if (window.scrollY > videoHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
