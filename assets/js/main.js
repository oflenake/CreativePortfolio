$(document).ready(function () {


    let $btns = $('.projects .button-group button');


    $btns.click(function (e) {

        $('.projects .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.projects .button-group #btn1').trigger('click');

    $('.projects .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.main .testimonials .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header').height() + 50;

    function navbarFixed() {
        if ($('.header').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header .navigation').addClass('navbar_fixed');
                } else {
                    $('.header .navigation').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});