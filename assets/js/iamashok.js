// bxslider clients
$(document).ready(function() {
    $('.bxslider').bxSlider();
    $('.my-paroller').paroller();
    $('nav li a[href^="http://www.iamrakesh.com#"]').on('click', function(e) {

        $('nav li a.active').removeClass('active colors theme-color');
        var $this = $(this);
        $this.addClass('active colors theme-color');

        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });

});

// header fix on scroll
lastScroll = 0;
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
        $("nav").addClass("fixed-header");
    } else {
        $("nav").removeClass("fixed-header");
    }
    lastScroll = scroll;
});

 $(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });


//Wow Animation with animate css 
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();



// // smooth scroll

// // Custom scrolling speed with jQuery
// // Source: github.com/ByNathan/jQuery.scrollSpeed
// // Version: 1.0

// (function($) {
    
//     jQuery.scrollSpeed = function(step, speed) {
        
//         var $document = $(document),
        
//             $window = $(window),
            
//             $body = $('html, body'),
            
//             viewport = $window.height(),
            
//             top = 0,
            
//             scroll = false;
            
//         if (window.navigator.msPointerEnabled)
        
//             return false;
            
//         $window.on('mousewheel DOMMouseScroll', function(e) {
        
//             scroll = true;
            
//             if (e.originalEvent.wheelDeltaY < 0 || e.originalEvent.detail > 0)
            
//                 top = (top + viewport) >= $document.height() ? top : top += step;
                
//             if (e.originalEvent.wheelDeltaY > 0 || e.originalEvent.detail < 0)
            
//                 top = top <= 0 ? 0 : top -= step;
                
//             $body.stop().animate({
            
//                 scrollTop: top
                
//             }, speed, 'default', function() {
            
//                 scroll = false;
                
//             });
            
//             return false;
            
//         }).on('scroll', function() {
        
//             if (!scroll) top = $window.scrollTop();
            
//         }).on('resize', function() {
            
//             viewport = $window.height();
            
//         });       
//     };
    
//     jQuery.easing.default = function (x,t,b,c,d) {
    
//         return -c * ((t=t/d-1)*t*t*t - 1) + b;
//     };
    
// })(jQuery);

// $(function() {  

//     jQuery.scrollSpeed(100, 800);

// });


// // parallax
