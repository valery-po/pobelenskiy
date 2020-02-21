$(document).ready(function () {


//Nav-menu
    document.querySelector(".menu-icon-wrapper").onclick = function () {
    
        document.querySelector(".menu-icon").classList.toggle("menu-icon-active");

    };

//OwlCarousel


    $(".owl-carousel").owlCarousel({
        items: 1
    });

//Scroll-to-top
    
    const scrollBtn = $(".scroll-to-top-btn");
    
   // scrollBtn.hide();
    
   
    // По скроллу скрываем или показываем кнопку 
    $(window).scroll(function(){
        
    if ( $(this).scrollTop() > 500 ) {
        scrollBtn.fadeIn();
    } else {
        scrollBtn.fadeOut();
    }
    
    })
    
     // Клик по кнопке
    
    scrollBtn.click(function(){
        $("html, body").animate({
            scrollTop: 0
         }, 360);
       return false;
    
    })

       //MixItUp
     var mixer = mixitup('.products__row');


});