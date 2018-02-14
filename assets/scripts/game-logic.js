'use strict'

// THIS FILE WAS NOT USED
// Files to be required(if any):

// Create game board
// Array where each index is where a user can position an X or O
// const gameBoard = ['', '', '', '', '', '', '', '', '']
//
// // Another look at the board is index:
// // 0 1 2
// // 3 4 5
// // 6 7 8
//
// // A function that places a token in a specific index [WORKS] Need to connect to clicks
// const addToBoard = function (index, token) {
//   gameBoard[index] = token
//   console.log(gameBoard)
// }
//
// // const playerturns = function () {
// //   if (gameBoard[0] === '') {
// //     $(id).on('click', 'X')
// //   }
// // }
//
// let turn = 0
// const onTurn = function () {
//   $('.row').on('click', function () {
//     if (turn % 2 === 0) {
//       console.log('X')
//     } else {
//       console.log('O')
//     }
//   })
// }
//
// // Equate index with a click in a specific area
// // const play = function () {
// //   $('#2').on('click', function () {
// //     $('#2').text('X')
// //     console.log('Box 2 was played')
// //   })
// // }
//
// // 6. Win options
// const winOptions = {
//   one: [0, 3, 6],
//   two: [1, 4, 7],
//   three: [2, 5, 8],
//   four: [0, 1, 2],
//   five: [3, 4, 5],
//   six: [6, 7, 8],
//   seven: [0, 4, 8],
//   eight: [6, 4, 2]
// }
//
// // To show where X & O are played
// // Since X plays first, the turns are even indexes. Odd for O.
// const plays = []
//
// function test () {
//   for (let i = 0; i < gameBoard.length; i++) {
//     if (gameBoard[i] === 'X') {
//       plays.push(i)
//       console.log('X is here!')
//     } else {
//       console.log('X in not here!')
//     }
//   }
// }

// I'm trying to compare plays array to the first element in winOptions that matches.
// function xWon () {
//   for (let i = 0; i < winOptions.length; i++) {
//     if (winOptions[i] === plays) {
//       console.log('X Won!')
//     } else {
//       console.log('winOptions is ' + winOptions[i] + 'playerX is ' + plays)
//     }
//   }
// }

// Get array of playerX and compare each index to the win condition.
// Are winOptions sub array indexes in the playerX array?
// function xWon2 () {
//   for (let i = 0; i < winOptions.length; i++) {
//     winOptions[i]
//   }
// }
// addToBoard(0, 'X')
// console.log(winOptions.find(xWon))

// function xWon () {
//   for (let i = 0; i < winOptions.length; i++)
//     if (indexX === )
// }
//   if (gameBoard === winOptions.win1) {
//     console.log('I won, Baby!')
//   } else {
//     console.log('Whomp, whomp...')
//   }
// }

/*
1. Start with a clear board
2. Player 1 begins first ('X' token)
  a. Index selected cannot be played on again
3. Switch player function
4. Player 2 plays ('O' token)
  a. Index selected cannot be played on again
5. Repeat 2-4
6. Three of the same tokens in a row/diag wins
  a. 8 possible win options
  b. Draw result
  c. Start function to determine win from first play
  d. Board reset button when game done
7. Store w/l info for player 1

*/

module.exports = {

}
