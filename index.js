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
console.log(letterArray.letter);

var testLetter = 'a';
hangmanLetter.guessLetter(letterArray, testLetter);



// console.log(JSON.stringify(generateWord) + " || " + generateWord.word);

