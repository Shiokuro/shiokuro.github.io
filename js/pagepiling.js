
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
if (screen && screen.width < 768) {
  $( document ).ready(function(){
    $.fn.pagepiling.setAllowScrolling(false, "down, up");
  })
}

  $(".arrows").click(function() {
    $.fn.pagepiling.moveSectionDown();
  })

  $(".arrowMobile").click(function() {
    $.fn.pagepiling.moveSectionDown();
  })

  $(".arrowBackMobile").click(function() {
    $.fn.pagepiling.moveSectionUp();
  })

  $( ".lobby" ).on('click', function() {
    $( "#body" ).load( "lobbyBody.html" );
  });
  
  $( ".sobre" ).on('click', function() {
    $( "#body" ).load( "sobre.html" );
  });
  
  $( ".historia" ).on('click', function() {
    $( "#body" ).load( "historia.html" );
  });
  
  $( ".analise" ).on('click', function() {
    $( "#body" ).load( "analise.html" );
  });
  
  $( ".artistas" ).on('click', function() {
    $( "#body" ).load( "artistas.html" );
  });

  function loadDoc(pageName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("body").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", pageName + ".html", true);
    xhttp.send();

    $('#corpo').removeClass('scroll');
    $('header').removeClass('posAbsolute');

    setTimeout($.getScript('js/pagepiling.js'), 300);
  }

  function loadDocNoPP(pageName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("body").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", pageName + ".html", true);
    xhttp.send();

    $('#corpo').addClass('scroll');
    $('header').addClass('posAbsolute');

    setTimeout($.getScript('js/pagepiling.js'), 300);
  }
