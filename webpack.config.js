var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2016', 'stage-0']
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
    path: __dirname + "/dist/",
    filename: "index_bundle.js"
  },
  sassLoader: {
    includePaths: ['client/style']
  },
  plugins: [
<<<<<<< HEAD
    new ExtractTextPlugin('[name].css'),
    HTMLWebpackPluginConfig
=======
    new ExtractTextPlugin('src/main.css')
>>>>>>> parent of 58c1d10... Minor Work Done
  ],
};
