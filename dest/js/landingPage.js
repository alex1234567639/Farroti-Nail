$(document).ready(function() {
    $(".scrollDownBtn").click(function() {
        $("html, body").animate({
          scrollTop: $(".landingPage2nd").offset().top
        }, {
          duration: 800,
          easing: "swing"
        });
    });
    $("#gallery").click(function() {
      $("html, body").animate({
        scrollTop: $(".contentBtn2nd").offset().top
      }, {
        duration: 800,
        easing: "swing"
      });
    });
});