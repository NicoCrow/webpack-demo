var path = require('path');
var webpack = require("webpack");

var DEVELOPMENT = process.env.NODE_ENV.split(' ').join('') == 'development';
var PRODUCTION  = process.env.NODE_ENV.split(' ').join('') == 'production';

// console.log('\n\n\n', process.env.NODE_ENV, '\t\t\t', 'dev: ',  DEVELOPMENT, '\t\t\t', 'prod: ', PRODUCTION, '\n\n\n');

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
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/'
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
    // devtool: "source-map",
};
