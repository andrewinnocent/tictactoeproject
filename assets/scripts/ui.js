'use strict'

const store = require('./store')

// Show relevant buttons based upon sign-in state. E.g., sign-out button viewable
// only when signed-in, etc.

// Sign-up messages
const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', '#8fff90')
  console.log(data)
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
  console.log(data)
  store.user = data.user
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
  console.log('Signed out successfully!')
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
  console.log('Changed password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error changing password')
  $('#message').css('background-color', '#ff91A3')
  console.log(error)
}

const createGame = function (data) {
  $('#message').text('Create Game Successful')
  $('#message').css('background-color', '#8fff90')
  console.log(data)
  store.games = data.game
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
  createGame
}
