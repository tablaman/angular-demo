// source: http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html

// var path = require('path');

// module.exports = {
//     entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'bundle.js'
//     },

//     // Webpack will map modules to free variables. 
//     // In this case, any time you use the free variable angular inside a module, 
//     // webpack will set angular to require('angular').
//     // currently doesn't work!

//     //   plugins: [
//     //   new webpack.ProvidePlugin({
//     //     'angular': 'angular'
//     //   })
//     // ]

//     externals: {
//         'angular': 'angular'
//     }
// };


var path = require('path');
var nodeModules = path.resolve(__dirname, './node_modules');
var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');

var config = {
    entry: {
        app: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
        vendors: ['angular'] // And other vendors
    },
    resolve: {
        alias: {
            'angular': pathToAngular
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        noParse: [pathToAngular],
        loaders: [
            // LESS
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }

            // SASS
            // {
            //     test: /\.scss$/,
            //     loader: 'style!css!sass'
            // }
        ]
    }
};

module.exports = config;
