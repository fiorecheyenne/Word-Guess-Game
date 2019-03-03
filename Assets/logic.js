
// Words to guess
var wordsArr = [
    "kaonashi", "calcifer", "totoro", "kodama", "ponyo", "haku", "howl", "susuwatari", "kamaji", "catbus", "kakashi no kabu", "jiji", "san"
];
console.log(wordsArr);
console.log(updateDisplay);
console.log(wordIndex);
console.log(guessedLet)
console.log(gameStarted);
console.log(gameFinished);
console.log(lives);
console.log(updateDisplay);
console.log(makeGuess);



//$(document).ready(function () {


// global variables
const maxTries = 10;

var guessedLet = []; //letters guessed

var wordIndex;
var guessingWrd = []; // word currently being guessed
var lives = 0;
var gameStarted = false;
var gameFinished = false;
wins = 0;

//Begin game

lives = maxTries;
gameStarted = true;
wordIndex = Math.floor(Math.random() * (wordsArr.length));
guessingWrd = [];
for (var i = 0; i < wordsArr[wordIndex].length; i++) {
    guessingWrd.push("_");

}



//update display 
function updateDisplay() {

    //Display Wins 
    document.getElementById("won").innerText = wins;
    //Display word to be guessed
    document.getElementById("word").innerText = "";
    //Word loop
    for (var i = 0; i < guessingWrd.length; i++) {
        document.getElementById("word").innerText += guessingWrd[i];
    }
    //Attempts left
    document.getElementById("lives").innerText = lives;
    //Letters guessed
    document.getElementById("guessedlets").innerText = guessedLet;
    if (lives <= 0) {
        // document.getElementById("lost") = "display: block";
        // document.getElementById("tryagain") = "display: block";
        gameFinished = true;
    }
};
// reset 
function resetGame() {


    lives = maxTries;
    gameStarted = false;


    //clear array
    guessedLet = [];

    wordIndex = Math.floor(Math.random() * (wordsArr.length));
    guessingWrd = [];
    for (var i = 0; i < wordsArr[wordIndex].length; i++) {
        guessingWrd.push("_");
    }



    // hide game over / win/ etc 
    // document.getElementById("lost") = "display:none";
    // document.getElementById("tryagain") = "display:none";
    // document.getElementById('won') = "display:none";

    updateDisplay();
};

document.onkeyup = function (event) {
    if (gameFinished) {
        resetGame();
        gameFinished = false;
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (lives > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        //check letters
        if (guessedLet.indexOf(letter) === -1) {
            guessedLet.push(letter);
            evalGuess(letter);
        }
    }
    updateDisplay();
    checkWin();
};

function evalGuess(letter) {
    var positions = [];

    for (var i = 0; i < wordsArr[wordIndex].length; i++) {
        if (wordsArr[wordIndex][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        lives--;
    } else {
        for (var i = 0; i < positions.length; i++) {
            guessingWrd[positions[i]] = letter;
        }
    }
    //Lost alert
    if (lives === 0) {
        alert("You lost :(");
        resetGame();
    }
};

function checkWin() {
    if (guessingWrd.indexOf("_") === -1) {
        wins++;
        alert("Nice guess!");
        resetGame();
    }
};

