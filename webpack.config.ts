import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    entry: {
        insex: path.resolve(__dirname, 'src', 'index.js'),
        button_stone: path.resolve(__dirname, 'src', 'button_stone.js'),
    },
    output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.html$/,
            use: 'html-loader',
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.ts', '.js', '.tsx'],
      },
      plugins: [
        new HtmlWebpackPlugin({ 
          template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new webpack.ProgressPlugin(),
      ],
      devtool: 'inline-source-map',
    };

    export default config;