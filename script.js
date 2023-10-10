function getComputerChoice(){
    let op = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random() * op.length);
    let teste = op[random];
    console.log("Your oponent played: " + teste);
}

function playRound(playerSelection, computerSelection){

}

let playerSelection = prompt("Make your choice!");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection)
function game(){

}