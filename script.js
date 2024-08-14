const gameBoard = document.querySelector('.game-board');
const cells = document.querySelectorAll('.cell');
const turnElement = document.getElementById('turn');
const winnerElement = document.getElementById('winner');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameOver = false;

// Function to handle cell click
function handleCellClick(event) {
  const cell = event.target;
  if (cell.textContent === '' && !gameOver) {
    cell.textContent = currentPlayer;
    checkForWin();
    switchPlayer();
  }
}

// Function to check for win
function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    if (
      cells[combination[0]].textContent === currentPlayer &&
      cells[combination[1]].textContent === currentPlayer &&
      cells[combination[2]].textContent === currentPlayer
    ) {
      gameOver = true;
      winnerElement.textContent = `Player ${currentPlayer} wins!`;
      break;
    }
  }
}

// Function to switch player
function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  turnElement.textContent = `Turn: ${currentPlayer}`;
}

// Function to reset game
function resetGame() {
  gameOver = false;
  currentPlayer = 'X';
  turnElement.textContent = `Turn: ${currentPlayer}`;
  winnerElement.textContent = '';
  cells.forEach(cell => cell.textContent = '');
}

// Add event listeners to cells
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Add event listener to reset button
resetButton.addEventListener('click', resetGame);