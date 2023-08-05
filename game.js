//Buttons 
const restartButton = document.getElementById("restartButton");
                    restartButton.addEventListener("click",resetGame);
const paperButton = document.getElementById("paperButton");
                    paperButton.addEventListener("click", function() {
                        game("PAPER");
                    });
const rockButton = document.getElementById("rockButton");
                    rockButton.addEventListener("click", function() {
                        game("ROCK");
                    });
const scissorsButton = document.getElementById("scissorsButton");
                        scissorsButton.addEventListener("click", function() {
                        game("SCISSORS");
                    });
const nextRoundButton = document.getElementById("nextRoundButton");
                      nextRoundButton.addEventListener("click",nextRound);

//Possible options
const options=["ROCK","PAPER","SCISSORS"];       

//Players points, images of selected choice and players points counter              
let playerPoints=0;
let computerPoints=0;
const txtPlayerPoints = document.getElementById("txtScorePLayer");
const txtComputerPoints = document.getElementById("txtScoreComputer");
const playerImage = document.getElementById("playerImage");
const computerImage = document.getElementById("computerImage");

//MODAL
const modal = document.getElementById('modal');



function game(playerChoice){
   let computerChoice = getComputerChoice();
   showImage(computerImage,computerChoice);
   showImage(playerImage,playerChoice);
 
   setTimeout(() => {
    showRoundWinner(playerChoice, computerChoice);
  }, 1800);
}

function showImage(image, type) {
    type.toLowerCase();
    image.src=`./assets/fightOptions/${type}.jpg`
    image.classList.remove("showImage");
    image.classList.add("showImage");
    image.style.opacity = "1";
}

function getComputerChoice(){
    let num = Math.floor(Math.random() * 10);
    let computerSelection="";
    if(num<=3){
        computerSelection= options[0].toUpperCase();
    }else if (num>3&&num<=6){
        computerSelection= options[1].toUpperCase();
    }else{
        computerSelection= options[2].toUpperCase();
    }
    return computerSelection;
}



function showRoundWinner(playerChoice,computerChoice){
    let roundMessage = getRoundWinner(playerChoice,computerChoice);
    addPoints(roundMessage);
    openModal(roundMessage);
}
function getRoundWinner(computerSelection, playerSelection) {
    switch (playerSelection) {
      case computerSelection:
        return "DRAW"
        break;
      case "ROCK":
        if (computerSelection === "SCISSORS") {
          return "PLAYER"
        } else {
            return "COMPUTER"
        }
        break;
      case "PAPER":
        if (computerSelection === "ROCK") {
            return "PLAYER"
        } else {
            return "COMPUTER"
        }
        break;
      case "SCISSORS":
        if (computerSelection === "PAPER") {
            return "PLAYER"
        } else {
            return "COMPUTER"
        }
        break;
      default:
        alert("Error. Player: " + playerSelection + ", Computer: " + computerSelection);
    }
  }

function addPoints(winner){
    if(winner==="PLAYER"){
        playerPoints++;
        txtPlayerPoints.innerHTML=`You: ${playerPoints}`; 
    }else if(winner=="COMPUTER"){
        computerPoints++;
        txtComputerPoints.innerHTML=`Computer: ${computerPoints}`; 
    }
}

function openModal(message){
    let roundWinnerH2=document.getElementById('winnerRoundMessage');
    roundWinnerH2.innerHTML=`The Winner of this Round is...${message}`
    modal.style.visibility = "visible";
}

function nextRound(){
    hideImages();
    modal.style.visibility = "hidden";
}


//-------------RESET GAME--------------------
function resetGame(){
    resetScore();
    hideImages();
}

const hideImages=()=>{
    playerImage.src="";
    playerImage.classList.remove("showImage");
    playerImage.style.opacity = "0";

    computerImage.src="";
    computerImage.classList.remove("showImage");
    computerImage.style.opacity = "0";
}

const resetScore=()=>{
    playerPoints=0;
    computerPoints=0;
    
    txtPlayerPoints.innerHTML=`You: ${playerPoints}`; 
    txtComputerPoints.innerHTML=`Computer: ${computerPoints}`; 
}
