$ (function() {
      $("[data-slider]").slick({
         infinite:true,
         fade:true,
         slidesToShow: 1,
         slidesToScroll: 1
    });


    $("[data-scroll]").on("click", function(event) {
     event.preventDefault();
     /* Act on the event */

// CКРОЛЛ К СТРАНИЦАМ 
     var blockId = $(this).data('scroll'),
         blockOffset = $(blockId).offset().top;   

         $("html,body").animate ({
            scrollTop: blockOffset
         }, 500)
      /* Act on the event */
     });
    

    // КНОПКА МЕНЮ БУРГЕР + ВЫПАДАЮЩЕЕ МЕНЮ

    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find(".burger-menu__button");
        let links = menu.find(".burger-menu__link");
        let overlay = menu.find(".burger-menu__overlay");

        button.on("click", (e) => {
            e.preventDefault();
            toggleMenu();
        })
        links.on("click", () => toggleMenu());
        overlay.on("click", () => toggleMenu());


        function toggleMenu() {
            menu.toggleClass("burger-menu__active");
            if (menu.hasClass("burger-menu__active")) {
                $("body").css("overflow","hidden");
            } else {
                $("body").css("overflow","visible");
            }
        }
    }
    burgerMenu(".burger-menu");
   
});      

  
            
   










