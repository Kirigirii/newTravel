let button = $('.btn');
let overlay = $('.overlay');
let close = $('.popup__close')

button.on('click', function () {
    overlay.fadeIn('slow');
});

close.on('click', function () {
    overlay.fadeOut('slow')
});

$(document).ready(function () {
 $('.accordion-item-title').click(function () {
  const parent = $(this).parent();
  if (parent.hasClass('accordion-item--active')){
      parent.removeClass('accordion-item--active')
  } else {
     $('.accordion-item').removeClass('accordion-item--active')
     parent.addClass('accordion-item--active')
  }
 });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
        },
    });

});


