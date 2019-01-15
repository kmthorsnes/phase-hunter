/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      { phrase: "All we know is that we dont know" },
      { phrase: "We are all part of a masterplan" },
      { phrase: "Do you keep the receipt for the friends that you buy" },
      { phrase: "Dont look back in anger" },
      {
        phrase:
          "Take me to the place where you go where nobody knows if its night or day"
      }
    ];
    return phrases;
  }
}
