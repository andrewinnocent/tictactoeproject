'use strict'

const store = require('./store')

// Show relevant buttons based upon sign-in state. E.g., sign-out button viewable
// only when signed-in, etc.

// Sign-up messages
const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', '#8fff90')
}

const signUpFailure = function (error) {
  $('#message').text('Error on signing up')
  $('#message').css('background-color', '#ff91A3')
  console.log(error)
}
// Sign-in messages
const signInSuccess = function (data) {
  $('#message').text('Log In Successful')
  $('#message').css('background-color', '#8fff90')
  store.user = data.user
  $('#log-in').hide()
  $('#signUp').hide()
  $('#subtitle').hide()
  $('.game-board').show()
  $('.reset').show()
  $('#scores').show()
  $('#password-button').show()
  $('#onSignOut').show()
  console.log(data.user.token)
}

const signInFailure = function (error) {
  $('#message').text('Error with Log In - Try Again')
  $('#message').css('background-color', '#ff91A3')
  console.log(error)
}
// Sign-out messages
const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', '#8fff90')
  $('#log-in').show()
  $('#signUp').show()
}

const signOutFailure = function (error) {
  $('#message').text('Error signing out')
  $('#message').css('background-color', '#ff91A3')
  console.log(error)
}
// change password messages
const changePasswordSuccess = function () {
  $('#message').text('Changed password in successfully')
  $('#message').css('background-color', '#8fff90')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error changing password')
  $('#message').css('background-color', '#ff91A3')
  console.log(error)
}

const createGameSuccess = function (data) {
  $('#message').text('Create Game Successful')
  $('#message').css('background-color', '#8fff90')
  store.game = data.game
}

const createGameFailure = function () {
  $('#message').text('Create Game Failed')
  $('#message').css('background-color', '#ff91A3')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure
}
