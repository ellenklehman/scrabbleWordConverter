//The scrabbleConverter function will take a user-inputted word and calculate the correct scrabble score for that word.
var scrabbleConverter = function(userWord) {
  var letterValues = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "l": 1, "n": 1, "r": 1, "s": 1, "t": 1, 
                      "d": 2, "g": 2, 
                      "b": 3, "c": 3, "m": 3, "p": 3, 
                      "f": 4, "h": 4, "v": 4, "w": 4, "y": 4, 
                      "k": 5, 
                      "j": 8, "x": 8, 
                      "q": 10,"z": 10};

  var scores = 0; /*scores is a placeholder to collect and add the values of the letters*/

//The for loop runs through each letter of the userword, 
//selects it in letterScores and returns the value attached to that letter,
//and adds it to the scores variable.

  for(var i = 0; i<userWord.length; i++) {
    scores += letterValues[userWord[i].toLowerCase()];
  }


  console.log(scores);
  return scores;

};

//Collects user input from the scrabble-word id and puts it as an argument into the scrabbleConverter function.
//Returns the resulting number on the webpage
$(document).ready(function() {
  $("form#scrabble-input").submit(function (event) {
    var userInputWord = $("input#scrabble-word").val();
    var endScore = scrabbleConverter(userInputWord);

    $("#result-text").text(endScore);

    event.preventDefault();

  });
});
