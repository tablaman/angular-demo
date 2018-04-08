var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');

// Note: babel-polyfill:
// We're using babel polyfill here to allow us to use Promise.all, instead of axios.all()


var config = {
  entry: ["babel-polyfill", "./app/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ],
  mode: "development"
};

if (process.env.NODE_ENV === 'production') {
  
  config.plugins.push(new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
      optimization: {
        minimize: true,
        runtimeChunk: true,
        splitChunks: {
          chunks: "async",
          minSize: 1000,
          minChunks: 2,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: true,
          cacheGroups: {
            default: {
              minChunks: 1,
              priority: -20,
              reuseExistingChunk: true
            },
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            }
          }
        }
      }
    }));
}


module.exports = config;