let teste;
        let playerSelection;
        const myArray = ["rock", "paper", "scissor"];
        let score = 0;
        let scoreOp = 0;
        const rock = document.querySelector('#rock');
        rock.addEventListener('click', () => {
            playerSelection = "rock";
            playRound();
        });

        const paper = document.querySelector('#paper');
        paper.addEventListener('click', () => {
            playerSelection = "paper";
            playRound();
        });

        const scissor = document.querySelector('#scissor');
        scissor.addEventListener('click', () => {
            playerSelection = "scissor";
            playRound();
            return playerSelection;
        });

        function getComputerChoice() {
            let random = Math.floor(Math.random() * myArray.length);
            randomChoise = myArray[random];
            console.log("Your opponent played: " + randomChoise);
            return randomChoise;
        }

        function playRound() {
            getComputerChoice();            
            if (playerSelection == randomChoise) {
                console.log("Draw!");
                score++;
                scoreOp++;
                teste = "You: " + score + " | Opponent: " + scoreOp;
            }
            if (playerSelection == "rock" && randomChoise == "scissor") {
                console.log("You won! Rock beats scissor!")
                score++;
                teste = "You: " + score + " | Opponent: " + scoreOp;
            } else {
            }
            
            if (playerSelection == "rock" && randomChoise == "paper") {
                console.log("You lost! Paper beats rock!")
                scoreOp++;
                teste = "You: " + score + " | Opponent: " + scoreOp;
            } else {
            }
            if (playerSelection == "paper" && randomChoise == "scissor") {
                console.log("You lost! Scissor beats paper!")
                scoreOp++;
                teste = "You: " + score + " | Opponent: " + scoreOp;
            } else {
            }
            if (playerSelection == "paper" && randomChoise == "rock") {
                console.log("You won! Paper beats rock!")
                score++;
                teste = "You: " + score + " | Opponent: " + scoreOp;
            } else {
            }
            if (playerSelection == "scissor" && randomChoise == "rock") {
                console.log("You lost! Rock beats scissor!")
                scoreOp++;
                teste = "You: " + score + " | Opponent: " + scoreOp;
            } else {
            }
            if (playerSelection == "scissor" && randomChoise == "paper") {
                console.log("You won! Scissor beats paper!")
                score++;
                teste = "You: " + score + " | Opponent: " + scoreOp;
                return teste;
            } else {
            }
        }

        const scoreAll = document.querySelector('#score');
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = teste;
        scoreAll.appendChild(content);

/*
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
*/