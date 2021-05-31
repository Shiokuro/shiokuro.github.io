$(".menuIcon").click(function(){
  $(".mobileButtons").toggleClass("noDisplay")
})

$(".mscMenu").click(function(){
  $(".mscControls").toggleClass("noDisplay")
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
    path: "./songs/song1.mp3"
  },
  {
    name: "Daytime Thief",
    path: "./songs/song2.mp3"
  },  
  {
    name: "Prostitution ",
    path: "./songs/song3.mp3"
  },  
  {
    name: "Compulsive Bomber",
    path: "./songs/song4.mp3"
  },  
  {
    name: "Adolescent, Burglar",
    path: "./songs/song5.mp3"
  },  
  {
    name: "Replicant ",
    path: "./songs/song6.mp3"
  },  
  {
    name: "Flower And Badger Game",
    path: "./songs/song7.mp3"
  },  
  {
    name: "Middle Age, Plagiarist",
    path: "./songs/song8.mp3"
  },  
  {
    name: "Plagiarism",
    path: "./songs/song9.mp3"
  },  
  {
    name: "Thoughtcrime",
    path: "./songs/song10.mp3"
  },  
  {
    name: "Escape",
    path: "./songs/song11.mp3"
  },  
  {
    name: "Childhood, In Memories",
    path: "./songs/song12.mp3"
  },  
  {
    name: "Night Journey",
    path: "./songs/song13.mp3"
  },  
  {
    name: "Ghost In A Flower",
    path: "./songs/song14.mp3"
  }
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
  $('#play').removeClass('mscPlay').addClass('mscPause');
}

function pauseSong(){
  track.pause()
  playingSong = false;
  $('#play').removeClass('mscPause').addClass('mscPlay');
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

