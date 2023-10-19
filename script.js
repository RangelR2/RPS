    let scorePlayer = 0;
    let scoreOpponent = 0;
    let winner;
    let playerSelection;
    const myArray = ["rock", "paper", "scissor"];
    const scoreAll = document.querySelector('#scoreAll');
    const scoreYou = document.createElement('h1');
    const scoreOp = document .createElement('h1');

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
            winner = "both";
            scoreteste();
        }
        if ((playerSelection == "rock" && randomChoise == "scissor") ||
            (playerSelection == "paper" && randomChoise == "rock") ||
            (playerSelection == "scissor" && randomChoise == "paper")) {
            winner = "player";
            scoreteste();
        }
        if ((playerSelection == "rock" && randomChoise == "paper") ||
            (playerSelection == "paper" && randomChoise == "scissor") ||
            (playerSelection == "scissor" && randomChoise == "rock")) {
            winner = "bot";
            scoreteste();
        }
    }

    function scoreBoard() {
        scoreOp.classList.add('scoreOp');
        scoreOp.textContent = 'Opponent: ' + scoreOpponent;
        scoreAll.appendChild(scoreOp);
        scoreOp.setAttribute('style', 'color: green;');

        scoreYou.classList.add('scoreYou');
        scoreYou.textContent = 'You: ' + scorePlayer;
        scoreAll.appendChild(scoreYou);
        scoreYou.setAttribute('style', 'color: white;');
    }

    function scoreteste() {
        if (winner == "both") {
            scoreOpponent++;
            scorePlayer++;
            console.log("Bot: " + scoreOpponent);
            console.log("Player: " + scorePlayer);
            scoreBoard()
        }
        if (winner == "player") {
            scorePlayer++;
            console.log("Bot: " + scoreOpponent);
            console.log("Player: " + scorePlayer);
            scoreBoard()
            return scorePlayer;
        }
        if (winner == "bot") {
            scoreOpponent++;
            console.log("Bot: " + scoreOpponent);
            console.log("Player: " + scorePlayer);
            scoreBoard()
            return scoreOpponent;
        }
    }

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