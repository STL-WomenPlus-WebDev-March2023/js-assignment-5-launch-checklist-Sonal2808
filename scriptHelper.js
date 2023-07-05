// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
                const missionTarget = document.getElementById('missionTarget');
                const heading = document.createElement('h2');
  heading.textContent = 'Mission Destination';

  const list = document.createElement('ol');
  const listItem1 = document.createElement('li');
  listItem1.textContent = `Name: ${name}`;

  const listItem2 = document.createElement('li');
  listItem2.textContent = `Diameter: ${diameter}`;

  const listItem3 = document.createElement('li');
  listItem3.textContent = `Star: ${star}`;

  const listItem4 = document.createElement('li');
  listItem4.textContent = `Distance from Earth: ${distance}`;

  const listItem5 = document.createElement('li');
  listItem5.textContent = `Number of Moons: ${moons}`;

  const image = document.createElement('img');
  image.src = imageUrl;

  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);
  list.appendChild(listItem4);
  list.appendChild(listItem5);

  missionTarget.appendChild(heading);
  missionTarget.appendChild(list);
  missionTarget.appendChild(image);

}

function validateInput(testInput) {
   
    if (input === '') {
        return 'Empty';
      } else if (isNaN(input)) {
        return 'Not a Number';
      } else {
        return 'Is a Number';
      }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const pilotStatus = document.getElementById('pilotStatus');
   const copilotStatus = document.getElementById('copilotStatus');
   const fuelStatus = document.getElementById('fuelStatus');
   const cargoStatus = document.getElementById('cargoStatus');
   const launchStatus = document.getElementById('launchStatus');
 
   // Update pilot and co-pilot status
   pilotStatus.innerHTML =`Pilot ${validateInput(pilot)}`;
   copilotStatus.innerHTML = `Co-pilot ${validateInput(copilot)}`;
   fuelStatus.innerHTML = validateInput(fuelLevel);
  cargoStatus.innerHTML = validateInput(cargoLevel)
  if (validateInput(pilot) !== 'Is a Number' && validateInput(copilot) !== 'Is a Number' && validateInput(fuelLevel) === 'Is a Number' && validateInput(cargoLevel) === 'Is a Number') {
    list.style.visibility = 'hidden';
    launchStatus.innerHTML = 'Shuttle is ready for launch';
    launchStatus.style.color = 'green';
  } else {
    list.style.visibility = 'visible';
    launchStatus.innerHTML = 'Shuttle not ready for launch';
    launchStatus.style.color = 'red';
  }
}

async function myFetch() {
    async function myFetch() {
        const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
      
        if (response.ok) {
          const planetsReturned = await response.json();
          return planetsReturned;
        } else {
          throw new Error('Failed to fetch planet data');
        }
      }
      
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
