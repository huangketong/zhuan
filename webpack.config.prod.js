const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 获取打包任务入口文件
// var entry = require('./entry.js');
const productConfig = ({ env }) => {
    return {
        entry: `./src/${env}/main.js`,
        output: {
            path: __dirname + `/build/${env}`,//打包后的文件存放的地方
            filename: `[name]-[hash].js`, //name对应entry中的键名
            // publicPath: "/"
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
                    'NODE_ENV': '"production"'
                }
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new ExtractTextPlugin({ filename: `[name]-[hash].css`, allChunks: false }),
            // new CopyWebpackPlugin([{
            //     from: `./src/images/${env}`,
            //     to: `images/${env}`
            // }]),
            // new webpack.DllReferencePlugin({
            //     manifest: require('./build/manifest.json'), // 指定manifest.json
            //     name: 'vendor',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
            // }),
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
                '.jpg'
            ]
        }
    }
}

module.exports = productConfig