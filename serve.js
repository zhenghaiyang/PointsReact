var webpack = require('webpack');
var express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
console.log("-------")
console.log(process.env.NODE_ENV)
const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,"");
const config = require(`./webpack.${env}.js`);
var app = express();
var compiler = webpack(config);
var serverConfig =require('./config/serverConfig');


app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	hot: true,
	inline: true,
	progress: false,
	quiet: false,
	stats: {
		colors: true,
	}
}));


app.use(webpackHotMiddleware(compiler));

//将其他路由，全部返回index.html
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.listen(serverConfig.serverProt, function() {
	console.info(`server list to ${serverConfig.serverProt} =======> 🚧`)
});
