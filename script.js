

var maxNum = 100;
var minNum = 1;
var resetButton = document.querySelector('#resetButton');
var guessButton = document.querySelector('#guessButton');
var userInput = document.querySelector('#userInput');
var lastGuess = document.querySelector('#lastGuess');
var clearButton = document.querySelector('#clearButton');
var randomNumber = Math.floor(Math.random() * maxNum + 1);
var higherOrLower = document.querySelector('#higherOrLower');
var higherThanZero = "You must guess a number higher than zero.";
var userMaxInput = document.querySelector('#userMax');
var maxMinSubmit = document.querySelector('#minMaxSubmit');

function disableButton(){
  
  if (userInput.value === "" || userInput.value > maxNum || userInput.value < minNum) {
    guessButton.setAttribute('disabled','disabled');
    clearButton.setAttribute('disabled','disabled');
    resetButton.setAttribute('disabled','disabled');  
  }
  else {
    guessButton.removeAttribute('disabled');
    clearButton.removeAttribute('disabled');
    resetButton.removeAttribute('disabled');
  }
};

guessButton.addEventListener('click',
  function() {
    lastGuess.innerText = userInput.value;
    var userGuess = parseInt(userInput.value);
    troubleShoot(userGuess);


  });

userInput.addEventListener('keyup',
  disableButton
  );


clearButton.addEventListener('click',
  function() {
  userInput.value = ("");
  });

resetButton.addEventListener('click',
  function() {
    randomNumber = Math.floor(Math.random() * maxNum + 1);
    userInput.value = ("");
    lastGuess.innerText = userInput.value;
    higherOrLower.innerText = '';
});

function troubleShoot(userInput) {
  
  if (userInput < minNum || userInput > maxNum) {
    higherOrLower.innerText = 'your number is out of range';
  }
  else if (userInput < randomNumber) {
    higherOrLower.innerText = 'Your guess is lower than the number';
    }
  else if (userInput > randomNumber) {
    higherOrLower.innerText = 'Your guess is higher than the number.';
  }
  else {
    higherOrLower.innerText = 'BOOM!';
  }

  }






