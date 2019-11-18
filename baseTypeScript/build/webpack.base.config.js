/*
 * @Author: your name
 * @Date: 2019-11-05 01:44:42
 * @LastEditTime: 2019-11-18 22:07:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \baseTypeScript\build\webpack.base.config.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const forkTsCheckerWepackPlugin = require('fork-ts-checker-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true      // 默认是false, 加快ts的转义，但是不会对ts的类型检查，需要重新安装一个插件fork-ts-checker-webpack-pulgin和awesome-typescript-loader
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        // new forkTsCheckerWepackPlugin()
        new CheckerPlugin()
    ]
}
