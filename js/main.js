const responsive = {
    
    0: {
        items: 1
    },

    320:{
        items: 1
    },
    560:{
        items: 2
    },

    960:{
        items: 3
    }
}

$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')

    /**click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })


    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 5000,
        dots: false,
        nav:true,
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next'),],
        responsive: responsive
    })

    // dark mode
    const checkbox = 
    document.getElementById('checkbox');

    checkbox.addEventListener('change', () =>{
        // change background color
        document.body.classList.toggle('light');
    });
    

     // click to scroll top
     $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

});