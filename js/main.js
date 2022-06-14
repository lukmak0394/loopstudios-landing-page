
const navBtn = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navbar');
const mainNav = document.querySelector('.main-nav');

const toggleClasses = () => {

    navBar.classList.toggle('navbar-opened');
    mainNav.classList.toggle('navbar-bg-black');
    navBtn.children[0].classList.toggle('fa-times')

};

navBtn.addEventListener('click',toggleClasses);
