const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const path = require('path');

//var totalPositions = [['420px', '0px'], ['73px', '0px'], ['143px', '30px'], ['85px', '200px'], ['200px', '200px'], ['345px', '7px'], ['0px', '230px'], ['195px', '90px'], ['305px', '210px'], ['259px,', '10px']];
    var players = {};
var afk = {};
var numPlayers = 0;
io.on('connection', (socket)=>{
  //A new user has connected!
  socket.on("msg", function(value, name, id){
    io.emit("msgReturn", value, name);
    afk[`${id}`] = 0;
  });
  socket.on("afk", function(id){
    afk[`${id}`] += 1;
    io.emit("afkReturn", id, afk);
  });
  socket.on("removePlayer", function(id){
    io.emit("removePlayerReturn", id);
    delete players[id];
    numPlayers--
  });
  socket.on("id", function(id, name){
    numPlayers++
    if(numPlayers <= 25){
      players[`${id}`] = [char, name, numPlayers];
    }
    else {
      socket.emit("roomFull");
    }
    afk[`${id}`] = 0; 
    io.emit("players", players, numPlayers);
  });
});

app.use(express.static(__dirname + "/dist/erintuitive-mentalist"));

app.listen(process.env.PORT || 9200);

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + "/dist/erintuitive-mentalist/index.html"));
});

console.log("console listening!");