const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: '.',
    port: 8888
  },
  performance: {
    hints: false
  }
};
