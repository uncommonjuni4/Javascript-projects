let randomNumber =parseInt(Math.random()*100+1);
//////////////selected part
const submit = document.querySelector("#submit");
const userInput= document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver =document.querySelector(".form");


let p = document.createElement("p");

let preGuess = [];
let numGusess = 1;
////Game start NOw
let playGame = true;


if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();

        let guess = userInput.value;
         validateGuess(guess);        
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("You Enter Invalid NUmber ")
    }else if(guess < 1){
        alert("Your Enter Number is  Less than 1")
    }else if (guess  > 100 ){
        alert("Your Enter Value is more than 100")
    }else{
        preGuess.push(guess);
        if(numGusess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Ramdom number is ${randomNumber}`)
            endGame();
        }
        else{
         displayMessage(guess);
         checkGuess(guess);
        }
    }
}

  function checkGuess(guess){
if(guess === randomNumber){
displayMessage(`You guess right Number`)
}else if(guess < randomNumber){
    displayMessage(`You guess number is too low`)
}
else if(guess > randomNumber){
    displayMessage(`You guess number is too High`)
}
}


  function displayMessage(message){
    lowOrHi.innerHTML =`<h2>${message}</h2>`
}


function checkGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}      `
    numGusess++;
    remaining.innerHTML = `${11-numGusess}`
}


function endGame(){
userInput.value = '';
userInput.setAttribute('disabled','');
p.classList.add('button')
p.innerHTML = `<h2 id ="NEWGAME">Start New game</h2>`
startOver.appendChild(p);
playGame = false
NewGame();
}

function NewGame(){
    const NewGameButton = document.querySelector("#NEWGAME");
    NewGameButton.addEventListener("click",function(e){
        randomNumber = parseInt(Math.random() *100 + 1);
        preGuess= [];
        numGusess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10-numGusess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true
    })
}


