$(document).ready(function(){
    // slider
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
      });
    //   portfolio
    $('.button[filter]').click(function(){
        if($(this).attr('filter')=='all'){
            if($(this).attr('val')=='off'){
                $('.button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.button[filter]').removeClass('focused');
                $(this).addClass('focused');
                $('.portfolio__filter>div').show(300);
            }
        }else
        if($(this).attr('val')=='off'){
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.portfolio__filter > div').hide(300);
            var filter = $(this).attr('filter');
            $('.portfolio__filter > div[filter='+filter+']').show(300);
        }
    });
    // menu
    $('ul.menu a[href^="#"').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('ul.menu a[href^="#"').css({'color':'#212121'});
        $(this).css({'color':'#004bec'});
        return false;
    });
    $('.burger-menu').click(function(){
        $('nav').slideToggle(500);
        $('.menu').css({
            'display': 'flex',
            'flex-direction':'column'
        });
        $('.menu__item').css({
            'margin-left':'0px'
        });
    });
    // button up
    $(window).scroll(function(){
        if ($(this).scrollTop() != 0){
            $('.toTop').fadeIn();
        }      
        else{
            $('.toTop').fadeOut();
        }
    });
    $('.toTop').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    });
});