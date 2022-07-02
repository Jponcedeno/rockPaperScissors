"use strict";

const rockPaperScissor = [`Rock`, `Paper`, `Scissor`];

function computerPlay() {
  let randomizer = Math.floor(Math.random() * rockPaperScissor.length);

  return rockPaperScissor[randomizer];
}

const computerSelection = computerPlay();
console.log(computerSelection);

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

console.log(playerRound("paper", computerSelection));
