#!/bin/bash
#
# install.hs
# create a production package of this front-end and install it

npm run build
rm -rf ~/dev/etudes-apps/assets/src/main/resources/mneme
cp -pr ~/dev/mneme-react/build ~/dev/etudes-apps/assets/src/main/resources/mneme
