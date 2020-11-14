$(document).ready(function(){
  //nav click scroll
  $('.menu ul li a').click(function(){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    },1000);
   });

   //back to top
   $('.back-to-top').click(function(){
    $('html,body').animate({
      scrollTop : 0,
    },2000);
   });
   // menu responsiv button
   $('.nav-icon').click(function(){
      $('.menu ul').slideToggle();
      return false;
   });

   $('.nav-icon').click(function(){
      $('.logo-menu').toggleClass('toggle_class');
   });



    //popup
   $('.image-popup').magnificPopup({
       type: 'image',
       gallery:{
         enabled:true
      }
    });
});

$(window).scroll(function(){
  var scrollvalue = $(this).scrollTop();

  $('.back-to-top span').text(scrollvalue);

  if (scrollvalue > 500){
    $('.back-to-top').slideDown();
    $('.logo-menu').addClass('fiexdHeader');
  }else{
    $('.back-to-top').fadeOut();
    $('.logo-menu').removeClass('fiexdHeader');
  }
});