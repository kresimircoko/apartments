var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: './app/index.js',
  devServer: {
    historyApiFallback: true
  },
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
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=/includes/img/[name].[ext]'
      },
      {
        test: /\.svg$/,
        loader: 'file'
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
    new ExtractTextPlugin('app.css'),
    HTMLWebpackPluginConfig
  ],
};
