# IngSpect Web App

IngSpect web app is a Progressive Web App ([PWA](https://developers.google.com/web/progressive-web-apps/)) for categorizing ingredients based on their source (vegan, vegetarian, and others). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

You can run a local instance of IngSpect by executing the following command in a terminal:

```
git clone git@github.com:sutris/ingspect.git
cd ingspect
npm install
npm run bootstrap
cd packages/ingspect-web-app
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### `npm run deploy`

Build the app for product and deploy the build to Netlify based on `.netlify` config.
