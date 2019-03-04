
// Words to guess
var wordsArr = [
    "kaonashi", "calcifer", "totoro", "kodama", "ponyo", "haku", "howl", "susuwatari", "kamaji", "catbus", "jiji", "san", "arrietty", "turniphead"
];
console.log(wordsArr);

// global variables
const maxTries = 10;

var guessedLet = []; //letters guessed
var start;
var wordIndex;
var guessingWrd = []; // word currently being guessed
var lives = 0;
var gameStarted = false;
var gameFinished = false;
wins = 0;
losses = 0;
var wordWas = wordIndex;

//Begin game

lives = maxTries;
gameStarted = true;
wordIndex = Math.floor(Math.random() * (wordsArr.length));
guessingWrd = [];
for (var i = 0; i < wordsArr[wordIndex].length; i++) {
    guessingWrd.push("_");
    console.log(wordIndex);
}

//update display 
function updateDisplay() {

    document.getElementById("start").style.display = "none";
    //Display Wins 
    document.getElementById("won").innerText = wins;
    //Display losses 
    document.getElementById("losses").innerText = losses;
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
        gameFinished = true;
    }

};
// reset 

console.log("game finished = " + gameFinished);
console.log("game started = " + gameStarted);


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
    console.log(wordIndex);

    //hide given hint

    document.getElementById("pon").style.display=
        "none";
    document.getElementById("kan").style.display=
        "none";
    document.getElementById("cal").style.display=
        "none";
    document.getElementById("kodama").style.display=
        "none";
    document.getElementById("tot").style.display=
        "none";
    document.getElementById("haku").style.display=
        "none";
    document.getElementById("howl").style.display=
        "none";
    document.getElementById("susu").style.display=
        "none";
    document.getElementById("kamaji").style.display=
        "none";
    document.getElementById("cat").style.display=
        "none";
    document.getElementById("ji").style.display=
        "none";
    document.getElementById("san").style.display=
        "none";
    document.getElementById("ari").style.display=
        "none";
    document.getElementById("turn").style.display=
        "none";
    // document.getElementById("hints").style.display = "none";

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
        $('#danger').fadeIn(100);
        setTimeout(function () {
            $('#danger').fadeOut(100);
        }, 900);
        // alert("You lost :(");
        losses++;
        resetGame();

    }
};

function checkWin() {
    if (guessingWrd.indexOf("_") === -1) {
        wins++;
        $('#success').fadeIn(100);
        setTimeout(function () {
            $('#success').fadeOut(100);
        }, 900);
        //  alert("Nice guess!");
        resetGame();
    }
};

function showhint() {
    var hint = document.getElementById('hint');
    if (wordIndex === 4) {
        $('#pon').fadeIn(100);
    }
    else {
        if (wordIndex === 0)
            $('#kan').fadeIn(100);
    }
    if
        (wordIndex === 1)
        $('#cal').fadeIn(100);

    if (wordIndex === 3)
        $('#kodama').fadeIn(100);

    if (wordIndex === 2)
        $('#tot').fadeIn(100);

    if (wordIndex === 5)
        $('#haku').fadeIn(100);

    if (wordIndex === 6)
        $('#howl').fadeIn(100);

    if (wordIndex === 7) 
        $('#susu').fadeIn(100);

    if (wordIndex === 8)
        $('#kamaji').fadeIn(100);

    if (wordIndex === 9)
        $('#cat').fadeIn(100);

    if (wordIndex === 10)
        $('#ji').fadeIn(100);

    if (wordIndex === 11)
        $('#san').fadeIn(100);

    if (wordIndex === 12)
        $('#ari').fadeIn(100);

    if (wordIndex === 13)
        $('#turn').fadeIn(100);
}

