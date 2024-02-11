function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

function playRound(playerChoice, computerChoice)
{
    let playerHand = playerChoice.toLowerCase()

    //check victory
    if(
        (playerHand === "rock" && computerChoice === "scissors") || 
        (playerHand === "scissors" && computerChoice === "paper") || 
        (playerHand === "paper" && computerChoice === "rock")
        )
    {
        return "You chose : "+playerHand+ " and computer chose "+computerChoice+"\nCongratulations! You win!"
    }
    
    //check tie
    else if(playerHand === computerChoice)
        return "You chose : "+playerHand+ " and computer chose "+computerChoice+"\nIt's a tie"

    //else computer wins
    else 
        return "You chose : "+playerHand+ " and computer chose "+computerChoice+"\nComputer win!"

}

function playGame() 
{
    let playerPoints = 0
    let computerPoints = 0
    let winner
    for(let i=1;i<=5;i++)
    {
        let playerChoice = prompt("Enter your choice (rock/paper/scissors):")
        let round = playRound(playerChoice, getComputerChoice())
        console.log(round)
        let lines = round.split("\n")
        let lastLine = lines[lines.length -1]
        if(lastLine === "Congratulations! You win!")
            playerPoints++
        else if(lastLine === "Computer win!")
            computerPoints++
    }
    if(playerPoints>computerPoints)
        winner = "Player"
    else
        winner = "Computer"
    console.log("playerPoints : " + playerPoints+ "\ncomputerPoints : "+computerPoints+"\nThe winner is : "+winner);
}

// let answer = prompt("Choose between rock, paper or scissors")
// let result = playRound(answer,getComputerChoice())
let game = playGame(5)

// console.log(result)