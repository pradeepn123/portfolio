#!/usr/bin/env sh
open https://pradeepn123.github.io/portfolio/
# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd build/

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/pradeepn123/prismic-adaptor-integration.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://pradeepn123.github.io/portfolio main
# git push -f git@github.com:pradeepn123/anatta-docs.git main:gh-pages
cd -