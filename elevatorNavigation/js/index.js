$(function() {
    let toolTop = $('.recommend').offset().top;
    let flag = true;
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').css('display', 'block');
        } else {
            $('.fixedtool').css('display', 'none');
        }
        if (flag) {
            $('.floor>div').each(function(i, o) {
                if ( $(document).scrollTop() >= $(o).offset().top) {
                    console.log(i);
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
                }
            }) 
        }
    }
    toggleTool();
    
    $(document).scroll(function() {
        toggleTool();
    });

    $('.fixedtool li').click(function() {
        flag = false;
        $(this).addClass('current').siblings().removeClass();
        let t = $('.floor>div').eq($(this).index()).offset().top;
        $('html, body').stop().animate({
            scrollTop: t,
        }, 'normal', function() { 
            console.log(flag);
            flag = true; 
        });
    });
});