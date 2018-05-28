$(document).ready(function () {
    
    $('.green_cat').mouseover(function() {
        if (!$(this).hasClass('active')) {
            $('.green_cat.active').removeClass('active');
            $(this).addClass('active');
        }
    });
    $('.green_cat').mouseleave(function() {
        if ($(this).index != 1) {
            $(this).removeClass('active');
            $('.green_cat').eq(1).addClass('active');
        }
    });

});
