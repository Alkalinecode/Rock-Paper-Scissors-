// rock paper scissors
const playerScoreElement = document.querySelector(".score-card.player span");
const aiScoreElement = document.querySelector(".score-card.ai span");

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const gameMessage = document.querySelector(".results");

const playerMoveResult = document.querySelector(".player-move h3");
const vsResult = document.querySelector(".vs");
const aiMoveResult = document.querySelector(".ai-move h3");

const roundsElement = document.querySelector(".rounds .round-number");
const roundsSelect = document.querySelector("#rounds");

const resetButton = document.querySelector(".reset");

let playerScore = 0;
let aiScore = 0;
let rounds = 0;

function updateScores() {
  playerScoreElement.textContent = playerScore;
  aiScoreElement.textContent = aiScore;
  roundsElement.textContent = rounds;
}

function resetGame() {
  rounds = 0;
  playerScore = 0;
  aiScore = 0;
  updateScores();
  roundsElement.textContent = rounds;
  playerMoveResult.textContent = "?";
  vsResult.textContent = "V.S";
  aiMoveResult.textContent = "?";
  gameMessage.textContent = "";
  updateScores();
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function playGame(playerMove, aiMove) {
  const selectedRounds = parseInt(roundsSelect.value);

  console.log("how many Rounds");

  playerMoveResult.textContent = playerMove;
  vsResult.textContent = "V.S";
  aiMoveResult.textContent = aiMove;

  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;

  setTimeout(() => {
    if (rounds < selectedRounds) {
      if (playerMove === "Rock" && aiMove === "Scissors") {
        playerMoveResult.textContent = "";
        aiMoveResult.textContent = "";
        vsResult.textContent = "You won this round!";
        playerScore++;
      } else if (playerMove === "Scissors" && aiMove === "Paper") {
        playerMoveResult.textContent = "";
        aiMoveResult.textContent = "";
        vsResult.textContent = "You won this round!";
        playerScore++;
      } else if (playerMove === "Paper" && aiMove === "Rock") {
        playerMoveResult.textContent = "";
        aiMoveResult.textContent = "";
        vsResult.textContent = "You won this round!";
        playerScore++;
      } else if (playerMove === aiMove) {
        playerMoveResult.textContent = "";
        aiMoveResult.textContent = "";
        vsResult.textContent = "You tied with the AI!";
      } else {
        playerMoveResult.textContent = "";
        aiMoveResult.textContent = "";
        vsResult.textContent = "AI won this round!";
        aiScore++;
      }
      rounds++;
      updateScores();

      if (rounds >= selectedRounds) {
        stopGame();
      } else {
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
      }
    }
  }, 2000);
}

function stopGame() {
  setTimeout(() => {
    vsResult.textContent = "Game over!";
  }, 2000);
  setTimeout(() => {
    if (playerScore > aiScore) {
      playerMoveResult.textContent = "";
      aiMoveResult.textContent = "";
      vsResult.textContent = "PLAYER WON THE GAME!";
    } else if (playerScore === aiScore) {
      playerMoveResult.textContent = "";
      aiMoveResult.textContent = "";
      vsResult.textContent = "TIE GAME!";
    } else {
      playerMoveResult.textContent = "";
      aiMoveResult.textContent = "";
      vsResult.textContent = "AI WON THE GAME!";
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }, 3000);
}

rockButton.addEventListener("click", () => {
  playGame("Rock", aiMove());
});

paperButton.addEventListener("click", () => {
  playGame("Paper", aiMove());
});

scissorsButton.addEventListener("click", () => {
  playGame("Scissors", aiMove());
});

resetButton.addEventListener("click", resetGame);
roundsSelect.addEventListener("change", resetGame);

function aiMove() {
  let moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random() * 3)];
}

updateScores();
