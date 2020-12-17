'use  strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

// input in input box is converted into a number then checked and logged ot to the console
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if input box has nothing in it, check if anything is there then display message
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number Inputed!';
  }
});
