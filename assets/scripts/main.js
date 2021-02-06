// main.js
var airHorn = document.getElementById('radio-air-horn');
var carHorn = document.getElementById('radio-car-horn');
var partyHorn = document.getElementById('radio-party-horn');
var soundImage = document.getElementById("sound-image");

airHorn.addEventListener('click', function (){
                                    soundImage.src = "./assets/media/images/air-horn.svg";}, false);
carHorn.addEventListener('click', function (){
                                    soundImage.src = "./assets/media/images/car.svg";}, false);
partyHorn.addEventListener('click', function (){
                                      soundImage.src = "./assets/media/images/party-horn.svg";}, false);



// TODO
