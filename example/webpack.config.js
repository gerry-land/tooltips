const path = require('path');

const config = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
}


module.exports = config;