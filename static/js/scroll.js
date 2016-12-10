$(function() {
    $("#start_button").click(function(){
        $("html, body").delay(150).animate({scrollTop: $("#card_start").position().top + 500}, 500);
    });
});