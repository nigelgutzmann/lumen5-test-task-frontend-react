const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '..');
const buildDir = path.resolve(rootDir, 'dist');

module.exports = {
    devtool: false,
    performance: {
        hints: 'warning',
        maxAssetSize: 10000000,
        maxEntrypointSize: 25000000
    },

    plugins: [
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin([{
            from: './public',
            to: buildDir,
            debug: false
        }]),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            // prohibition of `<bundle_file_name.ext>.LICENSE.txt` file on the output
            extractComments: false,
        })],
    },
};
