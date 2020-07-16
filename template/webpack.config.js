/**
 * webpack的配置
 */
const { resolve } = require('path')
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  entry: [ resolve(__dirname, 'src/scripts/index.js') ],
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.styl$/,
            use: [ 
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader', 
              { loader: 'postcss-loader', options: { ident: 'postcss', plugins: () => [ require('postcss-preset-env')() ] } },
              'stylus-loader'
            ]
          },{
            test: /\.(jpg|png|gif)/,
            loader: 'url-loader',
            options: { limit: 8 * 1024, name: '[hash:10].[ext]', outputPath: 'imgs', esModule: false }
          },{
            test: /\.html$/,
            loader: 'html-loader',
          },{
            exclude: /\.(js|css|styl|html|jpg|png|gif|pug)/,
            loader: 'file-loader',
            options: { outputPath: 'media' }
          },{
            test: /\.pug$/,
            loader: 'pug-loader'
          }
        ]
      }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'src/index.pug'), minify: { collapseWhitespace: true, removeComments: true, } }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPugPlugin()

  ],
  optimization: {
    splitChunks: { chunks: 'all' }
  },
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    open: true,
    // hot: true,
    port: 3000
  }
}