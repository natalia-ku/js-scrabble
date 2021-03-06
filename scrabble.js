
var Scrabble = function() { };

TILES = {
  A: 1, E: 1, I: 1,O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

Scrabble.prototype.score = function(word) {
  var input = word.toUpperCase();
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    var score = this.TILES[input[i]];
    total += score;
  }
  if (input.length == 7) {
    total += 50;
  }
  return total;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var maxWords = this.findMax(arrayOfWords);
  if (maxWords.length > 1) {
    return tie(maxWords);
  }
  else{
    return maxWords[0];
  }
};

Scrabble.prototype.findMax = function(arrayOfWords){
  var max = 0;
  var maxWords = [];
  for (var i = 0; i < arrayOfWords.length; i++){
    score =this.score(arrayOfWords[i]);
    if (score == max){
      maxWords.push(arrayOfWords[i]);
    }
    else if (score > max) {
      max = score;
      maxWords = [arrayOfWords[i]];
    }
  }
  return maxWords;
};

Scrabble.prototype.tie = function(maxWords){
  var maxWord = maxWords.filter(function(element){ return element.length == 7; })
  if (maxWord.length == 0) {
    return maxWord[0];
  }
  else {
    maxWord = Scrabble.prototype.minBy(maxWords);
    return maxWord;
  }
};

Scrabble.prototype.minBy = function (array) {
  var result = array.map(function (el) { return el.length; });
  var min = Math.min.apply(null, result);
  return array[result.indexOf(min)];
};


module.exports = Scrabble;
