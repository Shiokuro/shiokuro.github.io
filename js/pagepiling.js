
if (screen && screen.width > 768) {
    $(document).ready(function() {
      $('#pagepiling').pagepiling({
        scrollingSpeed: 400,
        easing: 'linear',
        navigation: false,
      });
    });
    } else{ 
      $(document).ready(function() {
        $('#pagepiling').pagepiling({
          scrollingSpeed: 400,
          easing: 'linear',
          navigation: false,
          direction: 'horizontal',
        });
      });
    }
  
  $(".arrows").click(function() {
    $.fn.pagepiling.moveSectionDown();
  })
  