/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = new Game();

document.getElementById("btn__reset").addEventListener("click", function(){
    game.startGame();
    game.handleInteraction();
})