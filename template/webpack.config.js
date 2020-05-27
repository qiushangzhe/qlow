/**
 * webpack的配置
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: resolve(__dirname, 'index.js'),
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: require.resolve('zepto'),
      use: ['exports-loader?window.Zepto','script-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'src/index.html') })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    open: true,
    port: 3000
  }
}