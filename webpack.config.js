const path = require('path');

module.exports = {
    watch:true,
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
    }
};
