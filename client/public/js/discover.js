$( document ).ready(function() {
  $('#search-results-box').height(window.innerHeight - $('.navbar-fixed').outerHeight() - $('#search-results-header').outerHeight(true));
  $('#search-results-box').css('overflow', 'scroll');
});