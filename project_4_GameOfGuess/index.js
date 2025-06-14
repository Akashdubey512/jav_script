const userInput = document.querySelector('#guess')
const no_guess = document.querySelector('#n_guess')
const prev = document.querySelector('#prev')
const lo_high = document.querySelector('#message')
const submit = document.querySelector('#sub')
const startOver = document.querySelector('.resultPara')
const p = document.createElement('p')
let randomnumber = parseInt(Math.random()*100 +1)
let arr = []
let numguess = 1
let PlayGame = true

if(PlayGame){
    submit.addEventListener('click',function (e){
        e.preventDefault()
        const input = parseInt(userInput.value)
        Validate(input);
    })
}
function Validate(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess < 1){
         alert("Please enter a number more than 0")
    } else{
        arr.push(guess)
        if(numguess == 10){
            displayGuess(guess)
            displayMessage(`Game Over,Random number was ${randomnumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            CheckGuess(guess)
        }
    }
}
function CheckGuess(guess){
    if(guess === randomnumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomnumber){
        displayMessage(`Number is too low`)
    } else{
      displayMessage(`Number is too high`)   
    }
}
function displayGuess(guess){
userInput.value = ''
prev.innerHTML+= `${guess}  `
numguess++;
no_guess.innerHTML = `${11-numguess }`
}

function displayMessage(message){
    lo_high.innerHTML = `${message}`
}
function endGame(){
    userInput.value= ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game </h2>`
    startOver.appendChild(p)
    PlayGame = false
    newGame();
}
function newGame(){
    const NewgameButton = document.querySelector('#newGame')
    NewgameButton.addEventListener('click',function(e){
    randomnumber = parseInt(Math.random()*100 +1)
    arr=[]
    numguess = 1
    prev.innerHTML = ''
    no_guess.innerHTML = `${11-numguess }`
    userInput.removeAttribute('disabled')
    lo_high.innerHTML = ''
    startOver.removeChild(p)
     PlayGame = true
    })
}