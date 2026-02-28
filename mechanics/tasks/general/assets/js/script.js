$("body").scroll(function () { 
    
});

$(".menu-btn").click(function (e) { 
    e.preventDefault();

    if($(this).hasClass("active")) {
        $(".nav .menu-links").css("margin-top", "-500px");
        $(".nav .menu-links").css("filter", "blur(50px)");
        $(".nav .menu-links").css("opacity", "0");
        $(".nav .menu-links").css("transform", "scale(0.5)");
        $(".main").css("filter", "blur(0px)")
    } else {
        $(".nav .menu-links").css("margin-top", "500px")
        $(".nav .menu-links").css("filter", "blur(0px)");
        $(".nav .menu-links").css("transform", "scale(1)");
        $(".nav .menu-links").css("opacity", "1");
        $(".main").css("filter", "blur(10px)")
    }

    $(this).toggleClass("active");

});

const setMenuStatus = (status) => {

    if($(window).width() < 768) {
        
        if(status) {
            $(".nav .menu-links").css("margin-top", "-500px");
            $(".nav .menu-links").css("filter", "blur(50px)");
            $(".nav .menu-links").css("opacity", "0");
            $(".nav .menu-links").css("transform", "scale(0.5)");
            $(".main").css("filter", "blur(0px)")
        } else {
            $(".nav .menu-links").css("margin-top", "500px")
            $(".nav .menu-links").css("filter", "blur(0px)");
            $(".nav .menu-links").css("transform", "scale(1)");
            $(".nav .menu-links").css("opacity", "1");
            $(".main").css("filter", "blur(10px)")
        }

        $(".menu-btn").toggleClass("active");

    }

}

$(window).resize(function () { 
    if(!$('.menu-btn').hasClass("active")) {
        if($(window).width() > 768) {
            $(".nav .menu-links").css("margin-top", "0px");
            $(".nav .menu-links").css("filter", "blur(0px)");
            $(".nav .menu-links").css("transform", "scale(1)");
            $(".main").css("filter", "blur(0px)")
            // $(".menu-btn").removeClass("active")
        } else {
            $(".nav .menu-links").css("margin-top", "-500px");
        }
    }
});

$(".menu-links a").click(function (e) { 
    e.preventDefault();

    $('html, body').animate({
        scrollTop: ($($(this).attr("href")).offset().top-50)
     }, 1000);

    setMenuStatus(1);
});

$(".section").click(function (e) { 
    e.preventDefault();
    var dataURL = $(this).attr("data-url");

    location.href = dataURL;
});

$(document).scroll(function () { 
    if(window.scrollY == 0) {
        $(".nav").removeClass("scrolled")
    } else {
        $(".nav").addClass("scrolled")
    }
});