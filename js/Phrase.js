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
      str +=
        "<li class='hide letter " +
        selectedPhrase.charAt(i) +
        "'>" +
        selectedPhrase.charAt(i) +
        "</li>";
    }
    str += "</ul>";
    document.getElementById("phrase").innerHTML = str;
    document.body.innerHTML = document.body.innerHTML.replace(
      /hide letter  /g,
      "hide space"
    );
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
    $('.hide.letter.'+letter).addClass("show"); 
  };

}
