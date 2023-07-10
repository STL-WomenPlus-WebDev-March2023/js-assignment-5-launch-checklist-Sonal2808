// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById('missionTarget');
  missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
      if ( testInput=== "") {
        return "Empty";
         } else if (isNaN(Number(testInput))== true) {
            return "Not a Number";
    } else {
      return "Is a Number";
    }
  }
  
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // Validate pilot name
   if(validateInput(pilot)=== "Empty" || validateInput(copilot)=== "Empty" || validateInput(fuelLevel)){
   alert("All fields are required!");
   } else if (validateInput(pilot)=== "Is a Number" || validateInput(copilot)=== "Is a Number" || validateInput(fuelLevel)) {
 alert("Make sure to enter valid information for each field!");

  
   } else {
list.style.visibility = "visible"
let pilotStatus = document.getElementById("pilotStatus");
pilotStatus.innerHTML = `${pilot} is ready for liftoff`;
let copilotStatus = document.getElementById("copilotStatus");
copilotStatus.innerHTML = `${copilot} is ready for liftoff`;
let fuelStatus = document.getElementById("fuelStatus");
fuelStatus.innerHTML =`${fuelLevel} Fuel level high enough for launch`;
let cargoStatus = document.getElementById("cargoStatus");
cargoStatus.innerHTML = `${cargoLevel} cargo mass low enough for launch`;
launchStatus.innerHTML = "shuttle is ready for launch!";
launchStatus.style.color = "green";
   
if(fuelLevel <10000) {
  list.style.visibility = "visible";
  let launchStatus = document.getElementById("launchStatus");
launchStatus.innerHTML = "Shuttle is not ready for launch";
launchStatus.style.color = "red";
fuelStatus.innerHTML = `${fuelLevel} Fuel level too low for launch!`;

}
if(cargoLevel >10000) {
  list.style.visibility = "visible";
  let launchStatus = document.getElementById("launchStatus");
launchStatus.innerHTML = "Shuttle is not ready for launch";
launchStatus.style.color = "red";
cargoStatus.innerHTML = `${cargoLevel} Cargo mass too heavy for launch!`;
}
}
}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
     });

    return planetsReturned;
}

function pickPlanet(planets) {
  const index = Math.floor(Math.random() * planets.length);
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

