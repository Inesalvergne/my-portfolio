const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    web: './src/web.js'
  },
  output: {
    // path: path.resolve(__dirname, 'src'),
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/pages/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/web.html',
      filename: 'web.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/services.html',
      filename: 'services.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/marketing.html',
      filename: 'marketing.html'
    }),

    // new UglifyJsPlugin(),

    ],
  devServer: {
    static: 'dist',
    // watchContentBase: true,
    static: path.resolve(__dirname, 'src'),
    port: 8080,
    open: true,
    hot: true
  },
};
