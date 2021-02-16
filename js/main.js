
$(document).ready(function () {

    $('.header__elements').on('click', function () {
        let indx = $(".header__elements").index(this);
        let mass_icon = document.querySelectorAll('.header__elements');
        let mass_text = document.querySelectorAll('.header__elements-name');
        for (let i = 0; i < mass_icon.length; i++) {
            if (indx == i) {
                mass_icon[i].classList.toggle('line')
                mass_text[i].classList.toggle('header__elements-name-on')
            }
            else {
                mass_icon[i].classList.remove('line')
                mass_text[i].classList.remove('header__elements-name-on')
            }
        }
    })

    $('.slider__inner').each(function (index) {
        $('.slider', $(this)).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.slider__prev-arrow', $(this)),
            nextArrow: $('.slider__next-arrow', $(this)),
        })
    });


    $('.new-slider__inner').each(function (index) {
        $('.new-slider', $(this)).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true,
            centerPadding: '60px',
            prevArrow: $('.new-slider__prev-arrow', $(this)),
            nextArrow: $('.new-slider__next-arrow', $(this)),
        })
    });

    $('.top-slider__inner').each(function (index) {
        $('.top-slider', $(this)).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true,
            centerPadding: '60px',
            prevArrow: $('.top-slider__prev-arrow', $(this)),
            nextArrow: $('.top-slider__next-arrow', $(this)),
        })
    });





});