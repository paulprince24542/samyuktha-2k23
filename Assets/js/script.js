var homeNav = document.getElementById('home-nav');
var aboutNav = document.getElementById('about-nav');
var eventsNav = document.getElementById('events-nav');
var contactNav = document.getElementById('contact-nav');

homeNav.onclick = () => {
    var active = document.getElementsByClassName('active')[0];
    if (active.id != 'home-nav') {
        active.classList.remove('active');
        homeNav.classList.add('active');
        window.scrollTo(0, 0)
    }
}

aboutNav.onclick = () => {
    var active = document.getElementsByClassName('active')[0];
    if (active.id != 'about-nav') {
        active.classList.remove('active');
        aboutNav.classList.add('active');
        window.scrollTo(0, 700)

    }
}

eventsNav.onclick = () => {
    var active = document.getElementsByClassName('active')[0];
    if (active.id != 'events-nav') {
        active.classList.remove('active');
        eventsNav.classList.add('active');
        window.scrollTo(0, 1300)

    }
}

contactNav.onclick = () => {
    var active = document.getElementsByClassName('active')[0];
    if (active.id != 'contact-nav') {
        active.classList.remove('active');
        contactNav.classList.add('active');
    }
}
function openNav() {
    const nav = document.getElementById('nav')
    nav.style.transform = "translateX(35%)";
}

function closeNav() {
    const nav = document.getElementById('nav')
    nav.style.transform = "translateX(150%)";
}
window.onclick = () => {
    const nav = document.getElementById('nav')
    if (nav.style.transform == '35%')
        nav.style.transform = "translateX(150%)";
}
function navBg() {
    const header = document.getElementById('header')
    let scroll = window.scrollY;
    if (scroll > 50)
        header.style.background = "black"
    if (scroll === 0)
        header.style.background = "transparent"
}

function customiseSubmit(sub) {
    console.log('g');
    sub.classList.remove('btn-outline')
    sub.classList.add('btn-light')
}