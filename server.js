'use strict';

let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
const fs = require('fs');
require('es6');

const path = require('path');

//var totalPositions = [['420px', '0px'], ['73px', '0px'], ['143px', '30px'], ['85px', '200px'], ['200px', '200px'], ['345px', '7px'], ['0px', '230px'], ['195px', '90px'], ['305px', '210px'], ['259px,', '10px']];
var players = {};
var afk = {};
var numPlayers = 0;

//start tutorial code

io.on('connection', (socket) => {

  console.log('USER CONNECTED');

 

  socket.on('disconnect', function(){

    console.log('USER DISCONNECTED');
    

  });

 

  socket.on('add-message', (message) => {

    io.emit('message', {type:'new-message', text: message});

  });

}); //end tutorial code


app.use(express.static(__dirname + "/dist/erintuitive-mentalist"));

http.listen(process.env.PORT || 9200);

app.get('/', function(req, res){
    res.sendFile(__dirname + "/dist/erintuitive-mentalist/index.html");
});

console.log("console listening!");