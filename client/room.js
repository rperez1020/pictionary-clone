import { io } from "socket.io-client"
<<<<<<< HEAD
const production = process.env.NODE_ENV === "production"
const serverURL = production ? "realsite.com" : "http://localhost:3000"

const urlParams = new URLSearchParams(window.location.search)
const name = urlParams.get('name')
const roomId = urlParams.get('room-id')

console.log(name,roomId)

const socket = io(serverURL)
=======

const socket = io('http://localhost:3000')
>>>>>>> 2cfa6d331dfc5aa59ecfd0fc28e34f220bde3144

console.log(socket)