'use strict';

const path = require('path');
const express = require('express');
const app = express();
const config = require('./config.js');

// MIDDLEWARE
app.use(express.static(path.join(__dirname, './dist')));

// These are only here for Webpack HMR.
// Must start the app with `$ WEBPACK_HMR=1 npm start`
if (config.get('WEBPACK_HMR')) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  const compiler = webpack(webpackConfig);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );
  app.use(require('webpack-hot-middleware')(compiler));
}

// ROUTES
app.get('/_hc', (req, res) => res.send(config.get('app').pkg));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// GO
app.listen(config.get('PORT'), () => console.log(`Server up on ${config.get('PORT')}`));
