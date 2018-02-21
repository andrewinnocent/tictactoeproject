#!/bin/bash

# sh scripts/game-show.sh

curl "http://tic-tac-toe.wdibos.com/games/{$ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \


echo
