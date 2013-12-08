var io = require('socket.io-client');
var systemDate = new Date();
var msg = systemDate.getHours() + ":" + systemDate.getMinutes() + ":" + systemDate.getSeconds() + " Hello!";

var socket = io.connect('http://localhost:8080/chat/1010?id=1010');

socket.on('connect',function(){
   console.log('connected...');
   socket.emit('MsgEvent',msg);
   console.log('sendMessage : ' + msg);
});

socket.on('bcMsg',function(data){
   console.log('recvMessage : ' + data);
});

socket.on('initMsg',function(data){
   console.log('recvMessage : ' + data);
});
