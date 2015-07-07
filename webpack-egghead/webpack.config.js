module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },

    module: {
        loaders:  [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
            {test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/}

        ]
    }

}


// var path = require('path');
// var nodeModules = path.resolve(__dirname, './node_modules');
// var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');

// var config = {
//     entry: {
//         app: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
//         vendors: ['angular'] // And other vendors
//     },
//     resolve: {
//         alias: {
//             'angular': pathToAngular
//         }
//     },
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'bundle.js'
//     },
//     module: {
//         noParse: [pathToAngular],
//         loaders: [
//             // LESS
//             {
//                 test: /\.less$/,
//                 loader: 'style!css!less'
//             }

//             // SASS
//             // {
//             //     test: /\.scss$/,
//             //     loader: 'style!css!sass'
//             // }
//         ]
//     }
// };

// module.exports = config;
