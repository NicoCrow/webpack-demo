var path = require('path');
var webpack = require("webpack");

var DEVELOPMENT = process.env.NODE_ENV.trim() == 'development';
var PRODUCTION  = process.env.NODE_ENV.trim() == 'production';


var entry = PRODUCTION
    ? ['./src/index.js']
    : [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ];

var plugins = PRODUCTION
    ?   [
            new webpack.optimize.UglifyJsPlugin({
                comments: true,
                mangle: false,
                compress: {
                    warnings: true
                }
            })
        ]
    :   [new webpack.HotModuleReplacementPlugin()];

/*console.log(
    '\n\n\n',
    process.env.NODE_ENV,
    '\t\t\t',
    'dev: ',  DEVELOPMENT,
    '\t\t\t',
    'prod: ', PRODUCTION,
    '\t\t\t',
    "entry: ",
    entry,
    '\t\t\t',
    'plugins: ',
    plugins,
    '\n\n\n');*/

module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/'
        }, {
            test: /\.(png|jpg|gif)$/,
            loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
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
