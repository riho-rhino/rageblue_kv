import Swiper from 'swiper';

import { Pagination  } from 'swiper/modules';

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
    await tick(10000);
    $('.mv_wrap').fadeOut(1000);
    await tick(300);
    $body.removeClass('noscroll');
    $('.contents').addClass('show');
}

$('.skip').on('click', function () {
    $body.removeClass('noscroll');
    $('.mv_wrap').fadeOut(1000);
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


  $('.nav').on('click', function () {
    $(this).addClass('hidden');
    $('.close_wrap').addClass('show'); 
    $('.overlay').addClass('show'); 
    $('.numbers').addClass('hidden'); 
    
    $body.addClass('noscroll');
});

$('.close_wrap').on('click', function () {
    $(this).removeClass('show');
    $('.nav').removeClass('hidden'); 
    $('.overlay').removeClass('show'); 
    $('.numbers').removeClass('hidden'); 
    
    $body.removeClass('noscroll');
});

$(window).on('scroll', function () {
    styleOn();
    pcstyleOn();
});


$(document).ready(function () {
    setInterval(function () {
        styleOn();
        pcstyleOn();
    }, 100); // 100ミリ秒ごとにチェック
});

function styleOn() {
    $('.sp-style').each(function () {
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


function pcstyleOn() {
    $('.pc-style').each(function () {
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
            $('.sp-main').css('scroll-snap-type', 'none');
            var pos = target.position().top + $('.sp-main').scrollTop();
            $('.sp-main').scrollTop(pos);

            $('.sp-main').css('scroll-snap-type', 'y mandatory');

            
            $('.nav').removeClass('hidden'); 
            $('.close_wrap').removeClass('show'); 
            $('.overlay').removeClass('show'); 
            $body.removeClass('noscroll');
            $('.numbers').removeClass('hidden'); 
            
        }

        return false; 
    });
});




$(document).ready(function() {
    $('.pcanchor_link a').on('click', function(event) {
        // デフォルトの動作をキャンセル
        event.preventDefault();
        // href属性からIDを取得
        var targetId = $(this).attr('href');
        // 一瞬でスクロール先の要素に移動
        if ($(targetId).length) {
            window.location.hash = targetId; // IDに飛ぶ
        }
            $('.nav').removeClass('hidden'); 
            $('.close_wrap').removeClass('show'); 
            $('.overlay').removeClass('show'); 
            $body.removeClass('noscroll');
    });
});





    $('.right_img').on('click', function () {
        var clickedImage = $(this);
        var parentContainer = clickedImage.closest('.pc-style_right'); // .right_imgの親要素を取得
        
        // 親要素内の.pc-style_centerと.pc-style_leftを取得
        var correspondingStyleCenter = parentContainer.siblings('.pc-style_center');
        var correspondingStyleLeft = parentContainer.siblings('.pc-style_left');
        
        // .changeクラスをトグル
        correspondingStyleCenter.toggleClass('change');
        correspondingStyleLeft.toggleClass('change');
        clickedImage.toggleClass('change');
    });




// $(window).on('load', function () {
//     $('.pcanchor_link a[href*="#"]').on('click', function (e) {
//         console.log('リンクがクリックされました'); // 追加
//         e.preventDefault(); // デフォルトのアンカーリンクの動作を防ぐ
//         var pcElmHash = $(this).attr('href');
//         var pcTarget = $(pcElmHash);

//         if (pcTarget.length) {
//             console.log('ターゲットが見つかりました:', pcTarget); 
//             var pcPos = pcTarget.position().top + $('.pc-main').scrollTop();
//             console.log(pcPos);
//             $('.pc-main').scrollTop(pcPos);


//             console.log('スクロールが実行されました');
            
//             $('.nav_feed').removeClass('hidden'); 
//             $('.nav_index').removeClass('show'); 
//             $('.overlay').removeClass('show'); 
//             $body.removeClass('noscroll');
//         }

//         return false; 
//     });
// });