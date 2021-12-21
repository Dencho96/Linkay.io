const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    navigation: {
        nextEl: '.feedbacks__btn--next',
        prevEl: '.feedbacks__btn--prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});


$(".header__menu-btn").click(function () {
    $(".header__menu-btn").toggleClass("is-active");
});

$('.header__menu-btn').on('click', function () {
    $('.header__nav').slideToggle();
});

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 120
    }, 800);
});