var express = require('express');
var static	= require('express-static');

var app = express();

app.use(static( __dirname + '/public'));

app.get('/users', function(req, res){
	res.send({ 
		users: [ 'longchao', 'lsong' ] 
	});
});

app.listen(4000);
