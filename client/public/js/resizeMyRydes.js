$( document ).ready(function() {
    console.log((window.innerHeight - $('.navbar-fixed').outerHeight()));
  $('#my-rydes-page').css('minHeight', (window.innerHeight - $('.navbar-fixed').outerHeight() - $('footer').outerHeight()));
});