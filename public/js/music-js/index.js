$(document).ready(function(){
    var playlist = [
  {
      title: "Music 1",
      artist: "Liu ruoying",
      mp3: "http://geepower.github.io/music/houlai.mp3",
      poster: "images/1.jpg"
  },
  {
      title: "Music 2",
      artist: "Eason Chan",
      mp3: "http://geepower.github.io/music/peni.mp3",
      poster: "images/2.jpg"
  },
  {
      title:"Music 3",
      artist:"",
      mp3: "http://geepower.github.io/music/hello-tomorrow.mp3",
      poster: "images/2.jpg"
    },{
      title:"Music 4",
	  artist:"",
	  mp3: "http://geepower.github.io/music/xiaoxingyun.mp3",
      poster: "images/3.jpg"
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});