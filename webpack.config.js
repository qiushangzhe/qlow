const path = require('path');
const webpack = require('webpack');
module.exports = {
    watch: true,
    entry: './src/app.js',
    output: {
        filename: 'main.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    stats: {
        assets: false,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: false,
        version:false
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        })
    ],
    watch: false
};
