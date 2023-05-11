const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = ["index", "aboutme", "services", "web", "marketing", "contact"]

module.exports = {
  mode: 'development',
  entry: pages.reduce((config, page) => {
    config[page] = `./src/js/${page}.js`
    return config;
  }, {}),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'images/[name].[ext]'
    // assetModuleFilename: 'assets/images/[name].[ext]'
    //  assetModuleFilename: 'assets/images/[hash][ext][query]'
    clean: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        }
      },
    },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        // include: path.resolve(__dirname, 'src/assets/images'),
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash][ext]'
      }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'src/style.css',
    }),
  ].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          // inject: 'head',
          inject: false,
          template: `./src/pages/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
    hot: true,
  },
};
