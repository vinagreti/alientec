Continuos integration [![CircleCI](https://circleci.com/gh/vinagreti/alientec.svg?style=svg)](https://circleci.com/gh/vinagreti/alientec)

# Alientec

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Running commands

All commands described in this doc are supposed to be executed from the root folder.

## Preparing the environment

You need to have node 8+ and npm 5+ to run this app.

Access the root folder and run `npm i` to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Dist server

For runnign the dist app you must:

1. Build the app: `./node_modules/@angular/cli/bin/ng b --prod`
2. Start the Http server: `./node_modules/http-server/bin/http-server ./dist/alientec/ -p 4200 -a localhost`

Open: `http://localhost:4200` to see the app runing;

## Offline mode

For use the app offline you must run the `Dist Server` and access it. After the first access, you can turn off the internet and the app will work without problem.

If you access the app locally, without internet connection, then the data won't be loaded because of no internet connection. Once you get connection the app will fetch the remote data and it will be available even offline.

It it using PWA architecture and you can add the app to yur home screen to access it faster.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## PreloadAllModules

This pre load all modules once you access it for the first time. This is a good way for ensure all pieces when going offline.
When the application become bigger we need to change this config to lazy load some parts instead of loading it once.
For this test we did not care about that because our goal is to show a simple offline app.
