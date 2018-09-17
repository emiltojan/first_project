var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var dbName = 'project_manager';

var db = mongojs('mongodb://127.0.0.1:27017/' + dbName, ['projects']);

//Get Data
router.get('/project',function(req,res,next){
   db.projects.find(function(err,project){
      if(err){
          res.send(err);
      } 
      res.json(project);
   });
    
});

module.exports = router;