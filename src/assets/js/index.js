import Swiper from 'swiper';

import { Pagination } from 'swiper/modules';

var $win = $(window);
var $body       = $('body')

opning();
function tick(time) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve()
            console.log('YES');
        }, time)
    })
}
async function opning() {
    $body.addClass('noscroll');
    await tick(5000);
    $('.mv_wrap').fadeOut(1000);
    $body.removeClass('noscroll');
    await tick(300);
    $('.contents').addClass('show');
}

$('.skip').on('click', function () {
    $('.mv_wrap').fadeOut(1000);
    $body.removeClass('noscroll');
    $('.contents').addClass('clickshow');
});




const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    loop: true,
  // ページネーション
  pagination: {
    el: '.swiper-pagination',
  },
  });


  $('.nav_index').on('click', function () {
    $(this).addClass('show');
    $('.nav_feed').addClass('hidden'); 
    $('.overlay').addClass('show'); 
    $body.addClass('noscroll');
});
$('.nav_feed').on('click', function () {
    $(this).removeClass('hidden');
    $('.nav_index').removeClass('show'); 
    $('.overlay').removeClass('show'); 
    $body.removeClass('noscroll');
});

// アンカーリンク
$(window).on('load', function () {
    $('.anchor_link a[href*="#"]').on('click', function () {
      var elmHash = $(this).attr('href');
      var pos = $(elmHash).offset().top;
      $('html, body').animate({ scrollTop: pos }, 1);
      $('.nav_feed').removeClass('hidden'); 
      $('.nav_index').removeClass('show'); 
        $('.overlay').removeClass('show'); 
        $body.removeClass('noscroll');
      return false;
    });
  });