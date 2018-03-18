function Word(word) {
    this.word = word;
}

Word.prototype.getWord = function () {
    var randomWord = "";
    var possible = ["javascript", "java", "python", "ruby", "go"];

    //Grabs random word from possible Array and returns that value.
    randomWord = possible[Math.floor(Math.random() * possible.length)];
    return randomWord;
};

module.exports = Word;


