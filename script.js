'use  strict';

// Defining Secret Number
// Secret Number will be randomly generized and when it does it will not exceed 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initial Score start off at 20
let score = 20;
// Display secret number for testing purposes
// document.querySelector('.number').textContent = secretNumber;

// input in input box is converted into a number then checked and logged it to the console
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if input box has nothing in it, check if anything is there then display message
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number Inputed!';

    /*------------------------------------------------------*/
    // Implementation Of Game Logic
    /*------------------------------------------------------*/
    // Compare Secret Number with Number Inputted
    // Logic when player guess right (wins)
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // If the guess and secret number are the same the user wins the game
    // Display the secret number when player wins
    document.querySelector('.number').textContent = secretNumber;

    // Color of background will change
    document.querySelector('body').style.backgroundColor = 'goldenrod';

    // Width of number increases when correct
    document.querySelector('.number').style.width = '20rem';

    // Will check if guess if greater than the secret number
  } else if (guess > secretNumber) {
    // Logic for game winning condition
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Guess is Too High!';

      // Decrease score by 1 if score is guessed wrong
      score = score - 1;

      // Display current score
      document.querySelector('.score').textContent = score;
    } else {
      // Losing condition when your score goes below 1
      document.querySelector('.message').textContent = '😥 You lose!';
      document.querySelector('.score').textContent = 0;
    }

    // Will check if guess is lower than the secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Guess is Too Low!';

      // Decrease score by 1 if score is guessed wrong
      score = score - 1;

      // Display current score
      document.querySelector('.score').textContent = score;
    } else {
      // Losing condition when your score goes below 1
      document.querySelector('.message').textContent = '😥 You lose!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

  // Again button functionality
  // Make Secret Number 20
  // Assign Secret Number to a random Number between 1 and 20
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;


  }
