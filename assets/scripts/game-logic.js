'use strict'

// Files to be required(if any):

// Create game board

// Array where each index is where a user can position an X or O
const gameBoard = ['', '', '', '', '', '', '', '', '']

// Another look at the board is index:
// 0 1 2
// 3 4 5
// 6 7 8

// When a player clicks on a specific block (represented by the number/index),
// the return will be an X or O. Always start with X.

// const play = function () {

$(() => {
  $('#0').click(function () {
    console.log('Box was clicked')
  })
})

// }

module.export = {
  gameBoard
}
