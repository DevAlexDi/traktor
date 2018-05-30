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

    $('.lang_block').click(function(e) {
        e.stopPropagation();
        $(this).find('.lang_select').slideToggle();
    });
    $('body').click(function() {
        $('.lang_block .lang_select').slideUp();
    });

    
    
     $('.for-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.nav-slider'
    });
    $('.nav-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.for-slider',
      focusOnSelect: true,
        vertical:true
    });
    
    
    
    
    
    
});
