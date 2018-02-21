#!/bin/bash

# sh scripts/game-update.sh

curl "http://tic-tac-toe.wdibos.com/games/{$ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
      "game": {
        "cell": {
          "index": "'"${INDEX}"'",
          "value": "'"${VALUE}"'"
        },
        "over": "'"${OVER}"'"
      }
    }'


echo
