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
    turn++ // adds 1 to the turn being played
  })
}

// $('#1').click(function () {
//   console.log('Box 1 was clicked')
// })
// $('#2').click(function () {
//   console.log('Box 2 was clicked')
// })
// $('#3').click(function () {
//   console.log('Box 3 was clicked')
// })
// $('#4').click(function () {
//   console.log('Box 4 was clicked')
// })
// $('#5').click(function () {
//   console.log('Box 5 was clicked')
// })
// $('#6').click(function () {
//   console.log('Box 6 was clicked')
// })
// $('#7').click(function () {
//   console.log('Box 7 was clicked')
// })
// $('#8').click(function () {
//   console.log('Box 8 was clicked')
// })

const addHandlers = () => {
  $('#onSignUp').on('submit', onSignUp)
  $('#onSignIn').on('submit', onSignIn)
}

// const playerturns = function () {
//   if (gameBoard[0] === '') {
//     $(id).on('click', 'X')
//   }
// }

// [WORKS!] This denotes player turns
// let turn = 0
// const onTurn = function () {
//   $('.row').on('click', function () {
//     if (turn % 2 === 0) {
//       console.log('X')
//     } else {
//       console.log('O')
//     }
//     turn++
//   })
// }

module.exports = {
  boxSelect,
  addHandlers
  // onTurn
}
