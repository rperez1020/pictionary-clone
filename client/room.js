import { io } from "socket.io-client"
const production = process.env.NODE_ENV === "production"
const serverURL = production ? "realsite.com" : "http://localhost:3000"

const urlParams = new URLSearchParams(window.location.search)
const name = urlParams.get('name')
const roomId = urlParams.get('room-id')

console.log(name,roomId)

const socket = io(serverURL)

console.log(socket)