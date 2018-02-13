'use strict'

const config = require('./config')
const store = require('./store')

// ajax requests to post the info input to the server (API). The API stores the
// sign up information and returns what's been saved.
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    header: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    header: {
      contentType: 'application/json'
    },
    data
  })
}

const signOut = function () {
  console.log('signed out')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
