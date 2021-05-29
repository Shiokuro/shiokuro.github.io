
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

    $.getScript('js/pagepiling.js')
  }