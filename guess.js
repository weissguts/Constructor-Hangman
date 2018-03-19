//Imports (pre js6) object Word from word.js
var Word = require('./word');

function Letter(letter) {
    this.letter = letter;
}

Letter.prototype.convertWordtoCharArray = function (word) {
    // console.log("String test of Letter function guessIntoWord() " + word);
    var charWordArray = word.split('');

    return charWordArray;
};

Letter.prototype.guessLetter = function (wordArray, guessLetter) {
    if (wordArray.letter.includes(guessLetter)) {
        console.log("Working");
    } else {
        console.log("Guess again");
    }
};

module.exports = Letter;