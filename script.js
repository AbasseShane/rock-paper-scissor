function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

function play(playerChoice, computerChoice)
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

let answer = prompt("Choose between rock, paper or scissors")
let result = play(answer,getComputerChoice())
console.log(result)