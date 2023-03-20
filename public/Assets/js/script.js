var home = document.getElementById('home');
var about = document.getElementById('about');
var events = document.getElementById('events');
var contact = document.getElementById('contact');

home.onclick = () => {
    var active = document.getElementsByClassName('active')[0];
    // console.log(active);
    if (active.id != 'home') {
        // console.log("flj");
        active.classList.remove('active');
        home.classList.add('active');
    }
}

about.onclick = () => {
    var active = document.getElementsByClassName('active')[0];
    if (active.id != 'about') {
        active.classList.remove('active');
        about.classList.add('active');
    }
}

events.onclick = () => {
    var active = document.getElementsByClassName('active')[0];
    if (active.id != 'events') {
        active.classList.remove('active');
        events.classList.add('active');
    }
}

contact.onclick = () => {
    var active = document.getElementsByClassName('active')[0];
    if (active.id != 'contact') {
        active.classList.remove('active');
        contact.classList.add('active');
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

function navBg() {
    const header = document.getElementById('header')
    let scroll = window.scrollY;
    if (scroll > 50)
        header.style.background = "black"
    if (scroll === 0)
        header.style.background = "transparent"
}

function  customiseSubmit(sub){
    //console.log('g');
    sub.classList.remove('btn-outline')
    sub.classList.add('btn-light')
}
