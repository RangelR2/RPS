const myArray = ["rock", "paper", "scissor"];
let randomChoise;
let score = 0;
let scoreOp = 0;
let option;

function oxes() {
    console.log("--------------------------------");
    if (option == "rock" || option == "paper" || option == "scissor") {
        console.log("You played: " + option);
    } else {
        console.log("This isn't a option!");
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * myArray.length);
    randomChoise = myArray[random];
    console.log("Your opponent played: " + randomChoise);
    return randomChoise;
}

function round() {
    if (option == randomChoise) {
        console.log("Draw!");
        score++;
        scoreOp++;
        console.log("You: " + score + " | Opponent: " + scoreOp);
    }
    if (option == "rock" && randomChoise == "scissor") {
        console.log("You won! Rock beats scissor!")
        score++;
        console.log("You: " + score + " | Opponent: " + scoreOp);
    } else {
    }
    if (option == "rock" && randomChoise == "paper") {
        console.log("You lost! Paper beats rock!")
        scoreOp++;
        console.log("You: " + score + " | Opponent: " + scoreOp);
    } else {
    }
    if (option == "paper" && randomChoise == "scissor") {
        console.log("You lost! Scissor beats paper!")
        scoreOp++;
        console.log("You: " + score + " | Opponent: " + scoreOp);
    } else {
    }
    if (option == "paper" && randomChoise == "rock") {
        console.log("You won! Paper beats rock!")
        score++;
        console.log("You: " + score + " | Opponent: " + scoreOp);
    } else {
    }
    if (option == "scissor" && randomChoise == "rock") {
        console.log("You lost! Rock beats scissor!")
        scoreOp++;
        console.log("You: " + score + " | Opponent: " + scoreOp);
    } else {
    }
    if (option == "scissor" && randomChoise == "paper") {
        console.log("You won! Scissor beats paper!")
        score++;
        console.log("You: " + score + " | Opponent: " + scoreOp);
    } else {
    }
    console.log("--------------------------------");
}

let choose = "yes";

function game() {
    option = prompt("What is your choice?\nRock, Paper, Scissor").toLowerCase();
    oxes();
    getComputerChoice();
    round();
}

function dot() {
    do {
        game();
        choose = prompt("Wanna continue?\nYes | No").toLowerCase();
    } while (choose == "yes");
}

choose = "no";
dot();