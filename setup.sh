#!/bin/bash

if [ -z  "$*" ];
    dir = "test"
then
    dir = "$1"
fi
if [ -d "./$dir" ]; then
  echo "./$dir already exists."
fi
git clone https://github.com/godamri/test-framework.git $dir
cd ./$dir
rm -rf .git setup.sh
npm i