const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    catchError: './src/catchError.js',
    fibonacci: './src/fibonacci.js',
    fibonacciRecursive: './src/fibonacciRecursive.js',
    mergeSort: './src/mergeSort.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};