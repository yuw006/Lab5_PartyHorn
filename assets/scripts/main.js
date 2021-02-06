// main.js
/*var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");
var soundImage = document.getElementById("soundImage");

airHorn.addEventListner("click",changeToAirHorn);
carHorn.addEventListner("click",changeToCarHorn);
partyHorn.addEventListner("click",changeToPartyHorn);

function changeToAirHorn(){
  soundImage.src = "./assets/media/images/air-horn.svg"; 
}
function changeToCarHorn(){
  soundImage.src = "./assets/media/images/car-horn.svg"; 
}
function changeToPartyHorn(){
  soundImage.src = "./assets/media/images/party-horn.svg"; 
}*/
document.getElementById('radio-car-horn').addEventListener("onClick",document.getElementById('sound-image').src='./assets/media/images/car.svg');
// TODO
