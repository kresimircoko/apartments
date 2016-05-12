var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // backup loader when not building .css file
          'css?sourceMap!sass?sourceMap' // loaders to preprocess CSS
        )
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "app.min.js"
  },
  sassLoader: {
    includePaths: ['client/style']
  },
  plugins: [
    new ExtractTextPlugin('src/main.css')
  ],
};
