require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let destination = document.getElementById("missionTarget");
        destination.innerHTML = 
                `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if(testInput === "") {
       return "Empty"; 
    } else if(isNaN(Number(testInput)) == true){
        return "Not a Number";
    } else {//if (isNaN(testInput) == false)
        return "Is a Number";
    }
   

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Enter correct input type!");
    } else{
        //alert("Everything is fine");
       // list.style.visibility = "visible";
        let pilotStatus = document.getElementById("pilotStatus");
            pilotStatus.innerHTML = `${pilot} is ready for liftoff`;
        let copilotStatus = document.getElementById("copilotStatus");
            copilotStatus.innerHTML = `${copilot} is ready for liftoff`;
        let fuelStatus = document.getElementById("fuelStatus");
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        let cargoStatus = document.getElementById("cargoStatus");
                    cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle ready for Launch!";
                    launchStatus.style.color = "green"; 
        if(fuelLevel < 10000) {
            list.style.visibility = "visible";
            let launchStatus = document.getElementById("launchStatus");
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            }
        
        if(cargoLevel > 10000) {
            list.style.visibility = "visible";
            let launchStatus = document.getElementById("launchStatus");
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            }
           
    }
   
}

async function myFetch() {
    let listedPlanetsResponse = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
    return listedPlanetsResponse;
}

function pickPlanet(planets) {
    let planetNum = Math.floor(Math.random() * planets.length);
    return planets[planetNum];
}
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;