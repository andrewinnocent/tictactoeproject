'use strict'

const store = require('./store')

// Show relevant buttons based upon sign-in state. E.g., sign-out button viewable
// only when signed-in, etc.

// Sign-up messages
const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', '#8fff90')
}

const signUpFailure = function () {
  $('#message').text('Error on signing up')
  $('#message').css('background-color', '#ff91A3')
}
// Sign-in messages
const signInSuccess = function (data) {
  $('#message').text('Log In Successful, User ' + data.user.id)
  $('#message').css('background-color', '#8fff90')
  store.user = data.user
  $('#log-in').hide()
  $('#signUp').hide()
  $('#subtitle').hide()
  $('.reset').show()
  $('#password-button').show()
  $('#onSignOut').show()
  $('#get-games-button').show()
}

const signInFailure = function () {
  $('#message').text('Error with Log In - Try Again')
  $('#message').css('background-color', '#ff91A3')
}

// Sign-out messages
const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', '#8fff90')
  $('#log-in').show()
  $('#signUp').show()
  $('#game-message').hide()
  $('#game-id').hide()
}

const signOutFailure = function () {
  $('#message').text('Error signing out')
  $('#message').css('background-color', '#ff91A3')
}
// change password messages
const changePasswordSuccess = function () {
  $('#message').text('Changed password in successfully')
  $('#message').css('background-color', '#8fff90')
}

const changePasswordFailure = function () {
  $('#message').text('Error changing password')
  $('#message').css('background-color', '#ff91A3')
}
// New Game
const createGameSuccess = function (data) {
  $('.game-board').show()
  $('#scores').show()
  $('#game-id').text('Game ID: ' + data.game.id)
  $('#game-message').show()
  $('#game-message').text('New Game Started!')
  $('#game-message').css('background-color', '#8fff90')
  store.game = data.game
}

const createGameFailure = function () {
  $('#message').text('Create Game Failed')
  $('#message').css('background-color', '#ff91A3')
}
// Get Games
const getGamesSuccess = function (data) {
  $('#games-list').text('Total Games for User ' + store.user.id + ': ' + data.games.length).css('font-weight', 'bold')
  store.game = data.game
}

const getGamesFailure = function () {
  $('#message').text('Getting Games Failed')
  $('#message').css('background-color', '#ff91A3')
}
// change password messages
const updateGameSuccess = function (data) {
  $('#message').text('Game updated successfully')
  $('#message').css('background-color', '#8fff90')
  store.game = data.game
}

const updateGameFailure = function () {
  $('#message').text('Game update failed')
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
  createGameFailure,
  getGamesSuccess,
  getGamesFailure,
  updateGameSuccess,
  updateGameFailure
}
