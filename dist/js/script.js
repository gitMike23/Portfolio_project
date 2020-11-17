'use ctrict';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');



hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.products__percent');
const lines = document.querySelectorAll('.products__item-bottom span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

