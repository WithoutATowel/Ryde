$( document ).ready(function() {
  $('.discover-side-column').height(window.innerHeight - $('.navbar-fixed').outerHeight());
  $('#search-results-box').height(window.innerHeight - $('.navbar-fixed').outerHeight() - $('#search-results-header').outerHeight(true));
  $('#search-results-box').css('overflow', 'scroll');
});