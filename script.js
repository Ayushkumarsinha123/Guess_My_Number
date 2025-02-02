'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.messsage').textContent = message;
}


document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input 
if (!guess) {
  // document.querySelector('.message').textContent = 'no number!';
  displayMessage('no number!');
  // when player wins
}else if(guess === secretNumber ) {
  document.querySelector('.message').textContent = 'correct number!!';

  document.querySelector('.number').textContent = secretNumber;

  document.querySelector('body').style.backgroundColor = '#60b347';

  document.querySelector('.number').style.width = '30rem';

  if (score > highscore) {
     highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  // when guess is wrong 
 } else if (guess !== secretNumber) {
    if(score > 1) {
      // document.querySelector('.message').textContent = 
      // guess > secretNumber ? 'too high!' : 'too low!';
      displayMessage(      guess > secretNumber ? 'too high!' : 'too low!'
      )
      score--;
      document.querySelector('.score').textContent = score;
} else{
  // document.querySelector('.message').textContent = 'you lost the game!';
  displayMessage('you lost the game!')
  document.querySelector('.score').textContent = 0;
}

    }
  




//   // when guess is too high
// }else if(guess > secretNumber) {  
//   if(score > 1) {
//     document.querySelector('.message').textContent = 'too high';
//   score--;          
//   document.querySelector('.score').textContent = score;
// } else{
//   document.querySelector('.message').textContent = 'you lost the game!';
// }
//   // when guess is too low
// }else if(guess < secretNumber) {
//   if(score > 1) {
//     document.querySelector('.message').textContent = 'too low';
//   score--;
//   document.querySelector('.score').textContent = score;
// } else{
//   document.querySelector('.message').textContent = 'you lost the game!';
// }
 


});


document.querySelector('.again').addEventListener('click',function()
{
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 width';
}  
);




