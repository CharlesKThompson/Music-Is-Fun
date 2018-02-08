function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here

  function draw(songs) {
    console.log(songs)


    var template = ''
    var getMusic = document.getElementById('songs')
    for (var i = 0; i < songs.length; i++) {
      var song = songs[i];
      template += `
    <li>
      <div class="col-sm-4">
      <h3> ${song.title}</h3>
      <img src= "${song.albumArt}" alt="cover">
      <p> ${song.artist}</p>
      <p> ${song.collection}</p>
      <p> ${song.price}</p>
      <audio controls="controls">
      <source src="${song.preview}">
      </audio>
      </div>
    </li>
    `
    getMusic.innerHTML= template

    }








  }









}
