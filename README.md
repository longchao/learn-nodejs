## learn-nodejs-day-by-day

# First day

mkdir your-app

npm init

npm install express --save

vim index.js

> index.js

var express = require('express');

var app = express()

app.get('/', function(req, res){
	//console.log('hello world');
	res.send('hello world' + req.url);
});

app.listen(3000);




