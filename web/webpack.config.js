const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../');
const outputPath = path.resolve(appDirectory, 'web/public/');

const babelLoaderConfiguration = {
  test: /\.js$/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-react'],
      plugins: ['react-native-web']
    }
  }
};

module.exports = {
  entry: [
    path.resolve(appDirectory, 'index.web.js')
  ],
  output: {
    filename: 'bundle.web.js',
    path: outputPath
  },

  module: {
    rules: [
      babelLoaderConfiguration,
    ]
  },

  plugins: [new HtmlWebpackPlugin({ template: path.resolve(appDirectory, 'public/index.html') })],

  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    extensions: [ '.web.js', '.js' ]
  }
}

