function Word(word) {
    this.word = word;
}

Word.prototype.getWord = function () {
    var word = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        word += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(word);

    return word;
};

module.exports = Word;


