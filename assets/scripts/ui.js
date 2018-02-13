'use strict'

const store = require('./store')

// Sign-up messages
const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on signing up')
  $('#message').css('background-color', 'red')
  console.log(error)
}
// Sign-in messages
const signInSuccess = function (data) {
  $('#message').text('Log In Successful')
  $('#message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error with Log In - Try Again')
  $('#message').css('background-color', 'red')
  console.log(error)
}

// Show relevant buttons based upon sign-in state. E.g., sign-out button viewable
// only when signed-in, etc.

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
