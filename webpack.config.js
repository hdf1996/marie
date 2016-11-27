// Todo a public
// Css transpilado como js
// Ecmascript 6
// React
// Bootstrap
// Fontawesome
// Todo desde paquetes de npm
// 
var path = require('path');

console.log('Loaded webpack!');
module.exports = {
  entry: './bin/mugi.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'tmp', 'build'),
    filename: 'mugi.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
            presets: ['es2015']
        }
      }
    ]
  }
}