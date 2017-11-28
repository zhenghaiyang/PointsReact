// 获取 NODE 运行时的环境变量
const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,"");
// 根据环境变量引入相应的配置文件
const config = require(`./webpack.${env}.js`);
// 导出此模块
module.exports = config;
