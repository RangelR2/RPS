let option = prompt("What is your choice?\nRock, Paper, Scissor").toLowerCase();
const myArray = ["rock", "paper", "scissor"];
let randomChoise;

if(option == "rock" || option == "paper" || option == "scissor"){
    console.log("You played: " + option);    
}else{
    console.log("This isn't a option!");
}

function getComputerChoice(){
    let random = Math.floor(Math.random() * myArray.length);
    randomChoise = myArray[random];
    console.log("Your oponent played: " + randomChoise);
    console.log("--------------------------------");
    return randomChoise;
}

function round(){
    if(option == randomChoise){
        console.log("Draw!");
    }
    if(option == "rock" && randomChoise == "scissor"){
        console.log("You won!")
    }else{
    }
    if(option == "rock" && randomChoise == "paper"){
        console.log("You lost!")
    }else{
    }
    if(option == "paper" && randomChoise == "scissor"){
        console.log("You lost!")
    }else{
    }
    if(option == "paper" && randomChoise == "rock"){
        console.log("You won!")
    }else{
    }
    if(option == "scissor" && randomChoise == "rock"){
        console.log("You lost!")
    }else{
    }
    if(option == "scissor" && randomChoise == "paper"){
        console.log("You won!")
    }else{
    }
}

getComputerChoice();
round();