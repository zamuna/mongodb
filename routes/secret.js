var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var mongo = require('mongoskin');
var db = mongo.db('mongodb://127.0.0.1:27017/admin', { native_parser: true });
const decyphier = crypto.createDecipher("aes256", "asaadsaad");
let decryptedMsg = "";

db.bind('homework7');

router.get('/', function (req, res, next) {
    db.homework7.findOne({}, function (err, item) {

        let encrypted = item.message;
        decryptedMsg = decyphier.update(encrypted, 'hex', 'utf8');
        decryptedMsg += decyphier.final('utf8');
        console.log(decryptedMsg);
        res.render('secret', { msg: decryptedMsg });
        db.close();

    });

});


module.exports = router;