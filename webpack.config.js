const path = require("path");
const RelayCompilerWebpackPlugin = require('relay-compiler-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  entry: ['@babel/polyfill', './frontend/src/entry.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {loader: "file-loader"}
        ]
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {loader: "url-loader?mimetype=image/png"}
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "autoprefixer-loader?browsers=last 10 versions"}
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {loader: "url-loader?limit=464600&minetype=application/font-woff"}
        ]
      },
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: [
          {loader: "babel-loader"}
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'frontend', 'src', 'index.html')
    }),
    new RelayCompilerWebpackPlugin({
      schema: path.resolve(__dirname, './data/schema.json'),
      //schema: require('./backend/src/schema'),
      src: path.resolve(__dirname, './frontend/src'),
    })
  ],
}
