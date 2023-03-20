//scroll nav

var body = document.body;
var header = document.getElementById('header');
var nav = document.querySelector('nav');
let lastScroll = 0
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
        header.style.background = 'transparent';
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }
    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
        if (window.innerWidth > 700) {
            header.style.background = '#141414 ';
            header.style.borderRadius = '6em';
            header.style.top = '1em';
            header.style.marginTop='unset'
            nav.style.margin='2.5em'
        } else {
            header.style.backdropFilter = "blur(5px)";
            header.style.padding = "1em";
        }
    }
    lastScroll = currentScroll
})
