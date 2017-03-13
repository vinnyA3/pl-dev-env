import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, exclude: /node_modules/, loaders: ['style','css']},
      {test: /\.scss$/, exclude: /node_modules/, loaders: ['style','css','postcss','sass']},
      {test: /\.(png|jpg)$/, exclude: /node_modules/, loaders: 'url-loader?limit=8192'}
    ]
  },
  postcss: () => {
    return [precss, autoprefixer]
  }
}
