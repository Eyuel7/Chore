let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let score = document.getElementById("scoreNum");

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentPlaying = true;
let count = 0;

function isBot(door){
  if(door.src === botDoorPath){
    return true;
  }
  return false;
}

//Check whether the doors are clicked or not
function isClicked(door){
  if(door.src === closedDoorPath){
    return false;
  }
  return true;
}

const playDoor = (door) => {
  numClosedDoors--;

  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door)){
    gameOver();
  }
}

//Randomly places the bot between the doors
const randomChoreDoorGenerator = () => {
  
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  if(choreDoor === 0){
    openDoor1 = botDoorPath
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor == 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else{
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

doorImage1.onclick = () => {
  
  if(!isClicked(doorImage1) && currentPlaying === true){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  
  if(!isClicked(doorImage2) && currentPlaying === true){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  
  if(!isClicked(doorImage3) && currentPlaying === true){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}

//Start a new round
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;

  numClosedDoors = 3;

  startButton.innerHTML = 'Good luck!';

  currentPlaying = true;

  randomChoreDoorGenerator();
}

startButton.onclick = () => {
  if(currentPlaying === false){
  startRound();
  }
}

//Update the startButton based on the player's status
const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
    count++;
    score.innerHTML = count;
  }
  else{
    startButton.innerHTML = 'Game over! Play again?';
    count = 0;
    score.innerHTML = count;
  }
  currentPlaying = false;
}

startRound();