$(function () {


  $(".slider__inner").slick({
    arrows: true,
    asNavFor: ".slider__nav",
    prevArrow: '<button class="slick-prev"><img src="images/previous.png" alt=""></button>',
    nextArrow: '<button class="slick-next"><img src="images/next.png" alt=""></button>'
  });
  $(".slider__nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider__inner",
    focusOnSelect: true,
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });
});

// с нижним слайдером есть проблема: при сужении экрана 
// в момент текущего слайда - все остальные до него пропадают и не возвращаются, а следующие сдвигаются влево
// конечно, там помимо этого ещё много косяков, но этот бросается в глаза