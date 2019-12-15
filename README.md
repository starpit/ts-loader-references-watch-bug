# ts-loader references watch bug

This repository demonstrates a bug with ts-loader (as of 6.2.1):

## Setup


```sh
git clone git@github.com:starpit/ts-loader-references-watch-bug.git
cd ts-loader-references-watch-bug
npm ci
npm run watch
```

## What Works

1. Modify src/main.ts, observe that webpack observes the change and
initiates a recompile.
2. Introduce a parse error in plugins/whereismymind/src/plugin.ts,
restart `npm run watch`, and observe that ts-loader correctly detects
the parse error.

## What Does Not Work

3. With a live watcher, modify plugins/whereismymind/src/plugin.ts,
   and observe that webpack *does not* initiate a recompile.

## Hypothesis

ts-loader's project references support seems to have an issue either
with watching project references generally, or with the way this
repository has tsconfig's that reference eachother.
