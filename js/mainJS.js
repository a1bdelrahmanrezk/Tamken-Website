function initParadoxWay() {
    "use strict";
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    setInterval(function () {
        // var size = randomValue(sArray);
        // $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        // $('.individual-bubble').animate({
        //     'bottom': '100%',
        //     'opacity': '-=0.7'
        // }, 4000, function () {
        //     $(this).remove()
        // });
    }, 350);
    
}
$(document).ready(function () {
    initParadoxWay();
});



