const path = require('path')

module.exports = {
    entry: {
        insex: path.resolve(__dirname, 'src', 'index.js'),
        button_stone:  path.resolve(__dirname, 'src', 'button_stone.js'),
    },
    output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
    },
};