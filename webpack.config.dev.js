const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 获取打包任务入口文件
// var entry = require('./entry.js');
const devConfig = ({ env }) => {
    return {
        entry: `./src/${env}/main.js`,
        output: {
            path: __dirname + `/build/${env}`,//打包后的文件存放的地方
            filename: `[name]-[hash].js`, //name对应entry中的键名
            // publicPath: "/"
            chunkFilename: '[name].[chunkhash:5].chunk.js'
        },
        devtool: 'cheap-module-source-map',
        devServer: {
            contentBase: `./build/${env}/`,//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            port: 9000,
        },
        module: {
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader",
                    },
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: `[name].[ext]`,
                        }
                    },
                    exclude: /^node_modules$/
                },
                {
                    test: /\.less$/, use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            { loader: 'css-loader', options: { modules: true } }, { loader: 'postcss-loader' }, 'less-loader'
                        ]
                    })
                },
                {
                    test: /\.css$/, use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            { loader: 'css-loader', options: { modules: true } }, { loader: 'postcss-loader' }
                        ]
                    })
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': "'development'"
                }
            }),
            new webpack.HotModuleReplacementPlugin(),//热加载插件
            new webpack.optimize.OccurrenceOrderPlugin(),
            new ExtractTextPlugin({ filename: `[name]-[hash].css`, allChunks: false }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                minChunks: 2,
                filename: "common.js"//忽略则以name为输出文件的名字，否则以此为输出文件名字
            }),
            new HtmlWebpackPlugin({
                template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
            }),
        ],
        resolve: {
            extensions: [
                '.js',
                '.jsx',
                '.css',
                '.less',
                '.json',
                '.gif',
                '.html',
                '.png',
                '.webp',
                '.jpg',

            ]
        }
    }
}

// export default devConfig;
module.exports = devConfig;
