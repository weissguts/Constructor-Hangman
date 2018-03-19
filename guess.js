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

// //Method to test if user guess from prompt is in the Char Array.
// Letter.prototype.guessLetter = function (wordArray, guessLetter) {
//     // for (var i = 0; i < 5; i++) {
//     //     if (wordArray.letter.includes(guessLetter.toLowerCase()) === true) {
//     //         console.log("Working");
//     //         i++;
//     //     } else if (wordArray.letter.includes(guessLetter.toLowerCase()) === false) {
//     //         console.log("Guess again");
//     //         i++;
//     //     }
//     // }
// };

module.exports = Letter;