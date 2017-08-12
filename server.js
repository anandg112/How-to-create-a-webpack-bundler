const express = require('express');
const path = require('path');


const port = process.env.PORT || 3050;

const app = express();

//server routes....


if(process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}



app.listen(port, () => console.log(`Listening on port ${port}`));
