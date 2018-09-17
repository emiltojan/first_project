var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();

var port = 3000;

var index = require('./routes/index');
var project = require('./routes/project');
var user = require('./routes/user');

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',project);
app.use('/api',user);

app.get('*', function(req, res) {
  res.sendfile('dist/index.html')
})

app.listen(port,function(){
   console.log("Server started at port:" + port); 
});