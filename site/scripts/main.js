$(document).on('ready', function() {
  
  var hiddenNav = $('.site-wrapper>nav'),
      header    = $('header');
  
  $(window).on('scroll', function() {
    if($(this).scrollTop() >= header.height()) {
      hiddenNav.addClass('nav-reveal');
    } else {
      hiddenNav.removeClass('nav-reveal');
    }
  });
});