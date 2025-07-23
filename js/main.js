'use strict';

{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item').on('click', function(){
            $('.nav').removeClass('active');
        });

        // slick
        $('.farmers__list').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: $('.tern.prev'),
            nextArrow: $('.tern.next'),

            responsive: [
              
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
          
          $('.FAQ__list').slick({
            infinite: false,
            vertical: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: $('.tern.left'),
            nextArrow: $('.tern.right'),

            responsive: [
              
              {
                breakpoint: 769,
                settings: {
                  vertical: false,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
         

    });

   


   

}