$(document).ready(function() {
    $(".scrollDownBtn").click(function() {
        $("html, body").animate({
          scrollTop: $(".landingPage2nd").offset().top
        }, {
          duration: 800,
          easing: "swing"
        });
        return false;
    });

});