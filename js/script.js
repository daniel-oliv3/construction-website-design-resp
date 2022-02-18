let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};

document.querySelector('#login-form').onclick = () => {
    loginForm.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}