'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
// const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  $('#sign-up').modal('hide')
  const data = getFormFields(this)
  console.log('Data is ', data)

  api.signUp(data)
}

const onSignIn = function (event) {
  event.preventDefault()
  $('#sign-in').modal('hide')
  const data = getFormFields(this)
  console.log('Data is ', data)

  api.signIn(data)
}

// Add "Play" button to start a game with a clear gameBoard.

// Add a "Reset" button to start a game over.

// addHandlers for grid spaces clicked on
const boxSelect = () => {
  $('#0').click(function () {
    console.log('Box 0 was clicked')
  })
  $('#1').click(function () {
    console.log('Box 1 was clicked')
  })
  $('#2').click(function () {
    console.log('Box 2 was clicked')
  })
  $('#3').click(function () {
    console.log('Box 3 was clicked')
  })
  $('#4').click(function () {
    console.log('Box 4 was clicked')
  })
  $('#5').click(function () {
    console.log('Box 5 was clicked')
  })
  $('#6').click(function () {
    console.log('Box 6 was clicked')
  })
  $('#7').click(function () {
    console.log('Box 7 was clicked')
  })
  $('#8').click(function () {
    console.log('Box 8 was clicked')
  })
}

const addHandlers = () => {
  $('#onSignUp').on('submit', onSignUp)
  $('#onSignIn').on('submit', onSignIn)
}

module.exports = {
  boxSelect,
  addHandlers
}
