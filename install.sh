#!/bin/bash
#
# install.sh
# create a production package of this front-end and install it

npm run build
rm -rf ~/dev/etudes-apps/assets/src/main/resources/mneme
cp -pr ~/dev/etudes-mneme-react/build ~/dev/etudes-apps/assets/src/main/resources/mneme
