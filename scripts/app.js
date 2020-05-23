// Define the break points
const responsive = {
    0: {
        items: 1
    },
    600: {
        items: 2
    },
    750: {
        items: 2
    }
}

$(document).ready(function(){
    //AOS instance
    AOS.init();
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
        responsive: responsive
    });
    // Clock to scroll up
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop:0
        },500);
    });
    $('.post-content').attr({
        "data-aos":"fade-up",
        "data-aos-delay": "200"
    });
});
