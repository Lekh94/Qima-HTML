$('.navbar-light .navbar-nav .nav-link').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
    if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-90
        }, 1000);
        return false;
    }
});

$('.navbar .navbar-nav .nav-link').click(function(){
    $('.navbar-collapse').removeClass('show');
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navbar").addClass("shrink");
    }else{
        $(".navbar").removeClass("shrink"); 
    }
}); 