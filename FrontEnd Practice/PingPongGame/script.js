const button1 = document.querySelector("#game-controls-p1");
const button2 = document.querySelector("#game-controls-p2");
const resetButton = document.querySelector("#game-controls-reset");
const noOfPlays = document.querySelector("#game-scorekeeper-plays-number");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

console.log(noOfPlays.value);

let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let gameOver = false;

const reset = () => {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  button1.classList.remove("disabled");
  button2.classList.remove("disabled");
  button1.disabled = false;
  button2.disabled = false;
  gameOver = false;
};

button1.addEventListener("click", () => {
  if (!gameOver) {
    p1Score += 1;
    p1Display.textContent = p1Score;
    if (p1Score >= winningScore) {
      gameOver = true;
      button1.disabled = true;
      button1.classList.add("disabled");
      alert("Player 1 wins!!!");
      reset();
    }
  }
});

button2.addEventListener("click", () => {
  if (!gameOver) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    if (p2Score >= winningScore) {
      gameOver = true;
      button2.disabled = true;
      button2.classList.add("disabled");
      alert("Player 2 wins!!!");
      reset();
    }
  }
});

resetButton.addEventListener("click", () => {
  reset();
});

noOfPlays.addEventListener("change", () => {
  winningScore = parseInt(noOfPlays.value);
  reset();
});
