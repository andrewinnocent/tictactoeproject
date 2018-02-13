#!/bin/bash

# sh scripts/game-index.sh

curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \


echo
