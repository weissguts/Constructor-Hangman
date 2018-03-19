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


//Grab user input then send input to Letter object methods to test if guess is correct or not. 'Guess' can be lower case.
//Used upper case of 'Guess' to make it easier to read in the console.

prompt.start();
prompt.message = console.log('Enter your guess (one letter at a time). You have 5 guesses. Good luck!');

function hangManMain() {
    //Start prompt npm package
    prompt.get(['guess'], function (err, result) {
        testLetter += result.guess;
        console.log('You guessed ' + [result.guess]);

        if (testLetter == hangmanWord) {
            console.log("Congrats, you win!");

        } else {
            if (letterArray.letter.includes(testLetter.toLowerCase()) === true) {
                console.log("Working");
                console.log(testLetter);
                hangManMain();


            } else if (letterArray.letter.includes(testLetter.toLowerCase()) === false) {
                console.log("Guess again");
                console.log(testLetter);
                hangManMain();
            };
        };

    });

};

hangManMain();








