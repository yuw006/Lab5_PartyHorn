// main.js
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");
var soundImage = document.getElementById("soundImage");

airHorn.addEventListener("onclick",changeToAirHorn);
carHorn.addEventListener("onclick",changeToCarHorn);
partyHorn.addEventListener("onclick",changeToPartyHorn);

function changeToAirHorn(){
  soundImage.src = "./assets/media/images/air-horn.svg"; 
}
function changeToCarHorn(){
  soundImage.src = "./assets/media/images/car.svg"; 
}
function changeToPartyHorn(){
  soundImage.src = "./assets/media/images/party-horn.svg"; 
}


// TODO
