$('.owl-carousel').owlCarousel({
    stagePadding: 10,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

document.querySelector('.owl-prev').innerHTML = "<i class='fa-solid fa-chevron-left'></i>"
document.querySelector('.owl-next').innerHTML = "<i class='fa-solid fa-chevron-right'></i>"
