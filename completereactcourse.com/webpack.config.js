const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config = {
  workingFolder: path.join(__dirname, 'public')
};

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
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
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }, 
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: config.workingFolder,
      historyApiFallback: true
    },
    mode: 'development'
  }
}