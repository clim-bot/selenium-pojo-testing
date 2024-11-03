#!/bin/bash

browsers=("chrome" "safari" "firefox" "edge")

for browser in "${browsers[@]}"; do
  echo "Running tests on $browser..."
  BROWSER=$browser npm test || exit 1
done
