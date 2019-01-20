'use strict';

// $(function () {
//     $.scrollUp({
//         scrollText: '',
//     });
// });

$('input[type=tel]').mask("+7 (000) 000 00 00");

// Плавный скол с навигации

 $(".navigation__link").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
});

// Плавный скол с навигации

$(".licenses__slider").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1000:{
          items:4
      }
  }
})
