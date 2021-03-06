const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: { 
        main: './src/index.js',
        about: './src/about.js',
        analyze: './src/analyze.js'
},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
             },
          {
              test: /\.(png|jpg|gif|ico|svg)$/i,
              use: [
                   'file-loader?name=images/[name].[ext]',
                   {
                       loader: 'image-webpack-loader',
                       options: {
                        bypassOnDebug: true,
                        disable: true,
                      }
                   },
              ],
              },
                {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=vendor/[name].[ext]'
                }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css',}),
        new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/about.html',
            filename: 'about.html',
            chunks: 'about.html'
        }),
        new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/analyze.html',
            filename: 'analyze.html',
            chunks: 'analyze.html'
        }),
        new WebpackMd5Hash(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
    }),
    ]
};