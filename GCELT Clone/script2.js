
var currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const init = (n) => {
    slides.forEach((slide) => {
        slide.style.display = "none";
        dots.forEach((dot) => {
            dot.classList.remove("active");
        })
    })
    slides[n].style.display = "block";
    dots[n].classList.add("active");
}

document.addEventListener("DOMContentLoaded", init(currentSlide));


// The Next and Previous functionality
const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
    init(currentSlide);
}

const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
    init(currentSlide);
}

document.querySelector(".next").addEventListener('click', next);
document.querySelector(".prev").addEventListener('click', prev);


// Slide Show functionality
setInterval(() => {
    next()
}, 50000);


// Dots for Navigation
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        init(index);
        currentSlide = i;
    })
})


// for Sticky Navbar

// var navbar = document.getElementsByClassName("navbar_items");
// var sticky = navbar.offsetTop;

// function stickyNavbar() {
//     if (window.pageYOffset > sticky) {
//         navbar.classList.add("sticky");
//     }
//     else {
//         navbar.classList.remove("sticky");
//     }
// }

// window.onscroll = function() {stickyNavbar()};

// .for Sticky Navbar




// Toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    if (menu.classList.contains("activeInNav")) {
        menu.classList.remove("activeInNav");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("activeInNav");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener('click', toggleMenu, false);

// Submenu
const items = document.querySelectorAll(('.item'));

function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    }
    else if (menu.querySelector(".submenu-active")){
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    }
    else {
        this.classList.add("submenu-active");
    }
}

for (let item of items) {
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', toggleItem, false);
        item.addEventListener('keypress', toggleItem, false);
    }
}

// Close submenu form anywhere in the page
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove('submenu-active');
    }
}

document.addEventListener('click', closeSubmenu, false);