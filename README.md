# Tic-Tac-Toe Project by Andrew Innocent

## Approach
My mindset throughout the project was, “Do your best, seek help when needed, and be excited with what you achieve!”

I started the project by working on some authentication as that was relatively fresh from what we learned that week. From there, I made several attempts at the game logic. Setting up the game board was easy, but everything else took much effort. White boarding helped plan out the events that make up the game. Translating the events to JavaScript was the most time-consuming part of the project for me.

Overall, I’m pleased with the experience. Three weeks ago I barely knew what JavaScript was - so it’s a “win” for me!

## Technologies Used
- HTML
- CSS
- Sass
- JavaScript
- AJAX
- jQuery
- Bootstrap

## Wireframes
1. [Image one] (https://imgur.com/cNRfFUP)
2. [Image two] (https://imgur.com/8eBRXf1)

I aimed for the stars with my wireframes, but quickly realized that it was very
realistic. I had to KISS and focus on meeting the requirements of the project.

## User Stories

These are the user stories that got me started:

- As a user (player), I want to sign-up to have my own account.
- ", I want to get to playing the game quickly.
- ", I want to play on an well-designed site.
- ", I want to play on any device.
- ", I want to be able to track my game results and see stats.
- ", I'd like to play someone from a separate device.

## Authentication

- Remembering how to use cURL in the Terminal
- getFormFields - changing input name to match “credentials[]” expectation


## Game Logic/JS
- Breaking it down step by step
- Deciding what kind of function to use
  - How to connect the actions to the win options (comparing an array to another array doesn’t work as I had hoped)
  - Create an object with win options arrays? = this was a pain and ultimately didn’t happen. I just used if statements (nested) to determine winner on gameBoard.
- Using a for loop to check wins provides issues (in this format):
(gameBoard[i] === gameBoard[i + 1] && gameBoard[i] === gameBoard[i + 2] && gameBoard[i] === 'X’)
  - Depending on token placement, a win could be determined in positions 2,3,4!
  - Solution is to hard code index, eg. [4] instead of [i +3].
- To not click on a played button: .attr(‘disabled’, true)
  - Issue: win doesn’t stop game. Solution: .attr(‘disabled’, true) to win conditions
- Don’t use .on(‘submit’) on buttons. Use .click() instead.

## Styling
- A solution for Bootstrap column sizing being a consistent 1:1 aspect ratio was difficult to find
- Switched to buttons in a table
- Overall, not happy with gameboard design.
