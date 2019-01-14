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
        "we are all part of a masterplan",
        "de you keep the receip for the friends that you buy",
        "dont look back in anger",
        "take me to the place where you go where nobody knows if its night or day"];
        return phrases;
    };
}