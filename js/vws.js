$(".menuIcon").click(function(){
  $(".mobileButtons").toggleClass("noDisplay")
})

$(".mscMenu").click(function(){
  $("#pcControls").toggleClass("noDisplay")
})

//Music Player

let prev = document.querySelector(".mscPrev");
let play = document.querySelector(".mscPlay");
let next = document.querySelector(".mscNext");
let title = document.querySelector(".mscTitle");
let title2 = document.querySelector("#mscTitle");
let showDuration = document.querySelector(".duration");
let recentVol = document.querySelector("#volume");

let timer;
let autoplay = 0;

let indexNo = 0;
let playingSong = false;

let track = document.createElement("audio");

let songList = [
  {
    name: "Confession Of Plagiarist",
    path: "./songs/01.wav"
  },
  {
    name: "Daytime Thief",
    path: "./songs/02.wav"
  },  
  {
    name: "Prostitution ",
    path: "./songs/give me a ride.wav"
  },  
  {
    name: "Compulsive Bomber",
    path: "./songs/white.wav"
  },
];

function loadTrack(indexNo){
  track.src = songList[indexNo].path;
  title.innerHTML = " &#9834; " +songList[indexNo].name;
  title2.innerHTML = " &#9834; " +songList[indexNo].name;
  track.load();
}
loadTrack(indexNo);


function justPlay(){
  if(playingSong==false){
    playSong();
  } else {
    pauseSong();
  }
}

function playSong(){
  track.play();
  playingSong = true;
  $('.play').removeClass('mscPlay').addClass('mscPause');
}

function pauseSong(){
  track.pause()
  playingSong = false;
  $('.play').removeClass('mscPause').addClass('mscPlay');
}

function nextSong(){
  if (indexNo < songList.length - 1){
    indexNo += 1;
    loadTrack(indexNo);
    playSong();
  } else {
    indexNo = 0;
    loadTrack(indexNo);
    playSong();
  }
}

function prevSong(){
  if(indexNo > 0){
    indexNo -= 1;
    loadTrack(indexNo);
    playSong();
  } else {
    indexNo = songList.length - 1;
    loadTrack(indexNo);
    playSong();
  }
}

function volumeChange(){
  track.volume = recentVol.value/100;
}

function muteSound(){
  if(!track.muted) {
    track.muted = true;
    $('#mute').removeClass('mscMute').addClass('mscUnmute');
  } else {
    track.muted = false;
    $('#mute').removeClass('mscUnmute').addClass('mscMute');
  }
}

track.addEventListener("ended", function(){
  indexNo += 1;
  loadTrack(indexNo);
  playSong();
});

function artistsPage(){
  $('header').attr('id','artHeader');
}

function notArtistsPage(){
  $('header').removeAttr('id');
}