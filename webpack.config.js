const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',



    devServer: {
        contentBase: path.join(__dirname, ''),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },

};