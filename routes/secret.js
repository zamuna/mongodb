var express=require('express');
var router=express.Router();
var crypto=require('crypto');

router.get('/',function(req,res,next){
res.send('respond with a resource');
});

module.exports=router;