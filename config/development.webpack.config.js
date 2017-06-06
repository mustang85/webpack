const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env) {
  return {
    // entry: './app.js',
    // entry: __dirname,
    entry: {
      main: path.resolve(__dirname, '..', 'app', 'entryPoints', 'main'),
      tweets: path.resolve(__dirname, '..', 'app', 'entryPoints','tweets'),
      vendor: ['jquery', 'bootstrap', 'react', 'react-dom', 'angular']
    },
    // output: {
    //   path: path.resolve(__dirname, '..', 'build'),
    //   filename: 'bundle.js'
    // },
    output: {
      path: path.resolve(__dirname, '..', 'build-dev'),
      // filename: '[name].bundle.js' //main.bundle.js tweets.bundle.js
      // filename: '[name].[hash].bundle.js'
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          // include: path.resolve(__dirname, '..', './app.js'),
          exclude: /node_modules/
        },
        {
          test: /\.coffee$/,
          use: 'coffee-loader',
          exclude: /node_modules/
        },
        {
          test: /\.ya?ml$/,
          loaders: ['json-loader', 'yaml-loader'],
          include: path.resolve(__dirname, '..', 'app', 'config')
        },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          include: path.resolve(__dirname, '..', 'app', 'ts')
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.coffee', '.ts', '.css', '.scss', '.json'],
      alias: {
        sectionTheeSolution$: path.resolve(__dirname, '..', 'app', 'sectionTheeSolution.js'),
        Api: path.resolve(__dirname, '..', 'app', 'apis'),
        welcomeUser$: path.resolve(__dirname, '..', 'app', 'welcomeUser.coffee'),
        typescript: path.resolve(__dirname, '..', 'app', 'ts'),
        // styles: path.resolve(__dirname, '..', 'app', 'styles'),
        reactApp$: path.resolve(__dirname, '..', 'app', 'react'),
        appConfig$: path.resolve(__dirname, '..', 'app', 'config', 'appConfig.yaml'),
      }
    },
    plugins: [
      new HtmlWebpackPlugin(
        //{ template: 'index.html' },
        {
          template: path.resolve(__dirname, '..', 'app', 'entryPoints', 'main', 'index.html'),
          hash: true,
          chunks: ['vendor', 'main']
        }
      ),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', 'app', 'entryPoints', 'tweets', 'tweets.html'),
        hash: true,
        chunks: ['vendor', 'tweets'],
        filename: 'tweets.html'
      }),
      // new ExtractTextPlugin('[name].css'),
      // new ExtractTextPlugin('[name].[hash].css'),
      new ExtractTextPlugin('[name].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        // filename: 'vendor.bundle.js',
        // filename: 'vendor.[hash].bundle.js',
        filename: 'vendor.bundle.js',
        chunks: ['vendor']
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new CleanWebpackPlugin(['build-dev'], {
        root: path.resolve(__dirname, '..'),
        verbose: true
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
        'env': JSON.stringify(env)
      })
    ],
    devServer: {
      contentBase: path.resolve(__dirname, '..', 'build-dev'),
      inline: true,
      port: 3000
    },
    devtool: 'eval-source-map'
  }
}
