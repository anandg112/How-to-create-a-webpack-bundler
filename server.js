const express = require('express');


const port = 3050;

const app = express();

if(process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
}



app.listen(port, () => console.log(`Listening on port ${port}`));
