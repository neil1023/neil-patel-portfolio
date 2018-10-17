const path = require('path');

module.exports = {
  entry: './js/responsive-slides.js',
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, '.'),
  },
}
