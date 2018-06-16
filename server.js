//var config = require('./config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//require in controllers
var auth = require('./controllers/auth');
var message = require('./controllers/message');
var category = require('./controllers/category');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

//after mongoose, global db not needed
//var database;
//object containing properties expected in message
//uppercase, something being instantiated and a model

//Middleware
app.use(bodyParser.json());
app.use(cors);

//Requests
app.get('/api/message', message.get);
app.post('/api/message', checkAuthenticated, message.post);
//method exported to own file and brought in via require
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.get('/api/category', category.get);
app.post('/api/category', checkAuthenticated, category.post);

//Connection
mongoose.connect('mongodb://localhost:27017/test',function(err,db) {
    //err,db 
    //removed and reverted after mongoose, client
if (!err) {
      console.log('we are connected to mongo');
    //db.collection('messages').insertOne({'msg':'test'});
} 

//if (err) throw err;
//var db = client.db('test');
//database = db;
//  client.close();
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

var server = app.listen(server_port, server_host, function() {
    console.log('listening on port ', server.address().port)
});