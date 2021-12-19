const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.feedbacks__btn--next',
        prevEl: '.feedbacks__btn--prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});