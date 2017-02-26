/**
 * Created by 吕堃鹏 on 2017/2/23 0023.
 */
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/leave');
var leaveSchema = new  mongoose.Schema({
    title:String,
    content:String,
    createAt:{type:Date,default:Date.now()}
});
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile('./leave.html', {root: __dirname})
});
app.post('/leaves',function (req,res) {
    var data = req.body;
    mongoose.model('leave').create(data,function (err,doc) {
        res.send(doc)
    });
});
app.get('/getUser',function (req,res) {
    res.send([{name:'zf',age:8}])
});
app.get('/leave',function (req,res) {
    mongoose.model('leave').find({},function (err,doc) {
        res.send(doc)
    })
});
app.post('/postUser',function (req,res) {
    res.send(req.body)
})

app.listen(10086, function () {
    console.log(10086)
});