// Write your JavaScript code here!
window.addEventListener("load", function() {
  document.getElementById('faultyItems').style.visibility = 'hidden';
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   myFetch().then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
  }).then(function () {
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
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  });
  document.getElementById('formSubmit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const list = document.getElementById('faultyItems');
    const pilot = document.getElementById('pilotName').value;
    const copilot = document.getElementById('copilotName').value;
    const fuelLevel = document.getElementById('fuelLevel').value;
    const cargoLevel = document.getElementById('cargoMass').value;

    studentFunctions.formSubmission(window.document, document.getElementById('testForm'), "Chris", "Bob", 0, 5);
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