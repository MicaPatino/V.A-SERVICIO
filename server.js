const express = require('express');
const app = express();
const path =require('path')
var bodyParser = require('body-parser');

 
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/index.html'));  
});

app.get('/servicios', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/servicios.html'));  
});


app.get('/login', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/login.html'));  
});

app.post('/login', function(request,response){
	var login = JSON.parse(request.body.login);
	console.log(login,users)
	var result = users.filter(function (user) {
		if(user.password == login.password && user.user == login.username){
		return user;
	}});
	if(result.length > 0) {
		response.json({status:200});
	}
	else {
	  response.json({status:404});
	}		  
});

app.get('/register', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/register.html'));  
});

var users = [];
app.post('/register',function(request, response) {
	users.push(JSON.parse(request.body.user));
	response.json({status:200});

});

app.get('/account', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/account.html'));  
});

app.get("/get-service", function(request,response){
	response.json(services);

});

var services = [];

app.post ("/add-service", function(request,response) {
	var service = request.body.service;
	services.push(service);
	response.json({status:200})
});


app.listen(3000, function() {
  console.log('server express ready!');
});