const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

const env = process.env.NODE_ENV.trim();

const common = {
    mode: env,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
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