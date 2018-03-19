var prompt = require('prompt');
//Imports (pre js6) object Word from word.js
var Word = require('./word');
//Imports (pre js6) object Word from word.js
var Letter = require('./guess');

//Create new object in main file "hangman"
var hangman = new Word();
var generateWord = {"word": hangman.getWord()}; //generates guess from getword() function.


//Convert Object to string in variable 'hangmanWard'
var hangmanWord = generateWord.word;
console.log(hangmanWord);




var hangmanLetter = new Letter();
var letterArray = {"letter": hangmanLetter.convertWordtoCharArray(hangmanWord)};
var testLetter = '';
console.log(letterArray.letter);


//Start prompt npm package
prompt.start();
prompt.message = console.log('Enter your guess (one letter at a time) _ ');

//Grab user input then send input to Letter object methods to test if guess is correct or not.
prompt.get(['Guess'], function (err, result) {
    console.log('You guessed ' + "'" + result.Guess + "'");
    testLetter = result.Guess;

    hangmanLetter.guessLetter(letterArray, testLetter);
});



