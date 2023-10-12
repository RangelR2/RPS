let option = prompt("What is your choice?\nRock, Paper, Scissor");
let playerSelection = option.toLowerCase();
const myArray = ["Rock", "Paper", "Scissor"];
let randomChoise;


function getComputerChoice(){
    let random = Math.floor(Math.random() * myArray.length);
    randomChoise = myArray[random];
    console.log("Your oponent played: " + randomChoise);
    return randomChoise;
}

function round(playerSelection, getComputerChoice){
    if(playerSelection === getComputerChoice){
        console.log("Empate!");
    }else{
        console.log("pfv aparece");
    }
    return;
}

console.log(getComputerChoice());
console.log(round());
console.log("Teste: " + playerSelection)

