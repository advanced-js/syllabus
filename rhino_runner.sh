#!/bin/bash

# run all scripts in same context - faster, but not as safe
# rhino -f helpers.js `for f in exercises/*; do echo -n "-f $f "; done`

for f in exercises/*; do rhino -f helpers.js $f; done
