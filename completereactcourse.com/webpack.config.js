const path = require('path');

config = {
  workingFolder: path.join(__dirname, 'public')
};

module.exports = {
  // entry: './src/playground/higher-order-comp.js',
  entry: './src/app.js',
  output: {
    path: config.workingFolder,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/, // the ? makes scss optional so you can load scss and css files
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-sourcemap',
  devServer: {
    contentBase: config.workingFolder,
    historyApiFallback: true
  },
  mode: 'development'
};