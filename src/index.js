import './style.css';
console.log("hi from index.js");


// Logic for mobile navbar
const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('.navbar-menu');
const close = document.querySelector('.navbar-close')

burger.addEventListener('click', () => {
  menu.classList.remove('hidden')
})

close.addEventListener('click', () => {
  menu.classList.add('hidden')
})
