// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById('missionTarget');
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

function validateInput(value) {
      if (value === '') {
      return 'Empty';
    } else if (isNaN(Number(value))) {
      return 'Not a Number';
    } else {
      return 'Is a Number';
    }
  }
  


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   // Validate pilot name
  const pilotValidation = validateInput(pilot);
  if (pilotValidation === 'Empty') {
    console.log('Please enter a pilot name.');
    return;
  }
  // Validate co-pilot name
  const coPilotValidation = validateInput(copilot);
  if (coPilotValidation === 'Empty') {
    console.log('Please enter a co-pilot name.');
    return;
  }
  // Validate fuel level
  const fuelValidation = validateInput(fuelLevel);
  if (fuelValidation !== 'Is a Number') {
    console.log('Please enter a valid fuel level.');
    return;
  }
  // Validate cargo mass
  const cargoValidation = validateInput(cargoLevel);
  if (cargoValidation !== 'Is a Number') {
    console.log('Please enter a valid cargo mass.');
    return;
  }
  // Update shuttle requirements
  document.getElementById('pilotStatus').innerHTML = `Pilot: ${pilot}`;
  document.getElementById('copilotStatus').innerHTML = `Co-pilot: ${copilot}`;
  // Reset faultyItems visibility and launchStatus text and color
  list.style.visibility = 'hidden';
  document.getElementById('launchStatus').textContent = 'Awaiting Information Before Launch';
  document.getElementById('launchStatus').style.color = '';
  // Check fuel level
  if (fuelLevel < 10000) {
    list.style.visibility = 'visible';
    document.getElementById('fuelStatus').innerHTML = 'Fuel level too low for launch';
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
    document.getElementById('launchStatus').style.color = 'red';
  } else {
    document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch';
  }

  // Check cargo mass
  if (cargoLevel > 10000) {
    list.style.visibility = 'visible';
    document.getElementById('cargoStatus').innerHTML = 'Cargo mass too high for launch';
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
    document.getElementById('launchStatus').style.color = 'red';
  } else {
    document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch';
  }

  // Check if shuttle is ready for launch
  if (list.style.visibility !== 'visible') {
    document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch';
    document.getElementById('launchStatus').style.color = 'green';
  }

  // Perform other actions with the validated data
  // ...

  // Reset the form
  console.log('Form submitted successfully.');
  document.getElementById('launchForm').reset();
}
/*function showAlert(message) {
  const alertElement = document.getElementById('alert');
  alertElement.style.display = 'block';
  alertElement.innerHTML = message;
}*/
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

