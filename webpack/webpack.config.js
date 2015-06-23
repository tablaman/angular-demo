module.exports = {
    entry: './main.js',

    output: {
        path: './build', // This is where images AND js will go
        publicPath: 'http://localhost:8090/assets', // This is used to generate URLs
        filename: 'bundle.js'
    },


    module: {
        loaders: [{
            test: /\.coffee$/,
            loader: "coffee-loader"
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }

        // {
        //     test: /\.(png|jpg)$/,
        //     loader: 'url-loader?limit=8192'
        // }

        ]
    }



};
