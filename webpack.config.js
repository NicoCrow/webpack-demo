var path = require('path');
var webpack = require("webpack");

var DEVELOPMENT = provess.env.NODE_ENV === 'development';
var PRODUCTION  = provess.env.NODE_ENV === 'production';

var entry = PRODUCTION
    ? ['./src/index.js']
    : [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ];

var plugins = PRODUCTION
    ?   []
    :   [new webpack.HotModuleReplacementPlugin()];

module.exports = {
    entry: entry,
    plugins: plugins,
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
    // devtool: "source-map",
};
