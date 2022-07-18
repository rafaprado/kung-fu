const menuBtn = document.querySelector('.burguer-menu');
const mobileNav = document.querySelector('.mobile-nav');
const menuItems = document.querySelectorAll('.mobile-nav__list li a');


menuBtn.addEventListener('click', onClickMenuBtn);
menuItems.forEach(item => item.addEventListener('click', event => onClickMenuItem(event)))

function onClickMenuBtn() {
    mobileNav.classList.toggle('hidden');
    document.querySelector('html').classList.toggle('no-scroll');
}

function onClickMenuItem(event) {
    event.preventDefault();
    const anchor = document.querySelector(event.target.getAttribute('href'));

    onClickMenuBtn();
    anchor.scrollIntoView({behavior:'smooth'});
}