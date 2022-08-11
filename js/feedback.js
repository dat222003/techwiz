$(document).ready(function () {
    $(".feedback__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type='button' class='slick-prev pull-left text-white'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right text-white'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        cssEase: 'ease-in-out',
        speed: 500,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                    speed: 300,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                    speed: 300,
                    infinite: false,
                }
            },
        ]
    });
});