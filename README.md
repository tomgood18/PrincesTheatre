# PrincesTheatre
Lexicon Digital Coding Challenge

Lexicon Digital has been engaged by Princes Theatre to build a price comparison tool to compare two cinemas - Cinemaworld & Filmworld.
This system allows their users to see the movies that are available and highlights which movie provider is streaming at the cheapest price.

### Prerequisites

Expo CLI
```
npm install --global expo-cli
```

Jest-expo & Enzyme
```
npm i jest-expo-enzyme --save-dev
```

## Getting Started

Download the project

Change to project directory
```
cd PrincesTheatre
```

Install dependencies
```
npm install
```

### Running environment

Start Expo
```
expo start
```

## Running the tests

```
npm run test
```
or
```
npm test
```

### What these tests test

* Checks if app renders correctly

* Checks if green coloured price is cheaper than the red coloured price.

## Built With

* [React Native](https://reactnative.dev) - The application framework used
* [Expo](https://expo.io) - The toolchain used
* [Jest](https://jestjs.io) - The testing framework used
* [Enzyme](https://enzymejs.github.io/enzyme/) - The testing utility for React

## Trade-offs and Decisions

* Using Expo to build and run the app made it a lot easier for myself when taking into consideration the time frame that this was to be finalised. In saying that however, both iOS and Android apps are now at minimum 20-30mb which is quite heavy for a small application like this. Another thing to mention is that now the project is heavily reliant on Expo and its resources to run.

## Assumptions made

* In future, web and mobile apps like this would require a lot more unit tests to be developed before releasing.

* The developers reviewing this are able to run the project with Expo to view it on their mobile devices or simulators as well as fix any issue that arises when installing dependencies or packages with npm.

## Authors

Thomas Good