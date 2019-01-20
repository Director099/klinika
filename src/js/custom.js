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
      1200:{
          items:4
      }
  }
})


$(".toggle").on("click", function() {
  $(".toggle").toggleClass("toggle--active");

  if(!$(".toggle").hasClass("toggle--active")) {
    $(".navigation").fadeOut();
  } else {
    $(".navigation").fadeIn();
  }
})


$(".modal__btn").on("click", function() {
  var parent = $(this).parents(".modal-dialog");
  parent.find(".modal-content").eq(0).addClass("modal-content--hidden");
  parent.find(".modal-content").eq(1).removeClass("modal-content--hidden");
})

$(document).on('hidden.bs.modal', '.modal', function (e) {
  $(".modal-content").eq(0).removeClass("modal-content--hidden");
  $(".modal-content").eq(1).addClass("modal-content--hidden");
})
