//header menu

const btnMenu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__nav');

function toggleMobileMenu() {
    btnMenu.classList.toggle('header__btn-menu--open');
    menu.classList.toggle('header__nav--open');
}

btnMenu.addEventListener('click', toggleMobileMenu);

//swiper

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

//accordion

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

//to top button

var toTopButton = document.getElementById("toTopBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}