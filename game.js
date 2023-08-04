// import 'animate.css';
let playButton = document.getElementById("gameButton");
                playButton.addEventListener("click",game);
                
let restartButton = document.getElementById("restartButton");
                    restartButton.addEventListener("click",resetGame);
let paperButton = document.getElementById("paperButton");
                  paperButton.addEventListener("click", showImage);
let nextRoundButton = document.getElementById("round");
                      nextRoundButton.addEventListener("click",nextRound);
              
let playerPoints=0;
let computerPoints=0;
let txtPlayerPoints = document.getElementById("txtScorePLayer");
let txtComputerPoints = document.getElementById("txtScoreComputer");
let playerImage = document.getElementById("playerImage");
let computerImage = document.getElementById("computerImage");

// prueba(param2)
// function prueba(param){
//     let mensaje = document.getElementById("txtScorePLayer");
//     param=param+1;
//     let mensaje2 = `You: ${param}`
//     mensaje.innerHTML= mensaje2;
//     let imagen = document.getElementById("playerImage");
//     let type = "PAPER";
//     showImage(imagen,type);
// }
// prueba();
function showImage(image, type) {
    // type.toLowerCase();
    restartButton.disabled = true;
    image.src=`/assets/fightOptions/${type}.jpg`
    image.classList.remove("showImage");
    image.classList.add("showImage");
    image.style.opacity = "1";
}
function nextRound(){
    hideImages();
}
const options=["ROCK","PAPER","SCISSORS"];


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

function getplayerChoice (){
    let playerInput = prompt("Your selection").toUpperCase();
    let playerSelection=options.find((element)=>element==playerInput);
    if(playerSelection!=null && playerSelection!=undefined){
        return playerSelection;
    }else{
       while(playerSelection==null || playerSelection==undefined){
        alert("Invalid option. You can use only: Paper , Rock , Scissors")
        playerInput = prompt("Your selection").toUpperCase();
        playerSelection=options.find((element)=>element==playerInput);
       }
       return playerSelection;
    }
}

function game(){

    // let roundsPLayerWins = 0;
    // let roundsComputerWins = 0;
    // for(let i=0;i<5;i++){
    //     alert("Round number: " + i);
    //     let computerSelection = getComputerChoice(); 
    //     let playerSelection = getplayerChoice();
    //     let roundWinner = getRoundWinner(computerSelection,playerSelection)
    //     if(roundWinner=="PLAYER"){
    //         roundsPLayerWins++;
    //         alert("Player win this round. Next Round...")
    //     }else if(roundWinner=="COMPUTER"){
    //         roundsComputerWins++;
    //         alert("Computer win this round. Next Round...")
    //     }else{
    //         alert("Draw")
    //     }
    // } 
    // getWinner(roundsPLayerWins,roundsComputerWins);
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

function getWinner(roundsPLayerWins,roundsComputerWins){
    if(roundsPLayerWins>roundsComputerWins){
        alert ("Player Won the game!!! " + " Player Wins: " + roundsPLayerWins + " Computer Wins: " + roundsComputerWins)
    }else if(roundsPLayerWins<roundsComputerWins){
        alert ("Computer Won the game!!! " + " Computer Wins: " + roundsComputerWins + " Player Wins: " + roundsPLayerWins)
    }else{
        alert ("No winner, its a draw... " + " Computer Wins: " + roundsComputerWins + " Player Wins: " + roundsPLayerWins)
    }
    
}


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