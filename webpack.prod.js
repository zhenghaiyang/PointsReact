const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var CleanWebpackPlugin = require('clean-webpack-plugin');

console.log(path.join(__dirname,'build'))

var config ={
  //devtool:'source-map',
  //入口文件位置
  entry:{
    app:'./src/index.js',
    vendor: [
      'react',
      'react-dom',
      'antd'
    ]//分离第三方库
  },
  // 出口文件
  output:{
    publicPath:"./",
    path:path.join(__dirname,'build'),
    // filename: "[name].js",
    // chunkFilename: "[name].[chunkhash:5].js",
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]-[id].[chunkhash:5].chunk.js',
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "less-loader"]
        })
      },
      {
        test:/\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
        use: ['file-loader?limit=1000&name=image/[md5:hash:base64:10].[ext]']
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        use:['file-loader?limit=1000&name=image/[md5:hash:base64:10].[ext]']
      }
    ]
  },
  plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: JSON.stringify('production') //定义编译环境
          }
      }),
      new ExtractTextPlugin({
          filename: 'css/app.css'
      }),//提取css文件
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'] // 指定公共 bundle 的名字,加manifest防止vendor的hash值改变。
      }),
      new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
          filename: 'index.html',  // 相对于打包后的文件路径
          template: './src/template/index.html', //html模板路径
          inject: 'body',
          hash: false,
      }),
      new webpack.optimize.UglifyJsPlugin({      //去掉注释 ，压缩js代码
        sourceMap: true,
        beautify: false,//最紧凑的输出
        comments: false,//删除注释
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        },
        output: {
          comments: false,
        }
      }),
      new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
      }),
      new CleanWebpackPlugin(
         ['build/*'],　 //匹配删除的文件
         {
             root: __dirname,       　　　　　　　　　　//根目录
             verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
             dry:      false        　　　　　　　　　　//启用删除文件
         }
      )
  ]
}
module.exports = config;
