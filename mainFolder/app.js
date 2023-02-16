// Model

let time = setInterval(decreaseCoolnessWithTime, 1000);
let coolness = 100;

let person1 = "Bestemor";
let person2 = "venn";
let person3 = "Sinnatagg";

let instructions = "";
let events;

let item1 = "Shiny Paint";
let item2 = "Cool Lights";
let item3 = "Loud Stereo";

let outcome = "";
let gameStarted = false;
let startOrMoveOn = "Start the game";
let taskAccomplished = false;
// let wave="wave"
// let fistPumb="fist-pumb"
// let handShake= "handshake"
let probabilityController = 0;

// View

updateView();
function updateView() {
  document.getElementById("app").innerHTML =
    /*HTML*/
    `<div id="infoDiv">${instructions}</div>
    <div id="animationsDiv" class="animationsDiv">
    <img src="car.png" id="car" class="car">
    <button id="start" onclick="start()">${startOrMoveOn}</button>
    </div>
    <div id="actionDiv" class="actionDiv"> 

    <p>${outcome}</p>
    <div class='coolnessDiv'>
     <p>Kulhet: ${coolness}</p> 
    <progress class='progressBar' id="coolness" max="100" min="0" value=${coolness}></progress> 
    </div>

    <div class='itemButtonDiv'>
    <button id="grabItem" onclick="grabItem('yes')">Grab Item</button>
    <button id="DontGrabItem" onclick="grabItem('no')">Do not grab Item</button>
    </div>

    <div class='greetButtonDiv'>
    <button id="wave" onclick="greet('wave')"> wave to the friend</button>
    <button id="fistbump" onclick="greet('fistbump')"> fistbump</button>
    <button id="handshake" onclick="greet('handshake')"> handshake</button>
    </div>

   </div>`;
}

// Controller

// planen her er at changeEvent kjører hver gang vi har gjort
//  et valg og henter inn en ny person med nye valg involvert

function changeEvent(events) {
  events = (Math.floor(Math.random()*6)+1)
  if (events == 1) {
    instructions = `You met ${person1}. How are you going to greet them?`;
  } else if (events == 2) {
    instructions = `You met ${person2}. How are you going to greet them?`;
  } else if (events == 3) {
    instructions = `You met ${person3}. How are you going to greet them?`;
  } else if (events == 4) {
    instructions = `You found ${item1}. Do you want to use it??`;
  } else if (events == 5) {
    instructions = `You found ${item2}. Do you want to use it??`;
  } else {
    instructions = `You found ${item3}. Do you want to use it??`;
  }
  updateView();
}
function start() {
  if (gameStarted == false) {
    changeEvent();
    gameStarted = true;
    startOrMoveOn = "click to go on";
  } else if (gameStarted == true) {
    if (taskAccomplished == false) {
      alert("you have to complete the task");
    } else changeEvent();
  }

  updateView();
  taskAccomplished=false
}

function decreaseCoolnessWithTime() {
  coolness--;
  if (coolness < 0) {
    coolness = 0;
  }
  updateView();
}

decreaseCoolnessWithTime();

function greet(chosenGreeting) {
  console.log("i am here");
  
  // Person 1:
  if (instructions.includes(`${person1}`) && chosenGreeting == "handshake") {
    outcome = `You chose  ${chosenGreeting}. They Loved it! you can go on`;
    taskAccomplished = true;
  } else if (
    instructions.includes(`${person1}`) &&
    (chosenGreeting !== "handshake")
  ) {
    outcome = `You chose ${chosenGreeting}. They hated it, try again`;
    updateView();
  }

  // Person 2:
  else if (
    instructions.includes(`${person2}`) &&
    chosenGreeting == "fistbump"
  ) {
    outcome = `You chose  ${chosenGreeting}. They Loved it! you can go on`;
    taskAccomplished = true;
  } else if (
    instructions.includes(`${person2}`) &&
    (chosenGreeting != "fistbump")
  ) {
    outcome = `You chose ${chosenGreeting}. They hated it, try again`;
  } 

  // Person 3:
  else if (
    instructions.includes(`${person3}`) &&
    chosenGreeting == 'wave'
  ) {
    outcome = `You chose  ${chosenGreeting}. They Loved it! you can go on`;
    taskAccomplished = true;
  } else if (
    instructions.includes(`${person3}`) &&
    (chosenGreeting != "wave")
  ) {
    outcome = `You chose ${chosenGreeting}. They hated it, try again`;
  } 

  else if (instructions.includes("Do you want to use it?")) {
    console.log("i am here")
    alert("You have to decide if you want the item or not");
  }

  updateView();
}
