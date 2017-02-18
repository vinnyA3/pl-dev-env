import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 8000;
const app = express();
const compiler = webpack(config);

// Disable ELINT for this file
/* eslint-disable no-console */

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})
  .listen(port, (err) => {
    if(err) {
      console.log(err);
    } else {
      open('http://localhost:' + port);
    }
  });

