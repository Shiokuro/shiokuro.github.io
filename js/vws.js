$(document).ready(function() {
  
  $('#pagepiling').pagepiling({
    scrollingSpeed: 400,
    easing: 'linear',
    navigation: false,
  });
});

$(".arrows").click(function() {
  $.fn.pagepiling.moveSectionDown();
})