var express = require('express');

var env = prcoess.env.NODE_ENV = prcoess.env.NODE_ENV || 'development';

var app = express();

app.configure(function(){
	app.set('views', dirname + '/server/views');
	app.set('view engine', 'jade');
});

app.get('*', function(req, res){
	res.render('index');
});