// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman ('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses
console.log(game1.status)


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
    console.log(game1.status)
})
