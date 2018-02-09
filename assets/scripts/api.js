'use strict'

const config = require('./config')
// const store = require('./store') // Uncomment when adding change password and sign out.

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

module.exports = {
  signUp,
  signIn
}
