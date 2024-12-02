(function($){
    $(function(){

        /* Scroll to sections*/ 
        $(".jq--scroll-nh").click(function(){
            $("html, body").animate({scrollTop: $(".jq--nh").offset().top}, 1000);
        });

        $(".jq--scroll-onh").click(function(){
            $("html, body").animate({scrollTop: $(".jq--onh").offset().top}, 1500);
        });

        $(".jq--scroll-ref").click(function(){
            $("html, body").animate({scrollTop: $(".jq--ref").offset().top}, 1500);
        });

        $(".jq--scroll-foto").click(function(){
            $("html, body").animate({scrollTop: $(".jq--foto").offset().top}, 1500);
        });

        $(".jq--scroll-kontakt").click(function(){
            $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top}, 1500);
        });

        /* Scroll butoons to sections*/ 
        $(".jq--scroll-button-full").click(function(){
            $("html, body").animate({scrollTop: $(".jq--nh").offset().top}, 1000);
        });

        $(".jq--scroll-button-empty").click(function(){
            $("html, body").animate({scrollTop: $(".jq--ref").offset().top}, 1500);
        });

        /* Mobile navgation */
        $(".jq--nav-icon").click(function(){

            $(".nav-background").slideToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();

        });

        /* Change hamburger to cross vice versa */
        $(".jq--image-hamburger").click(function(){
            if($(".jq--image-hamburger").attr("src")== "images/ham-button.png")
            {
                $($(".jq--image-hamburger").attr("src", "images/menu-cross.png"));
            } 
            else {
                $($(".jq--image-hamburger").attr("src", "images/ham-button.png"));
            }
        });


    });
})(jQuery);
