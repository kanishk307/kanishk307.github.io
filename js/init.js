(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    
    //Added by Kanishk
      $('#kanishk-jain').hide();
      $('#kanishk-jain').slideDown(1300);
    
      $('#tagline').animate({
       "font-size" : "+=5px" 
        },1300,'linear');
//      $('#kj').animate({
//         "margin-right" : "+=100px"; 
//      },1000,linear);
    
      
  }); // end of document ready
})(jQuery); // end of jQuery name space