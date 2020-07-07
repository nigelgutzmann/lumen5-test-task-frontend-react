const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');

module.exports = (_, baseConfig) => {
    const development = baseConfig.mode === 'development';
    const config = {
        entry: {
            bundle: path.resolve(__dirname, '../src/index.jsx'),
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '',
        },
        resolve: {
            extensions: ['.jsx', '.js', '.json'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    exclude: [
                        /node_modules/,
                        /\.test.(js|ts)x?$/
                    ],
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        'style-loader', {
                            loader: 'css-loader',
                            options: {
                                importLoaders: true,
                                url: false
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                        }
                    ]
                },
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                __DEV__: String(development),
            }),
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, '../public/index.html'),
                filename: 'index.html',
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        autoprefixer()
                    ]
                }
            }),
        ],
    };

    return merge(config, development ? devConfig : prodConfig);
};
