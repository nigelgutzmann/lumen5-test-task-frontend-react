const path = require('path');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

// eslint-friendly-formatter
process.env.EFF_NO_LINK_RULES = true;

module.exports = {
    devtool: 'cheap-module-source-map',
    stats: {
        assets: false,
        colors: true,
        version: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        children: false,
        modules: false,
        moduleTrace: false,
        reasons: false,
        source: false,
        entrypoints: false,
        cached: false,
        cachedAssets: false
    },
    performance: {
        hints: false
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        watchContentBase: true,
        clientLogLevel: 'none',
        port: 3000,
        open: true,
    },

    optimization: {
        minimize: false
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js)x?$/,
                include: [
                    path.resolve(__dirname, '..', 'src')
                ],
                loader: 'eslint-loader',
                options: {
                    quiet: true,
                    formatter: eslintFriendlyFormatter,
                }
            }
        ],
    },
};
