let yourChoice = prompt("What is your choice?\nRock, Paper, Scissor")
let teste;

let opChoice;

function getComputerChoice(){
    let op = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random() * op.length);
    let teste = op[random];
    console.log("Your oponent played: " + teste);
    return teste;
}

function round(playerSelection, computerSelection){
    
}

getComputerChoice();
console.log(yourChoice);
console.log(teste);
