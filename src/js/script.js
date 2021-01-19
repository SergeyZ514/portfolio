const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   closeCross = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeCross.addEventListener('click', () => {
   menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__scales-percent'),
   lines = document.querySelectorAll('.skills__scale_fill');

counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});
