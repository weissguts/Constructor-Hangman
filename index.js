//Imports (pre js6) object Word from word.js
var Word = require('./word');
//Imports (pre js6) object Word from word.js
var Letter = require('./guess');

//Create new object in main file "hangman"
var hangman = new Word();
var generateWord = {"word": hangman.getWord()}; //generates guess from getword() function.
console.log(generateWord.word);
var hangmanWord = generateWord.word;




var hangmanLetter = new Letter();
var testLetter = {"letter": hangmanLetter.guessIntoWord(hangmanWord)};



// console.log(JSON.stringify(generateWord) + " || " + generateWord.word);

