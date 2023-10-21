let scorePlayer = 0;
let scoreOpponent = 0;
let winner;
const myArray = ["rock", "paper", "scissor"];
const scoreAll = document.querySelector('#scoreAll');
const scoreYou = document.createElement('h1');
const scoreOp = document.createElement('h1');

const upperDiv = document.createElement('upperDiv');
const middleDiv = document.createElement('middleDiv');
const bottomDiv = document.createElement('bottomDiv');

const upperMessage = document.createElement('p');
const upperMessage2 = document.createElement('p');
const bottomMessage = document.createElement('p');

document.querySelector('#rock').disabled = true;
document.querySelector('#paper').disabled = true;
document.querySelector('#scissor').disabled = true;

/// Start Button

const startDiv = document.createElement('startDiv');
startDiv.classList.add('div');
scoreAll.appendChild(startDiv);
startDiv.setAttribute('style', 'font-family: "Roboto", sans-serif; border: 2px solid black; display: flex; height: 100%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

const startButton = document.createElement('button');
startButton.classList.add('startButton');
startButton.textContent = 'Start!';
startDiv.appendChild(startButton);
startButton.setAttribute('style', 'font-family: "Roboto", sans-serif; background-color: white; padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

startButton.addEventListener('mouseover', () => {
    startButton.setAttribute('style', 'font-family: "Roboto", sans-serif; background-color: rgb(189, 186, 186); padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');
});

startButton.addEventListener('mouseout', () => {
    startButton.setAttribute('style', 'font-family: "Roboto", sans-serif; background-color: white; padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer;align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');
});

startButton.addEventListener('click', () => {

    bottomMessage.textContent = 'First to score 5 point win!';
    startDiv.remove();
    startButton.remove();
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissor').disabled = false;

    upperDiv.classList.add('div');
    scoreAll.appendChild(upperDiv);
    upperDiv.setAttribute('style', 'display: flex; height: 33%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

    middleDiv.classList.add('div');
    scoreAll.appendChild(middleDiv);
    middleDiv.setAttribute('style', 'display: flex; justify-content: center; height: 31%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

    bottomDiv.classList.add('div');
    scoreAll.appendChild(bottomDiv);
    bottomDiv.setAttribute('style', 'display: flex; height: 33%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

    upperMessage.classList.add('upperMessage');
    upperDiv.appendChild(upperMessage);
    upperMessage.setAttribute('style', 'font-family: "Roboto", sans-serif; font-size: 20px; color: white;');

    bottomMessage.classList.add('bottomMessage');
    bottomDiv.appendChild(bottomMessage);
    bottomMessage.setAttribute('style', 'font-family: "Roboto", sans-serif; font-size: 20px; color: white;')

    scoreYou.classList.add('scoreYou');
    scoreYou.textContent = 'You: ' + scorePlayer;
    middleDiv.appendChild(scoreYou);
    scoreYou.setAttribute('style', 'font-family: "Roboto", sans-serif; color: white;');

    scoreOp.classList.add('scoreOp');
    scoreOp.textContent = 'Opponent: ' + scoreOpponent;
    middleDiv.appendChild(scoreOp);
    scoreOp.setAttribute('style', 'font-family: "Roboto", sans-serif; color: orange;');

    buttonChoices();
});

/// Choice Buttons

function buttonChoices() {
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
}

/// Function that play the round

function playRound() {
    getComputerChoice();
    if (playerSelection == randomChoise) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        randomChoise = randomChoise.charAt(0).toUpperCase() + randomChoise.slice(1);
        bottomMessage.textContent = "It's a draw! No one earn points!";
        winner = "both";
        scoreteste();
    }
    if ((playerSelection == "rock" && randomChoise == "scissor") ||
        (playerSelection == "paper" && randomChoise == "rock") ||
        (playerSelection == "scissor" && randomChoise == "paper")) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        randomChoise = randomChoise.charAt(0).toUpperCase() + randomChoise.slice(1);
        bottomMessage.textContent = playerSelection + ' beats ' + randomChoise + '!';
        winner = "player";
        scoreteste();
    }
    if ((playerSelection == "rock" && randomChoise == "paper") ||
        (playerSelection == "paper" && randomChoise == "scissor") ||
        (playerSelection == "scissor" && randomChoise == "rock")) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        randomChoise = randomChoise.charAt(0).toUpperCase() + randomChoise.slice(1);
        bottomMessage.textContent = playerSelection + ' is beaten by ' + randomChoise + '!';
        winner = "bot";
        scoreteste();
    }
}

/// Function to get the opponent option

function getComputerChoice() {
    let random = Math.floor(Math.random() * myArray.length);
    randomChoise = myArray[random];
    return randomChoise;
}

/// Function that increase scoreboard

function scoreteste() {
    if (winner == "both") {
        scoreBoard()
    }
    if (winner == "player") {
        scorePlayer++;
        scoreBoard()
    }
    if (winner == "bot") {
        scoreOpponent++;
        scoreBoard()
    }
}

/// Scoreboard Function

function scoreBoard() {
    scoreYou.classList.add('scoreYou');
    scoreYou.textContent = 'You: ' + scorePlayer;
    middleDiv.appendChild(scoreYou);
    scoreYou.setAttribute('style', 'font-family: "Roboto", sans-serif; color: white;');

    scoreOp.classList.add('scoreOp');
    scoreOp.textContent = 'Opponent: ' + scoreOpponent;
    middleDiv.appendChild(scoreOp);
    scoreOp.setAttribute('style', 'font-family: "Roboto", sans-serif; color: orange;');

    if (scoreOpponent === 5) {
        bottomMessage.textContent = 'You Lost!'
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissor').disabled = true;
        playAgain();
    }

    if (scorePlayer === 5) {
        bottomMessage.textContent = 'You Won!'
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissor').disabled = true;
        playAgain();
    }

    if (scorePlayer === 5 && scoreOpponent === 5) {
        bottomMessage.textContent = 'Tie!';
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissor').disabled = true;
        playAgain();
    }
}

/// Reset Function

function playAgain() {
    upperMessage.textContent = 'Final Score: ' + scorePlayer + ' x ' + scoreOpponent;
    scoreYou.remove();
    scoreOp.remove();
    const resetButton = document.createElement('button');
    resetButton.classList.add('resetButton');
    resetButton.textContent = 'Play again!';
    middleDiv.appendChild(resetButton);
    resetButton.setAttribute('style', 'font-family: "Roboto", sans-serif; background-color: white; padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

    resetButton.addEventListener('mouseover', () => {
        resetButton.setAttribute('style', 'font-family: "Roboto", sans-serif; background-color: rgb(189, 186, 186); padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');
    });

    resetButton.addEventListener('mouseout', () => {
        resetButton.setAttribute('style', 'font-family: "Roboto", sans-serif; background-color: white; padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer;align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');
    });

    resetButton.addEventListener('click', () => {
        upperMessage.textContent = '';
        document.querySelector('#rock').disabled = false;
        document.querySelector('#paper').disabled = false;
        document.querySelector('#scissor').disabled = false;
        scoreOpponent = 0;
        scorePlayer = 0;
        playerSelection = "";
        randomChoise = "";
        bottomMessage.textContent = 'First to score 5 point win!';
        scoreYou.classList.add('scoreYou');
        scoreYou.textContent = `You: ${scorePlayer}`;
        middleDiv.appendChild(scoreYou);
        scoreYou.setAttribute('style', 'font-family: "Roboto", sans-serif; color: white;')
        scoreOp.classList.add('scoreOp');
        scoreOp.textContent = `Opponent: ${scoreOpponent}`
        middleDiv.appendChild(scoreOp);
        scoreOp.setAttribute('style', 'font-family: "Roboto", sans-serif; color: orange;');
        resetButton.remove();
    });
}