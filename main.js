const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelector('.site-navbar a');

allEventListener();

function allEventListener() {
    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach( element => element.addEventListener('click', navLinkClick));
}

function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}
function navLinkClick() {
    if(navMenu.classList.contain('open')) {
        navToggler.click();
    }
}