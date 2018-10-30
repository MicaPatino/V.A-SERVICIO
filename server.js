const express = require('express');
const app = express();
const path =require('path')

 
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/index.html'));  
});

app.get('/servicios', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/servicios.html'));  
});

app.get('/login', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/login.html'));  
});

app.get('/register', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/register.html'));  
});

app.get('/account', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/account.html'));  
});

app.listen(3000, function() {
  console.log('server express ready!');
});