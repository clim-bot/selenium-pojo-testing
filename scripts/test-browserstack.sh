#!/bin/bash

browsers=("chrome" "firefox" "edge")

for browser in "${browsers[@]}"; do
  echo "Running tests on BrowserStack for $browser..."
  BROWSER=$browser USE_BROWSERSTACK=true npm test || exit 1
done
