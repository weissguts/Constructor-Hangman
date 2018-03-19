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
console.log(hangmanWord + " ---> " + "Visible for testing purposes. --> Word Object");


var hangmanLetter = new Letter();
var letterArray = {"letter": hangmanLetter.convertWordtoCharArray(hangmanWord)};
var testLetter = '';
console.log("[" + letterArray.letter + "] " + " ---> " + "Visible for testing purposes. --> Letter Array Object");



prompt.start();
prompt.message = console.log('\nEnter your guess (one letter at a time). You have 5 guesses. Good luck!');

/*hangManMain() -> Grab user input then send input to Letter object methods to test if guess is correct or not. 'Guess' c
an be lower case. Used upper case of 'Guess' to make it easier to read in the console.
Method currently has unlimited trys. If you enter a char or string in the correct sequnce you can keep going until
you win. If you get something out of sequence or wrong, you will have to start over.*/
function hangManMain() {
    prompt.start();
    //Start prompt npm package
    prompt.get(['guess'], function (err, result) {
        var resultGuess = result.guess;
        testLetter += resultGuess.toLowerCase();
        console.log('\nYou guess now says "' + testLetter + '"');

        if (testLetter === hangmanWord || result.guess === hangmanWord) {
            console.log("Congrats, you win!");
            process.exit();
        }
        if (hangmanWord.indexOf(testLetter.toLowerCase()) > -1) {
            console.log("Keep on going!\n");
            hangManMain();

        } else if (hangmanWord.indexOf(testLetter.toLowerCase()) < 0) {
            console.log("Sorry you lose. Start over!");
            testLetter = '';
            resultGuess = '';
            hangManMain();
        }
    });

};

hangManMain();








