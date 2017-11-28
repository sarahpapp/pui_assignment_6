
/*
Vivus animations 
*/
new Vivus('firstSVG', {
  start: 'inViewport', 
  type: 'scenario-sync', 
  duration: 150
}); 

new Vivus('secondSVG', {
  start: 'inViewport', 
  type: 'scenario-sync', 
  duration: 150
});

new Vivus ('thirdSVG', {
  start: 'inViewport', 
  type: 'scenario-sync', 
  duration: 50
});

/*
Chocolat 
*/
$(document).ready(function(){
    $('#example0').Chocolat({
    imageSize: 'contain'
  });

    $('#example3').Chocolat({
    container: '#container2',
    imageSize: 'cover'
  });

/*
Back to top functionality
*/

/*This sets the scroll distance variables required to make the button appear and disappear*/
var amountScrolled = 200;
var amountScrolledNav = 25;

/*This gets the button to appear and disappear at the right point in the user's scroll*/
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

/*This scrolls the user back to top*/
$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});

});
