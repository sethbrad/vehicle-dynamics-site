const burger = document.getElementById('burger');
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});