const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

const env = process.env.NODE_ENV.trim();

const PATH = {
    SRC: path.join(__dirname, '/src'),
    DIST: path.join(__dirname, '/dist'),
    FONTS: path.join(__dirname, '/dist/fonts'),
    ASSETS: path.join(__dirname, '/assets')
};

const common = {
    mode: env,
    entry: './src/index.js',
    output: {
        path: PATH.DIST,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(svg)$/i,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            tsx: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader',
                options: { name: 'assets/images/[name].[ext]' }
            }
        ]
    },
};

switch (env) {
    case "production":
        module.exports = merge(common, prod);
        break;
    case "development":
        module.exports = merge(common, dev);
        break;
    default:
        module.exports = {}
        console.log("no mode");
}