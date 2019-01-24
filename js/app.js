/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = new Game();

document.getElementById("btn__reset").addEventListener("click", function(){
    game.startGame();
    
    $(".key").click(function() {
        let pressedKey = $(this).html();
        console.log('mus ' + pressedKey);
        game.handleInteraction(pressedKey);
    })

// EXCEEDS-functionality: Keyboard functionality
    // Game accepts and reacts to input from keyboard press
    $("body").keypress(function(e) {
        let keyboardKey = e.key;
        console.log('tastatur ' + keyboardKey);
        if (keyboardKey.match(/[a-z]/i)) {
            game.handleInteraction(keyboardKey);
        }
    })
});


