"use strict";

//Rock, paper, scissor game
//Computer's choices listed in the array
const rockPaperScissor = [`Rock`, `Paper`, `Scissor`];

//computerPlay counts the numbers in the array and randomizes that number
function computerPlay() {
  let randomizer = Math.floor(Math.random() * rockPaperScissor.length);
  //the randomizer will give rockPaperScissor a random position, thus giving a random selection in rockPaperScissor
  return rockPaperScissor[randomizer];
}

//Logic with the input of the Player's choice and comparing it with the computers choice.
function playerRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "Scissor") {
        return "You win! Rock beats scissors";
      }
      if (computerSelection === "Paper") {
        return "You loss! Paper beats rock";
      } else {
        return "it's a draw!";
      }
    case "paper":
      if (computerSelection === "Rock") {
        return "You won! Paper beats rock";
      }
      if (computerSelection === "Scissor") {
        return "You lose! Scissor beats paper";
      } else {
        return "it's a draw!";
      }
    case "scissor":
      if (computerSelection === "Paper") {
        return "You win! Scissor beats paper";
      }
      if (computerSelection === "Rock") {
        return "You loss! Rock beats scissor";
      } else {
        return "it's a draw!";
      }
  }
}

//Loop to play game 5 times
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(`choose between rock paper scissors`);
    const computerSelection = computerPlay();
    console.log(
      `Computer chose: ${computerSelection} and you chose: ${playerSelection}`
    );
    console.log(playerRound(playerSelection, computerSelection));
  }
}

//Invoke game function
game();
