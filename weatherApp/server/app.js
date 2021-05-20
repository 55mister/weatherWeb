

var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')
var app = express()




// app.get('/', function (req, res) {

// })

//配置模板引擎和body-parser一定要在app.use(router)挂载路由之前
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())



app.use(router)
app.listen(3000, function () {
    console.log('服务器启动 http://127.0.0.1:3000/');

})