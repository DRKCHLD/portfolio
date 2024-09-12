const hamburger = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const social = document.getElementById('social');
const contact = document.getElementById('contact');


contact.addEventListener ('click', () => {
    social.classList.toggle ('show');
})