// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

  
  let listedPlanets; 
  
  let listedPlanetsResponse= myFetch();
  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
     // console.log(listedPlanets);
  }).then(function () {
     // console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
   let list = document.getElementById("faultyItems"); 
   //list.style.visibility = "hidden";
   // TO DO: Work on list for Flight Requirements/ Faulty Equipment
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       event.preventDefault();
       let pilotName = document.querySelector("input[name=pilotName]");
       let pilot = pilotName.value;
       let copilotName = document.querySelector("input[name=copilotName]");
       let copilot = copilotName.value;
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let fuel = fuelLevel.value;
       let cargoMass = document.querySelector("input[name=cargoMass]");
       let cargo = cargoMass.value;
       
       formSubmission(document, list, pilot, copilot, fuel, cargo);
     })
 });