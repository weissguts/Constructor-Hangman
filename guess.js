//Imports (pre js6) object Word from word.js
var Word = require('./word');

function Letter(letter) {
    this.letter = letter;
}

//Method to convert string to a Char Array
Letter.prototype.convertWordtoCharArray = function (word) {
    // console.log("String test of Letter function guessIntoWord() " + word);
    var charWordArray = word.split('');

    return charWordArray;
};


module.exports = Letter;