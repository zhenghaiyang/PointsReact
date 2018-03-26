const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
const themeConfig = {

}


var config ={
  devtool: 'cheap-module-eval-source-map',//开启生成source-map文件功能便于代码调试
  //入口文件位置
  entry:[
      'webpack-hot-middleware/client',
      './src/index.js'
  ],
  // 出口文件
  output:{
    publicPath:"/build/",
    path:path.join(__dirname,'build'),
    filename: "app.js",
    chunkFilename: "[name].[chunkhash:5].js"
  },
  resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],//优化webpack文件搜索范围
      extensions: ['.web.js', '.jsx', '.js', '.json'],
      //webpack使用绝对路径配置
      alias:{
          '@':path.resolve(__dirname,'src')
      }
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"
            // {loader:'style-loader'},
            // {loader:'css-loader'},//编译css文件的loader并开启css-modules功能
            // {loader:'postcss-loader'},
            // {loader:'less-loader'}
            // fallback: 'style-loader',
        ],
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {loader:'style-loader'},
      //     {loader:'css-loader?modules&localIdentName=[local]-[hash:base64:5]'},//编译css文件的loader并开启css-modules功能
      //     {loader:'postcss-loader'},
      //     {loader:'less-loader'}
      //   ],
      // },
      {
          test:/\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg|woff|eot|ttf|svg|gif)$/,
          exclude:/node_modules/,
          use:[
              {
                  loader:'url-loader',
                  options: {
                      limit:8192
                  }
              }
          ]
      }
    ]
  },
  plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: JSON.stringify('development') //定义编译环境
          }
      }),
      new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
          filename: "index.html",
          template: './src/template/index.html', //html模板路径
          hash: false,
      }),
      new webpack.HotModuleReplacementPlugin(),//代码热替换
      // new webpack.NoErrorsPlugin()
  ],
}
module.exports = config;
