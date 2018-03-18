//Imports (pre js6) object Word from word.js
var Word = require('./word');

function Letter(letter) {
    this.letter = letter;
}

Letter.prototype.convertWordtoCharArary = function (word) {
    // console.log("String test of Letter function guessIntoWord() " + word);

    var charWordArray = word.split('');
    console.log(charWordArray);

    return charWordArray;

};

module.exports = Letter;