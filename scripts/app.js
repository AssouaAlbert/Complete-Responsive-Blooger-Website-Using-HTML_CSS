$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse =$('.toggle-collapse');

    // Click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });
    //owl.carousel class
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        // nav: [$('.slider-navigation-left'), $('.slider-navigation-right')]
    });
});
