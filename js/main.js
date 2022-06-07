
const navBtn = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');
const mainNav = document.querySelector('.main-nav');

const toggleClasses = () => {
    if (navBar.classList.contains('navbar-opened')) {
        navBar.classList.remove('navbar-opened');
        navBar.classList.add('navbar-closed');
        // Class of icon 
        navBtn.children[0].classList.remove('fa-times');
        navBtn.children[0].classList.add('fa-bars');
        mainNav.classList.remove('navbar-bg-black');
    } else {
        navBar.classList.add('navbar-opened');
        navBar.classList.remove('navbar-closed');
        navBtn.children[0].classList.add('fa-times');
        navBtn.children[0].classList.remove('fa-bars');
        mainNav.classList.add('navbar-bg-black');
    }
};

navBtn.addEventListener('click',toggleClasses);

const navOpacityChange = () => {
    if (window.scrollY >= 300) {
        mainNav.classList.add('nav-opaque-black');  
    } else {
        mainNav.classList.remove('nav-opaque-black');
    }
}

window.addEventListener('scroll',navOpacityChange);