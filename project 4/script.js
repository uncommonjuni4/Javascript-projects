let  randomNumber =parseInt(Math.random()*100 +1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultparas");

const p = document.createElement("p"); 

let preGuess = [];
let numGusess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = userInput.value;
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("pleas enter correct number")
    }else if(guess < 1){
 alert("Please enter number more than 1")
    }else if(guess > 100){
        alert("Please enter value less than 100")
    }else{
     preGuess.push(guess);
     if(numGusess ===11){
        displayGuess(guess);
        displayMessage(`Game over. ramdom nuumber was ${randomNumber}`);
        endGame();
     }else{
        displayGuess(guess);
        checkGuess(guess);
     }
    }
}



function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guess Right Number`)
    }
    else if(guess < randomNumber){
  displayMessage(`You guess Number is Tooo low`)
    }
    else if(guess > randomNumber){
  displayMessage(`You guess Number is Tooo High`)
    }
}



function displayGuess(guess){
userInput.value = '';
guessSlot.innerHTML += `${guess}    `;
numGusess++;
remaining.innerHTML = `${10-numGusess}`
}


function displayMessage(message){
    lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame(){
    userInput.value= '';
    userInput.setAttribute('disabled' ,'');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "NewGame">Start New game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    NewGame();

}

function NewGame(){
 const NewGameButton = document.querySelector("#NewGame");
 NewGameButton.addEventListener("click",function(e){
    randomNumber =parseInt(Math.random()*100 +1);
    preGuess = [];
    numGusess = 1;
    guessSlot.innerHTML  = '';
    remaining.innerHTML = `${10-numGusess}    `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
     });

}

// function NewGame() {
//     const NewGameButton = document.querySelector("#NewGame");
//     NewGameButton.addEventListener("click", function(e) {
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         preGuess = [];
//         numGusess = 1;
//         guessSlot.innerHTML = '';
//         remaining.innerHTML = `${11- numGusess}`;
//         userInput.removeAttribute('disabled');
//         // submit.removeAttribute('disabled'); // Don't forget to re-enable the submit button!
//         startOver.removeChild(p);
//         playGame = true;
//     });
// }    