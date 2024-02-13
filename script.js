let playerPoints = 0;
let computerPoints = 0;
let currentRound = 1;
let selectedButtonId;
let gameOver = false;

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

function playRound()
{
    if(gameOver)
        return

    const playerChoiceText = document.querySelector('.player-choice');
    const computerChoiceText = document.querySelector('.computer-choice');
    
    const roundResult = document.querySelector('.result');
    
    const playerScore = document.querySelector('#player-points');
    const computerScore = document.querySelector('#computer-points');

    const compChoice = getComputerChoice();    

    playerChoiceText.textContent = `You chose ${selectedButtonId}`;
    computerChoiceText.textContent = `Computer chose ${compChoice}`;

    roundResult.textContent = checkVictory(selectedButtonId, compChoice);
    let roundWinner = roundResult.textContent;

    if(roundWinner === "Congratulations! You win!")
        playerPoints++;
    else if(roundWinner === "Computer wins!")
        computerPoints++;
    
    //update the points
    playerScore.textContent = `Player Points: ${playerPoints}`;
    computerScore.textContent = `Computer Points: ${computerPoints}`;   
    
    if(playerPoints>=5 || computerPoints>=5) 
    {
        gameOver = true;
        resetGame();
        return;
    }

    currentRound++           
    
}   

function handleButtonClick() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(otherButtons => otherButtons.classList.remove('selected'))

    this.classList.add('selected')
    selectedButtonId = this.id;
}


function checkVictory(playerChoice, computerChoice)
{
    console.log("player choice in check victory: "+playerChoice)
    //check victory
    if(
        (playerChoice === "rock" && computerChoice === "scissors") || 
        (playerChoice === "scissors" && computerChoice === "paper") || 
        (playerChoice === "paper" && computerChoice === "rock")
        )
        return "Congratulations! You win!"
    
    //check tie
    else if(playerChoice === computerChoice) return "It's a tie"

    //else computer wins
    else return "Computer wins!"
}

function playGame() 
{
    console.log("Round "+currentRound);
    
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick) 
        button.addEventListener('click', handleButtonClick)
    })
    

    const start = document.querySelector('#play');
    start.addEventListener( 'click', function(){
        if(selectedButtonId)
            playRound()
        else(alert("Please select an option"))
    })

}

function resetGame() 
{
    let playerPoints = 0;
    let computerPoints = 0;
    let currentRound = 1;
    let selectedButtonId = null;
    let gameOver = false;

    const playerChoice = document.querySelector('.player-choice')
    playerChoice.textContent="" ;
    const computerChoice = document.querySelector('.computer-choice')
    computerChoice.textContent="" ;
    const playerScore = document.querySelector('#player-points')
    playerScore.textContent= "Player score: ";
    const computerScore = document.querySelector('#computer-points')
    computerScore.textContent="Computer Score: "
    const result = document.querySelector('.result')
    result.textContent ="Start the game";
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame)

playGame();
