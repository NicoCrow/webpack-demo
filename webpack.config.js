var path = require('path');
// var webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    // devtool: "source-map",
    plugins: []
};
