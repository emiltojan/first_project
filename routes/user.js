var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var dbName = 'project_manager';
var db = mongojs('mongodb://127.0.0.1:27017/' + dbName, ['user']);

//get Data
router.get('/user',function(req,res,next){
    db.user.find(function(err,user){
       if(err){
           res.send(err);
       } 
       res.json(user);
    });
})

//Search for a specific user
router.get('/user/:id',function(req,res,next){
    db.user.find({_id:req.params.id},function(err,user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
})

module.exports = router;