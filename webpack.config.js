const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ]
};