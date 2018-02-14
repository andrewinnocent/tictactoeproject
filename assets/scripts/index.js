'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const clickEvents = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  clickEvents.boxSelect()
  clickEvents.addHandlers()
  clickEvents.notSignedIn() // starts the board hidden until signed in
})
