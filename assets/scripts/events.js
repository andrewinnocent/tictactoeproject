'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')

// Make messages disappear after 3-5 secs
const onSignUp = function (event) {
  event.preventDefault()
  $('#sign-up').modal('hide')
  const data = getFormFields(this)
  console.log('Data is ', data)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  $('#sign-in').modal('hide')
  const data = getFormFields(this)
  console.log('Data is ', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
// When signed in:
// Remove sign-up button, change log in to log out, add change password and scores
// buttons.

// Add "Play" button to start a game with a clear gameBoard.

// Add a "Reset" button to start a game over.

// addHandlers for grid spaces clicked on. Also turns are determined and placed in
// the grid space selected!
const gameBoard = ['', '', '', '', '', '', '', '', '']

let turn = 0
const boxSelect = () => {
  $('.col-xs-4').click(function () { // applies the click method to a specific grid space (div)
    if (turn % 2 === 0) { // even turns are X, odd turns are O
      $(this).text('X') // "this" is the grid space clicked on and X is added to it
      gameBoard[this.id] = 'X' // X is placed in the specific index that matched the grid space clicked on
    } else {
      $(this).text('O')
      gameBoard[this.id] = 'O'
    }
    console.log(gameBoard)
    checkForWin()
    turn++ // adds 1 to the turn being played
  })
}

// checks for wins
const checkForWin = function () {
  if (// 0, 1, 2
    (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] === 'X') ||
    // 0, 3, 6
    (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] === 'X') ||
    // 0, 4, 8
    (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] === 'X') ||
    // 1, 4, 7
    (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] === 'X') ||
    // 2, 5, 8
    (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] === 'X') ||
    // 2, 4, 6
    (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] === 'X') ||
    // 3, 4, 5
    (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] === 'X') ||
    // 6, 7, 8
    (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] === 'X')) {
    console.log('X won!')
  } else if (// 0, 1, 2
    (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] === 'O') ||
    // 0, 3, 6
    (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] === 'O') ||
    // 0, 4, 8
    (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] === 'O') ||
    // 1, 4, 7
    (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] === 'O') ||
    // 2, 5, 8
    (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] === 'O') ||
    // 2, 4, 6
    (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] === 'O') ||
    // 3, 4, 5
    (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] === 'O') ||
    // 6, 7, 8
    (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] === 'O')) {
    console.log('O won!')
  } else if (gameBoard.includes('') === false) {
    console.log('Draw game')
  } else {
    console.log('Keep playing')
  }
}

const addHandlers = () => {
  $('#onSignUp').on('submit', onSignUp)
  $('#onSignIn').on('submit', onSignIn)
}

module.exports = {
  boxSelect,
  addHandlers,
}
