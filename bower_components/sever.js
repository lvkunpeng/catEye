/**
 * Created by 吕堃鹏 on 2017/2/23 0023.
 */
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.sendFile('./jsonp.html', {root: __dirname})
});
app.get('/getUser',function (req,res) {
    res.send([{name:'zf',age:8}])
});
app.post('/postUser',function (req,res) {
    res.send(req.body)
})

app.listen(10086, function () {
    console.log(10086)
});