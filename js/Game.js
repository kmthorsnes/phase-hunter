/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Function for later use for generating random number. Code base from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

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
      { phrase: "Imagine all the people Living life in peace" },
      { phrase: "She says I am the one but the kid is not my son" },
      { phrase: "Fly me to the moon Let me play among the stars" },
      { phrase: "You and I are gonna live forever" },
      { phrase: "Got your lipstick mark still on your coffee cup" }
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
    // Removes hint if there was given a hint any previous round of play.
    $("#hint").remove();
    this.activePhrase = new Phrase(game.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
    this.missed = 0;
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */

  checkForWin() {
    // Looks for any letter left in phrase. identified by class name
    return !$("li").hasClass("letter");
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    // Removes the first available life from scoreboard by replacing it with lostheart.png.
    $("img[src$='images/liveHeart.png']")
      .first()
      .attr("src", "images/lostHeart.png")
      .removeClass()
      .addClass("lostHeart");
    // Increments number of missed letters
    this.missed++;
    // EXCEEDS-functionality: Sound
    // If the player have missed 4 times a warning sound is played
    if (this.missed == 4) {
      var warning = new Audio(
        "http://soundbible.com/grab.php?id=1377&type=wav"
      );
      warning.play();
      // EXCEEDS-functionality: Hint
      // If the player have missed 4 times a hint in form if a image is showing up. The hint is individual for each of the 5 phrases.
      if (
        this.activePhrase.phrase ==
        "imagine all the people living life in peace"
      ) {
        $("#banner").append(
          '<div id="hint"><h2 style="font-size:20px;">Looks like you need a hint :)</h2><img id="theImg" src="https://karlmagnus.no/img/john.png"/></div>'
        );
      }
      if (this.activePhrase.phrase == "you and i are gonna live forever") {
        $("#banner").append(
          '<div id="hint"><h2 style="font-size:20px;">Looks like you need a hint :)</h2><img id="theImg" src="https://karlmagnus.no/img/oasis.png"/></div>'
        );
      }
      if (
        this.activePhrase.phrase ==
        "got your lipstick mark still on your coffee cup"
      ) {
        $("#banner").append(
          '<div id="hint"><h2 style="font-size:20px;">Looks like you need a hint :)</h2><img id="theImg" src="https://karlmagnus.no/img/tt.png"/></div>'
        );
      }
      if (
        this.activePhrase.phrase ==
        "fly me to the moon let me play among the stars"
      ) {
        $("#banner").append(
          '<div id="hint"><h2 style="font-size:20px;">Looks like you need a hint :)</h2><img id="theImg" src="https://karlmagnus.no/img/sinatra.png"/></div>'
        );
      }
      if (
        this.activePhrase.phrase ==
        "she says i am the one but the kid is not my son"
      ) {
        $("#banner").append(
          '<div id="hint"><h2 style="font-size:20px;">Looks like you need a hint :)</h2><img id="theImg" src="https://karlmagnus.no/img/mj.png" /></div>'
        );
      }
    }
    // If the player miss 5 times, the game ends
    if (this.missed == 5) {
      game.gameOver();
    }
  }

  /**
   * Displays game over message
   * Whether or not the user won the game
   */
  gameOver() {
    // If player have missed 5 times and lost the game
    if (this.missed == 5) {
      document.getElementById("overlay").style.display = "";
      document.getElementById("overlay").setAttribute("class", "lose");
      document.getElementById("game-over-message").innerText =
        "Sorry, but you lost :( Better luck next time";
      // EXCEEDS-functionality: Sound
      // Play sound dependent on the player have won or lost the game when game over.
      var trombone = new Audio(
        "http://soundbible.com/grab.php?id=1830&type=mp3"
      );
      trombone.play();

      // Listens for click on button for restarting game
      document
        .getElementById("btn__reset")
        .addEventListener("click", function() {
          document.getElementById("overlay").style.display = "none";
          // Removes and replace any lost heart images with live ones.
          $("img[src$='images/lostHeart.png']").attr(
            "src",
            "images/liveHeart.png"
          );
          // Removes and adds classes to boxes for restarting the game.
          $(".chosen")
            .removeClass()
            .addClass("key");
          $(".wrong")
            .removeClass()
            .addClass("key");
          game.startGame();
        });
    } else {
      // If player have won the game
      document.getElementById("overlay").style.display = "";
      document.getElementById("overlay").setAttribute("class", "win");
      document.getElementById("game-over-message").innerText =
        "Congratulations :) You won!";
      // EXCEEDS-functionality: Sound
      // Play sound dependent on the player have won or lost the game when game over.
      var fanfare = new Audio(
        "http://soundbible.com/grab.php?id=1823&type=mp3"
      );
      fanfare.play();

      // Listens for click on button for restarting game
      document
        .getElementById("btn__reset")
        .addEventListener("click", function() {
          document.getElementById("overlay").style.display = "none";
          // Removes and replace any lost heart images with live ones.
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
          game.startGame();
        });
    }
  }

  handleInteraction(e) {
    if (game.activePhrase.phrase.includes(e)) {
      game.activePhrase.showMatchedLetter(e);
      $("button:contains(" + e + ")")
        .removeClass()
        .addClass("chosen");
      $("button:contains('Start Game')").removeClass();
      if (game.checkForWin() == true) {
        game.gameOver();
      }
    } else {
      if (!$("button:contains(" + e + ")").hasClass("wrong")) {
        $("button:contains(" + e + ")")
          .removeClass()
          .addClass("wrong");
        $("button:contains('Start Game')").removeClass();
        game.removeLife();
      }
    }
  }
} 
