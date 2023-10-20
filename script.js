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
const bottomMessage = document.createElement('p');

document.querySelector('#rock').disabled = true;
document.querySelector('#paper').disabled = true;
document.querySelector('#scissor').disabled = true;

/// Start Button

const startDiv = document.createElement('startDiv');
startDiv.classList.add('div');
scoreAll.appendChild(startDiv);
startDiv.setAttribute('style', 'border: 2px solid black; display: flex; height: 100%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

const startButton = document.createElement('button');
startButton.classList.add('startButton');
startButton.textContent = 'Start!';
startDiv.appendChild(startButton);
startButton.setAttribute('style', 'background-color: white; padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

startButton.addEventListener('mouseover', () => {
startButton.setAttribute('style', 'background-color: rgb(189, 186, 186); padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');
});

startButton.addEventListener('mouseout', () => {
    startButton.setAttribute('style', 'background-color: white; padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer;align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');
});

startButton.addEventListener('click', () => {
    startDiv.remove();
    startButton.remove();
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissor').disabled = false;

    buttonChoices();
    renderScore();

    
    upperDiv.classList.add('div');
    scoreAll.appendChild(upperDiv);
    upperDiv.setAttribute('style', 'display: flex; height: 33%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

    
    middleDiv.classList.add('div');
    scoreAll.appendChild(middleDiv);
    middleDiv.setAttribute('style','display: flex; justify-content: center; height: 31%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

    
    bottomDiv.classList.add('div');
    scoreAll.appendChild(bottomDiv);
    bottomDiv.setAttribute('style', 'display: flex; height: 33%; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;');

    upperMessage.classList.add('upperMessage');
    upperDiv.appendChild(upperMessage);
    upperMessage.textContent = 'aoba';
    upperMessage.setAttribute('style','color: white;')

    bottomMessage.classList.add('bottomMessage');
    bottomDiv.appendChild(bottomMessage);
    bottomMessage.setAttribute('style','color: white;')

    scoreYou.classList.add('scoreYou');
    scoreYou.textContent = 'You: ' + scorePlayer;
    middleDiv.appendChild(scoreYou);
    scoreYou.setAttribute('style', 'color: white;');

    scoreOp.classList.add('scoreOp');
    scoreOp.textContent = 'Opponent: ' + scoreOpponent;
    middleDiv.appendChild(scoreOp);
    scoreOp.setAttribute('style', 'color: orange;');
});

/// Ui Score

function renderScore(){
}

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
        bottomMessage.textContent = 'Tie';
        winner = "both";
        scoreteste();
    }
    if ((playerSelection == "rock" && randomChoise == "scissor") ||
        (playerSelection == "paper" && randomChoise == "rock") ||
        (playerSelection == "scissor" && randomChoise == "paper")) {
        bottomMessage.textContent = 'Player choose ' + playerSelection + ' and win this round!';
        winner = "player";
        scoreteste();
    }
    if ((playerSelection == "rock" && randomChoise == "paper") ||
        (playerSelection == "paper" && randomChoise == "scissor") ||
        (playerSelection == "scissor" && randomChoise == "rock")) {
        bottomMessage.textContent = 'Player choose ' + playerSelection + ' and lose this round!';
        winner = "bot";
        scoreteste();
    }
}

/// Function to get the opponent option

function getComputerChoice() {
    let random = Math.floor(Math.random() * myArray.length);
    randomChoise = myArray[random];
    console.log("Your opponent played: " + randomChoise);
    return randomChoise;
}

/// Function that increase scoreboard

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

/// Scoreboard Function

function scoreBoard() {
    scoreYou.classList.add('scoreYou');
    scoreYou.textContent = 'You: ' + scorePlayer;
    middleDiv.appendChild(scoreYou);
    scoreYou.setAttribute('style', 'color: white;');    

    scoreOp.classList.add('scoreOp');
    scoreOp.textContent = 'Opponent: ' + scoreOpponent;
    middleDiv.appendChild(scoreOp);
    scoreOp.setAttribute('style', 'color: orange;');

    if(scoreOpponent == 5){
        bottomMessage.textContent = 'You Lost!'
        playAgain();
        scoreOpponent = 0;
        scorePlayer = 0;
    }

    if (scorePlayer == 5) {
        bottomMessage.textContent = 'You Won!'
        playAgain();        
        scoreOpponent = 0;
        scorePlayer = 0;
    }
}

/// Reset Function

function playAgain() {
    scoreYou.remove();
    scoreOp.remove();
    const resetButton = document.createElement('button');
    resetButton.classList.add('resetButton');
    resetButton.textContent = 'Play again!';
    middleDiv.appendChild(resetButton);
    resetButton.setAttribute('style', 'background-color: white; padding:20px; padding-left: 30px; padding-right: 30px; border-radius: 15px;font-size: 20px; cursor: pointer; align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-around;'); 

    resetButton.addEventListener('click', () => {
        
        scoreOpponent = 0;
        scorePlayer = 0;
        scoreYou.classList.add('scoreYou');
        scoreYou.textContent = 'You: ' + scorePlayer;
        middleDiv.appendChild(scoreYou);
        scoreYou.setAttribute('style', 'color: white;');
    
        scoreOp.classList.add('scoreOp');
        scoreOp.textContent = 'Opponent: ' + scoreOpponent;
        middleDiv.appendChild(scoreOp);
        scoreOp.setAttribute('style', 'color: orange;');

        resetButton.remove();
        buttonChoices();
    });
}









