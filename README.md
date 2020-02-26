# Toy Problems

Welcome to Toy Problems. This repository will be updated every morning with a new
code challenge.

Feel free to use Google to aid you in solving the coding challenges!

## Using this Repository

You'll find each day's toy problem in its own folder.

## Getting a Copy of the Repo

If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer.

## First Step

Open your terminal and have it pointing to your bld09-precourse-toy-problem folder then run:
> npm install

## Checking Answers

After completing a toy problem run:
> npm test ./current-toy-problem-folder/currentToyProblem.test.js

Alternatively you can run npm test **but** it will run **ALL** tests. 

## Updating the Repository

Every morning, when a new toy problem is added, you'll need to sync your version of
the repo with mine. Git won't automatically pull in upstream changes for
you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to my version of the repo:

    git remote add upstream https://github.com/BaileyTheriault/bld09-precourse-toy-problems.git

After you've done that, updating your repo is as simple as running the following:

    git checkout master       // Your fork's master branch
    git pull upstream master  // Your class's master branch

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.