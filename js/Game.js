/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// for getting random number 0-5

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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
  getRandomPhrase() {
    let phraseNumber = getRandomInt(this.createPhrases().length);
    return this.phrases[phraseNumber];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = new Phrase(game.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
    console.log(this.activePhrase);
  }

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    return !$("li").hasClass("letter");
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    $("img[src$='images/liveHeart.png']")
      .first()
      .attr("src", "images/lostHeart.png")
      .removeClass()
      .addClass("lostHeart");
    this.missed++;
    if (this.missed == 5) {
      this.gameOver();
    }
  }

  /**
   * Displays game over message
   * Whether or not the user won the game
   */
  gameOver() {
    if (this.missed == 5) {
      console.log("game over lose");
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").setAttribute("class", "lose");
      document.getElementById("game-over-message").innerText =
        "Sorry, but you lost :( Better luck next time";
    } else {
      console.log("game over win");
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").setAttribute("class", "win");
      document.getElementById("game-over-message").innerText =
        "Congratulations :) You won!";
    }
  }

  

}
