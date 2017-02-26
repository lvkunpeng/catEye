/**
 * Created by 吕堃鹏 on 2017/2/25 0025.
 */
let mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1/catEye');
let userSchema = new mongoose.Schema({
    userName: String,
    passWord: String,
    userCoupon:Array,
    clubCard:Array,
    likeM:Array,
    wantM:Array
});
var Module = {
    userList:mongoose.model('userList',userSchema)
};
module.exports = Module;