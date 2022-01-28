let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
}