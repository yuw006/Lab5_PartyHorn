// main.js
var airHorn = document.getElementById('radio-air-horn');
var carHorn = document.getElementById('radio-car-horn');
var partyHorn = document.getElementById('radio-party-horn');
var horn = document.getElementById('horn-sound');
var soundImage = document.getElementById("sound-image");
var volumeImage = document.getElementById("volume-image");
var volumeText = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");

airHorn.addEventListener('click', function (){
                                    soundImage.src = "./assets/media/images/air-horn.svg";
                                    horn.src="./assets/media/audio/air-horn.mp3";}, false);
carHorn.addEventListener('click', function (){
                                    soundImage.src = "./assets/media/images/car.svg";
                                    horn.src="./assets/media/audio/car-horn.mp3";}, false);
partyHorn.addEventListener('click', function (){
                                      soundImage.src = "./assets/media/images/party-horn.svg";
                                      horn.src="./assets/media/audio/party-horn.mp3";}, false);

document.getElementById('honk-btn').addEventListener( 'click', function() { horn.play(); event.preventDefault();}, false);

volumeText.addEventListener('input', setVolume, false);
volumeSlider.addEventListener('input', setVolume, false);

//sets the volume based on the text field
function setVolume(e){
  let v2=parseInt(e.target.value);
  horn.volume = (v2/100.00).toFixed(2);
  volumeSlider.value = v2;
  volumeText.value = v2;
  if( v2 == 0 ){
    document.getElementById('honk-btn').disabled = true;
  }
  else{
    document.getElementById('honk-btn').disabled = false;
  }
  changeIcon(v2);
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
                                   
