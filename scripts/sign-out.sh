#!/bin/bash

# sh scripts/sign-out.sh

curl   --include  --request DELETE "http://tic-tac-toe.wdibos.com/sign-out/:{$ID}"


echo
