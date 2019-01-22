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
    console.log(this.activePhrase.phrase);
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
      document.getElementById("overlay").style.display = "";
      document.getElementById("overlay").setAttribute("class", "lose");
      document.getElementById("game-over-message").innerText =
        "Sorry, but you lost :( Better luck next time";
      // Personalization: Adds sound effect
      var trombone = new Audio('http://soundbible.com/grab.php?id=1830&type=mp3');
      trombone.play();

      document
        .getElementById("btn__reset")
        .addEventListener("click", function() {
          document.getElementById("overlay").style.display = "none";

          $("img[src$='images/lostHeart.png']").attr(
            "src",
            "images/liveHeart.png"
          );
          $("img[src$='images/lostHeart.png']").attr(
            "src",
            "images/liveHeart.png"
          );
          $(".chosen")
            .removeClass()
            .addClass("key");
          $(".wrong")
            .removeClass()
            .addClass("key");
          game = new Game();
          game.startGame();
          game.handleInteraction();
        });
    } else {
      document.getElementById("overlay").style.display = "";
      document.getElementById("overlay").setAttribute("class", "win");
      document.getElementById("game-over-message").innerText =
        "Congratulations :) You won!";
      // Personalization: Adds sound effect
      var fanfare = new Audio('http://soundbible.com/grab.php?id=1823&type=mp3');
      fanfare.play();

      document
        .getElementById("btn__reset")
        .addEventListener("click", function() {
          document.getElementById("overlay").style.display = "none";
          $("img[src$='images/lostHeart.png']").attr(
            "src",
            "images/liveHeart.png"
          );
          $(".chosen")
            .removeClass()
            .addClass("key");
          $(".wrong")
            .removeClass()
            .addClass("key");
          game = new Game();
          game.startGame();
          game.handleInteraction();
        });
    }
  }
  handleInteraction() {
    $(".key").click(function() {
      let pressedKey = $(this).html();
      console.log(game.activePhrase.phrase);
      if (game.activePhrase.phrase.includes(pressedKey)) {
        game.activePhrase.showMatchedLetter(pressedKey);
        $(this)
          .removeClass()
          .addClass("chosen");
         if (game.checkForWin() == true) {
            game.gameOver();
         }
      } else {
        if (!$(this).hasClass("wrong")) {
          $(this)
            .removeClass()
            .addClass("wrong");
          game.removeLife();
        }
      }
    });
  }
}
