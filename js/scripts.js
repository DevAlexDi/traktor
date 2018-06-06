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

    
    //языки
    
    $('.lang_block').click(function(e) {
        e.stopPropagation();
        $(this).find('.lang_select').slideToggle();
    });
    $('body').click(function() {
        $('.lang_block .lang_select').slideUp();
    });

    $('body').on('click', '.clicking_item', function(e) {
        e.preventDefault();
        window.location.href = $(this).find('a').attr('href');
    });

    //slider
    
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
    
    
    //инпут файл
    
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling
            , labelVal = label.innerHTML;
        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else fileName = e.target.value.split('\\').pop();
            if (fileName) {
                label.querySelector('span').innerHTML = fileName;
                $(".buttons-wrap-chat label").addClass("was-add");
            }
            else {
                label.innerHTML = labelVal;
                $(".buttons-wrap-chat label").removeClass("was-add");
            }
        });
    });
    
    
    //тел маска
    $('.tel-init').inputmask({
        "mask": "+7 (999) 999-99-99"
            , "placeholder": "_"
            , showMaskOnHover: false
            , showMaskOnFocus: true
        });
    
    
    
});
