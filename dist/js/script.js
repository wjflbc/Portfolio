const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});


const subtitle = document.querySelectorAll('.knowledge__skill-subtitle'),
    lines =document.querySelectorAll('.divider-second');

subtitle.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});