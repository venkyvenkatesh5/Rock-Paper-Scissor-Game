const choices = ['rock', 'paper', 'scissors'];
const userScoreElement = document.getElementById('user-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');
let userScore = 0;
let computerScore = 0;

document.querySelectorAll('.choices button').forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    determineWinner(userChoice, computerChoice);
  });
});

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    resultElement.textContent = `It's a draw! You both chose ${userChoice}.`;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    userScore++;
    userScoreElement.textContent = userScore;
    resultElement.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    computerScoreElement.textContent = computerScore;
    resultElement.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
  }
}
