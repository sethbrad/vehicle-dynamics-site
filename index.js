const burger = document.getElementById('burger');
console.log(burger);
const menu = document.getElementById('menu')
console.log(menu);

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});