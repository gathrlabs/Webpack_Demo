const express = require('express');

const app = express();

//Server routes would go here above the webpack configuration IMPORTANT!!

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
}

// By default AWS and Heroku will not let you nominate a port

app.listen(process.env.PORT || 3050, () => console.log('Listening'));
