var express = require("express")
const app = express()
app.use(express.static('public'))
var server = app.listen(4000);
var io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
});

//app.use(express.static(path.join(__dirname+"/public")));
//io.on('connection',function(socket){
    //socket.on('user-joined',function(name){
       // console.log("new User", name);
     // socket.broadcast.emit('new-user-joined', name + "joined the conversation");
    //});
    users={};
    io.on('connection', function(socket){
        socket.on('new-user-joined', function(name){
            socket.broadcast.emit("update", name + " " + "join the conversation");
        });
    socket.on("exituser",function(name){
        socket.broadcast.emit("update", name + " " + "left the conversation");
      });
      socket.on("chat",function(message){
        socket.broadcast.emit("chat", message);
      });
});

//server.listen(5000);
//const io = require('socket.io')(3000)

//io.on('connection', socket => {
  //socket.on('send-chat-message', message => {
    //socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
  //})
//})

