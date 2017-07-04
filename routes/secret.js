var express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.get('/', function (req, res, next) {
    req.db.homework7.findOne({}, function (err, item) {
        const decyphier = crypto.createDecipher("aes256", "asaadsaad");
        let decryptedMsg = "";
        let encrypted = item.message;
        decryptedMsg = decyphier.update(encrypted, 'hex', 'utf8');
        decryptedMsg += decyphier.final('utf8');
        console.log(decryptedMsg);
        //res.send(decryptedMsg);
        res.render('secret', { msg: decryptedMsg });

    });

});


module.exports = router;