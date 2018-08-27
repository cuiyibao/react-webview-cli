//引入express中间件
var express = require('express');
var path = require('path');
var app = express();

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static(path.join(__dirname, '../build')));

//监听端口为8990
var server = app.listen(8990, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});