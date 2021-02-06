// main.js
var airHorn = document.getElementById('radio-air-horn');
var carHorn = document.getElementById('radio-car-horn');
var partyHorn = document.getElementById('radio-party-horn');
var horn = document.getElementById('horn-sound');
var soundImage = document.getElementById("sound-image");

airHorn.addEventListener('click', function (){
                                    soundImage.src = "./assets/media/images/air-horn.svg";
                                    horn.src="./assets/media/audio/air-horn.mp3";}, false);
carHorn.addEventListener('click', function (){
                                    soundImage.src = "./assets/media/images/car.svg";
                                    horn.src="./assets/media/audio/car-horn.mp3";}, false);
partyHorn.addEventListener('click', function (){
                                      soundImage.src = "./assets/media/images/party-horn.svg";
                                      horn.src="./assets/media/audio/party-horn.mp3";}, false);



// TODO
