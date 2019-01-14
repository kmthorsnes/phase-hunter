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
        const phrases = ["All we know is that we dont know",
        "We are all part of a masterplan",
        "Do you keep the receipt for the friends that you buy",
        "Dont look back in anger",
        "Take me to the place where you go where nobody knows if its night or day"];
        return phrases;
    };
}