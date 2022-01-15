// HTTP (HyperText Transfer Protocol)


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman ('Car Parts', 2)

puzzleEl.textContent = game1.Puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
  
})

getCountry('US', (error, country) => {
    if (error) {
        console.log(error)
    }else {
        console.log(`Country name: ${country.name}`)
    }
})