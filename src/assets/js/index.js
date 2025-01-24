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
    await tick(300);
    $('.contents').addClass('show');
}

$('.skip').on('click', function () {
    $('.mv_wrap').fadeOut(1000);
    $('.contents').addClass('clickshow');
});

$(window).on('scroll', function() {
      $('.mv_wrap').fadeOut(1000, function() {
      $('.contents').addClass('clickshow');
  });
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

$(window).on('scroll', function () {
    styleOn();
});


function styleOn() {
    $('.item').each(function () {
        var element = $(this);
        var elementTop = element.offset().top;
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        // 要素の上部がウィンドウの60%位置に来たときにクラスを追加
        if (windowTop + windowHeight * 0.6 > elementTop) {
            element.addClass('on');
            element.addClass('active');
        } else {
            element.removeClass('on');
        }
    });
}


$(window).on('load', function () {
    $('.anchor_link a[href*="#"]').on('click', function (e) {
        e.preventDefault(); // デフォルトのアンカーリンクの動作を防ぐ
        var elmHash = $(this).attr('href');
        var target = $(elmHash);
        
        if (target.length) {
            // スクロールスナップを一時的に無効にする
            $('.sp-main').css('scroll-snap-type', 'none');

            // スクロール位置を計算
            var pos = target.position().top + $('.sp-main').scrollTop();

            // 一瞬でスクロールする
            $('.sp-main').scrollTop(pos);

            // スクロールが完了した後にスクロールスナップを再度有効にする
            $('.sp-main').css('scroll-snap-type', 'y mandatory');

            // その他の処理
            $('.nav_feed').removeClass('hidden'); 
            $('.nav_index').removeClass('show'); 
            $('.overlay').removeClass('show'); 
            $body.removeClass('noscroll');
        }

        return false; // イベントのデフォルト動作を防ぐ
    });
});
