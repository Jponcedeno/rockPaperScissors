"use strict";

const rockPaperScissor = [`Rock`, `Paper`, `Scissor`];

function computerPlay() {
  let randomizer = Math.floor(Math.random() * rockPaperScissor.length);

  return rockPaperScissor[randomizer];
}

const computerSelection = computerPlay();

function captalizeFirstLetter() {
  return;
}

function playerRound(playerSelection, computerSelection) {
  if (computerSelection === "Rock" && playerSelection === "Paper") {
  }
}
