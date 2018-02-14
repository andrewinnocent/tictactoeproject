'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

// Make messages disappear after 3-5 secs (desired)
const notSignedIn = function () {
  $('.game-board').hide()
  $('.reset').hide()
  $('#scores').hide()
  $('#subtitle').show().text('Log In to Play!').css('font-size', '20px').css('color', '#529bff')
  $('#password-button').hide()
  $('#onSignOut').hide()
}

const onSignUp = function (event) {
  event.preventDefault()
  $('#sign-up').modal('hide')
  const data = getFormFields(this)
  console.log('Data is ', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#onSignUp').get(0).reset()
}

const onSignIn = function (event) {
  event.preventDefault()
  $('#sign-in').modal('hide')
  const data = getFormFields(this)
  $('#log-in').hide()
  $('#signUp').hide()
  $('#subtitle').hide()
  $('.game-board').show()
  $('.reset').show()
  $('#scores').show()
  $('#password-button').show()
  $('#onSignOut').show()
  $('#onSignIn').get(0).reset()

  // $('.box').on('click').css('font-weight', 'normal') // unlocks the board when signed in
  // $('#4').text('') // to clear the cell
  console.log('Data is ', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  notSignedIn()
  $('#log-in').show()
  $('#signUp').show()
}

const onChangePassword = function (event) {
  event.preventDefault()
  $('#change-password').modal('hide')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#onChangePassword').get(0).reset()
}

const onNewGame = () => {
  console.log('what for?')
  api.newGame()
}

const addHandlers = () => {
  $('#onSignUp').on('submit', onSignUp)
  $('#onSignIn').on('submit', onSignIn)
  $('#onSignOut').click(onSignOut)
  $('#onChangePassword').on('submit', onChangePassword)
}

// When signed in:
// Remove sign-up button, change log in to log out, add change password and scores
// buttons.

// Add "Play" button to start a game with a clear gameBoard.

const gameBoard = ['', '', '', '', '', '', '', '', '']

// Player turns [WORKS]
let turn = 0
const boxSelect = () => {
  for (let i = 0; i < gameBoard.length; i++) {
    $('#' + i).click(function () { // applies the click method to a specific grid space (div)
      if (turn % 2 === 0) { // even turns are X, odd turns are O
        $(this).text('X') // "this" is the grid space clicked on and X is added to it
        gameBoard[this.id] = 'X' // X is placed in the specific index that matched the grid space clicked on
        console.log(this)
        $(this).attr('disabled', true) // disables button once selected
      } else {
        $(this).text('O')
        gameBoard[this.id] = 'O'
        $(this).attr('disabled', true) // disables button once selected
      }
      console.log(gameBoard)
      checkForWin()
      turn++ // adds 1 to the turn being played
    })
  }
}

// Tally wins/losses

let xWinTally = 1
let oWinTally = 1

// checks for wins & locks board when game done [WORKS]
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
    $('#x-score').text(xWinTally++)
    $('.box').attr('disabled', true) // disables board if X wins
    $('#game-message').text('X wins!')
    $('#game-message').css('background-color', 'blue')
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
    $('#o-score').text(oWinTally++)
    console.log('O won!')
    $('.box').attr('disabled', true) // disables board if O wins
    $('#game-message').text('O wins!')
    $('#game-message').css('background-color', 'blue')
  } else if (gameBoard.includes('') === false) {
    console.log('Draw game')
    $('#game-message').text('Draw game!')
    $('#game-message').css('background-color', '#ff00ff')
  } else {
    console.log('Keep playing')
  }
}

// Game restart [WORKS]
$('#new-game').on('click', function () {
  for (let i = 0; i < gameBoard.length; i++) {
    $('#' + i).text('') // clears X or O in each button
    $('.box').attr('disabled', false) // allows buttons to be clicked on again
    gameBoard[i] = '' // clears array of X & O, back to empty string
    turn = 0 // resets turn to start with X
  }
  console.log(gameBoard)
  console.log(store.user.token)
})

module.exports = {
  boxSelect,
  addHandlers,
  notSignedIn
}
