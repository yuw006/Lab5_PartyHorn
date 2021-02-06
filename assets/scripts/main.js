// main.js

// TODO
var horn = document.getElementById("horn-sound");
var volumeImage = document.getElementById("volume-image");

var volumeText = document.getElementById("volume_text");
volumeText.addEventListener('change', setVolume(volumeText.value), false);
var volumeSlider = document.getElementById("volume_slider");
volumeSlider.addEventListener('change', setVolume(volumeSlider.value), false);

//sets the volume based on the text field
function setVolume(v){
  horn.v = (setVolumeByText()/100.00).toFixed(2);
  changeIcon(v);
}

//sets the icon based on the volume
function changeIcon(v){
  if( 67 <= v ){
    volumeImage.src = "./assets/media/icons/volume-level-3.svg";
  }
  else if( 33 <= v ){
    volumeImage.src = "./assets/media/icons/volume-level-2.svg";
  }
  else if( 1 <= v ){
    volumeImage.src = "./assets/media/icons/volume-level-1.svg";
  }
  else {
    volumeImage.src = "./assets/media/icons/volume-level-0.svg";
  }
}
                                   
