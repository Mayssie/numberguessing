'use strict';  

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to display messages
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

// Check button logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
    if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } 
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Guess is wrong
  } 
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } 
     else {
      displayMessage('💥GAME OVER!');
      document.querySelector('.score').textContent = 0;

  // 🔴 Game over effects
      document.body.style.backgroundColor = 'red';
       document.querySelector('.number').textContent = secretNumber;
      }
   
  }
});

// Again button logic
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});





      