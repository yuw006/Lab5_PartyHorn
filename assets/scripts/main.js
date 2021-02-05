// main.js

// TODO
var horn = document.getElementById("horn-sound");
var volumeImage = document.getElementById("volume-image");

//sets the volume based on the text field
function setVolumeByText(){
  let volumeInput = document.getElementById("volume_text");
  return parseInt(volumeInput);
}

//sets the icon based on the volume
function changeIcon(){
  if( 0.67 <= horn.volume <= 1.0){
    volumeImage.src = "./assets/media/icons/volume-level-3.svg";
  }
  else if( 0.34 <= horn.volume <= 0.66 ){
    volumeImage.src = "./assets/media/icons/volume-level-2.svg";
  }
}
                                   
