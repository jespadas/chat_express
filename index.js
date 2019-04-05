const express = 'require'('express')
const app = express()

//set the template engine ejs
app.set('View engine','ejs')

//middlewares
app.use(express.static('public'))

//routes
app.get('/',(req,res))=>{
    res.send('index')
})

//listen on port 3000
server = app.listen(3000)

//socket.io instantiation
const io = require('socket.io')(server)

//listen on every connection
io.on('connection',(socket)=>{
    console.log('New user connected')
})