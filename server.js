/**
 * Created by 吕堃鹏 on 2017/2/25 0025.
 */
let express = require('express');
let app = express();
let Module = require('./server/mongoose');

app.get('/userInfo', function (req, res) {
    res.send('qwe')
});
app.post('/addUser', function (req, res) {
    res.send('asdf')
});
app.listen(80, function () {
    console.log(80)
});