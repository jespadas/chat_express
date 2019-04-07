const express = require('express');
const index = express();

//set the template engine ejs
index.set('View engine','ejs');

//middlewares
index.use(express.static('public'));

//routes
index.get('/',(req, res)=>{
    res.send('index')
});

//listen on port 3000
server = index.listen(3000);

//socket.io instantiation
const io = require('socket.io')(server);

//listen on every connection
io.on('connection',(socket)=>{
    console.log('New user connected')
});