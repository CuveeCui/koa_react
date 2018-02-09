const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {
        main: resolve(__dirname,'../App.jsx')
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: resolve(__dirname, '../../dist')
    },
    resolve: {
        extensions: ['.jsx','.js','.json','.scss'],
        alias: {
            'public': resolve(__dirname,'../assets'),
            'util': resolve(__dirname,'../util'),
            'views': resolve(__dirname,'../views'),
            'components': resolve(__dirname,'../components'),
            'config': resolve(__dirname,'../config'),
            'api': resolve(__dirname,'../api')
        }
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','sass-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].[chunkhash].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve(__dirname, '../index.html')
        })
    ]
}