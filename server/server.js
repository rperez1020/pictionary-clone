<<<<<<< HEAD
const production = process.env.NODE_ENV === 'production'
const clientUrl = production ? "realsite.com" : "http://localhost:1234"

=======
>>>>>>> 2cfa6d331dfc5aa59ecfd0fc28e34f220bde3144
const io = require('socket.io')(3000, {
    cors: {
        origin: 'http://localhost:1234'
    }
})

io.on('connection', socket =>{
    console.log("here")
}) 