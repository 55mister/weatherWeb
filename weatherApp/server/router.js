

var express = require('express')
var router = express.Router()


const sqlite3 = require("sqlite3").verbose()
var sqliteDbPath = "F:\\SQLite\\index.db"
var db = new sqlite3.Database(sqliteDbPath)




router.get('/getCityForm', function (req, res) {
    // res.send('123456')

    var name = req.query.name
    console.log(name);
    // `select id from cityform where name="` + name + '"'
    db.all(`select id from cityform where name="${name}"`, function (err, row) {
        if (err) throw err
        else {
            res.send(row)
            console.log('请求数据库数据成功');
            // console.log('all查询结果', row)

        }
    })

})


module.exports = router