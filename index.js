var mob_menu = document.querySelector('.mobile');

function changeMenu() {
    mob_menu.classList.toggle('changemenu');
    document.querySelector('nav').classList.toggle('changemenu');
    document.querySelector('.menu').classList.toggle('changemenu');
    document.querySelector('main').classList.toggle('changemenu');
}
mob_menu.addEventListener('click', changeMenu);

document.querySelectorAll('.menu').forEach(function(item){
    item.addEventListener('click', changeMenu);
});