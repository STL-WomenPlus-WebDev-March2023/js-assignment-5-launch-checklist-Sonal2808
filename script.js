//const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function() {
  document.getElementById('faultyItems').style.visibility = 'hidden';
  let listedPlanets=myFetch();
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   myFetch().then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
  }).then(function () {
      let randomPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
      randomPlanet.name,
      randomPlanet.diameter,
      randomPlanet.star,
      randomPlanet.distance,
      randomPlanet.moons,
      randomPlanet.image
    
      );
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  });
  let list = document.getElementById("faultyItems");
  let form=document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

   let pilotName = document.querySelector("input[name=pilotName]");
   let pilot = pilotName.value;
    let copilotName = document.querySelector("input[name=copilotName]");
    let copilot = pilotName.value;
    let fuelLevel = document.valuequerySelector("input[name=fuelLevel]");
    let fuel = fuelLevel.value;
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let cargo = cargoMass.value;
formSubmission(doucment, list, pilot, copilot, fuel, cargo);
  
 // Call the formSubmission function with the updated parameters

    // Add logic to select a random planet from the listedPlanets array
    const randomPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(
      document,
      randomPlanet.name,
      randomPlanet.diameter,
      randomPlanet.star,
      randomPlanet.distance,
      randomPlanet.moons,
      randomPlanet.image
    );
  

    // Update destination information
    /*document.getElementById('missionTarget').innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${randomPlanet.name}</li>
        <li>Diameter: ${randomPlanet.diameter}</li>
        <li>Star: ${randomPlanet.star}</li>
        <li>Distance from Earth: ${randomPlanet.distance}</li>
        <li>Number of Moons: ${randomPlanet.moons}</li>
      </ol>
      <img src="${randomPlanet.image}">
    `;*/
  });
});