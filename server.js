import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from './webpack.config.dev';

const port = 8080;
const app = express();
const compiler = webpack(config);

app.set('view engine', 'pug');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('*', (req,res) => {
  res.render(path.join(__dirname, './client/views/index'));
});

app.listen(port, (err) => {
  if (err) { console.log(err); }
  else {
    open('http://localhost:' + port);
  }
});
