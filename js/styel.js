$(document).ready(function() {
 /*=============type js=====================*/
var typed = new Typed(".type", {
  // Waits 1000ms after typing "First"
  strings: [
    "WELCOME TO MERIDIAN HRMIS", "BETTER SOLUTION BETTER LIFE"
  ],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
  smartBackspace: true,
  backDelay: 4000,

});
 /*=============type js=====================*/

 /*=============click event=====================*/
$('.username, .password').on('click', function(){
    $('.username, .password').removeClass('color');
    $(this).addClass('color');
});
 /*=============click event=====================*/


 /*=============silk slider=====================*/
$('#concerns .concernsss').slick({
  infinite: true,
  autoplay:true,
  autoplaySpeed: 3000,
  //dots: true,
  prevArrow: false,
  nextArrow: false,
speed: 300,
slidesToShow: 4,
slidesToScroll: 2,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
 });
 /*=============silk slider=====================*/
});
