/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    let selectedPhrase = this.phrase;
    let str = "<ul>";
    for (var i = 0; i < selectedPhrase.length; i++) {
      if (selectedPhrase.charAt(i) !== " ") {
        str +=
          "<li class='hide letter " +
          selectedPhrase.charAt(i) +
          "'>" +
          selectedPhrase.charAt(i) +
          "</li>";
      } else {
        str += "<li class='hide space'></li>";
      }
    }
    str += "</ul>";
    document.getElementById("phrase").innerHTML = str;
  }

  /* Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    $(".hide.letter." + letter)
      .removeClass()
      .addClass("show");
    // Ends game if there is no letters left to reveal. Identified by their classname,
    if (!$("li").hasClass("letter") == true) {
      game.gameOver();
    }
  }
}