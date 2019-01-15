/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const selectedPhrase = Game.getRandomPhrase();
        var str = "";
        for (var i = 0; i < selectedPhrase.length; i++) {
            str += '<li>'+ selectedPhrase.charAt(i) + '</li>';
        }
        document.getElementById("phrase").innerText = str; 
    }
};