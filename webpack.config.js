const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
        bundle: './src/index.js',
        workflow: ['./src/com/matrix/core/control.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }]
            }
        ]
    },
    plugins: [
        // new webpack.EnvironmentPlugin({
        //     PRODUCTION: true,
        //     VERSION: '1.0.0'
        // })
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("1.0.0")
        }),
        new webpack.DefinePlugin({
            PRODUCTION1: JSON.stringify(false),
            VERSION1: JSON.stringify("2.0.0")
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: false
        // })
    ],
    devServer: {
        inline: true,
        hot:true
    }
};