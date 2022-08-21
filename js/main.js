const btnMenu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__nav');

function toggleMobileMenu() {
    btnMenu.classList.toggle('header__btn-menu--open');
    menu.classList.toggle('header__nav--open');
}

btnMenu.addEventListener('click', toggleMobileMenu);

const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("accordion--active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}