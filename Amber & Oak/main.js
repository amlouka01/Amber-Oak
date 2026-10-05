let navbar = document.getElementById('navbar');
let linksNav = document.querySelectorAll('.a-nav');
let newStep = window.scrollY;

window.addEventListener('scroll', () => {
    if (newStep <= window.scrollY) {
        navbar.classList.add('eff');
    } else {
        navbar.classList.remove('eff');
    }
    newStep = window.scrollY;
});

window.addEventListener('scroll', () => {
    let totalScroll = window.innerHeight * 0.95;
    if (window.scrollY > totalScroll) {
        navbar.classList.add('nav-eff');
        linksNav.forEach((el) => {
            el.classList.add('nav-color');
        });
    } else {
        navbar.classList.remove('nav-eff');
        linksNav.forEach((el) => {
            el.classList.remove('nav-color');
        })
    }
})

/* mouseover listeners attached once (outside scroll handler to avoid duplicates) */
linksNav.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.classList.add('hover-one');
    });
});

/* ///////////////////////////////////  mobile menu toggle  /////////////////////////////////// */

let menuToggle = document.getElementById('menuToggle');
let navLinks = document.getElementById('navLinks');

menuToggle.onclick = function () {
    navLinks.classList.toggle('open');
};

navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

/* ///////////////////////////////////  gallery  /////////////////////////////////// */

let img = document.getElementById('img');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let indexImg = 0;

let image = [
    "/image-gallery/1.jpg",
    "/image-gallery/2.jpg",
    "/image-gallery/3.jpg",
    "/image-gallery/4.jpg",
    "/image-gallery/5.jpg",
    "/image-gallery/6.jpg",
    "/image-gallery/7.jpg",
    "/image-gallery/8.jpg",
]

next.onclick = function () {
    if (indexImg < image.length - 1) indexImg++;
    else indexImg = 0;
    showImg();
}
prev.onclick = function () {
    if (indexImg > 0) indexImg--;
    else indexImg = image.length - 1;
    showImg();
}

function showImg() {
    img.innerHTML = `<img src="${image[indexImg]}" alt="Gallery photo ${indexImg + 1} of ${image.length}" loading="lazy">`;
}
showImg();