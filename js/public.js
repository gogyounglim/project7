



// top버튼
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#btnTop').fadeIn();
        } else {
            $('#btnTop').fadeOut();
        }
    });
    
    $("#btnTop").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});