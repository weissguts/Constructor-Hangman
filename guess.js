//Imports (pre js6) object Word from word.js
var Word = require('./word');

function Letter(letter) {
    this.letter = letter;
}

Letter.prototype.guessIntoWord = function (word) {
    // word.split('');
    // console.log(word + " Char Test");
    return word;
};

module.exports = Letter;