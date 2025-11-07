
import { WebSocketServer } from "ws";

const ws = new WebSocketServer({ port: 8080 });

ws.on('connection', function (socket) {
    console.log('userConnected');

    socket.on('message', (e) => {
        console.log(e.toString());
        if (e.toString() === 'ping') {
            socket.send('pong');
            return;
        }
        if (e.toString() === 'pong') {
            socket.send('ping');
            return;
        }
        else {
            socket.send("undefined");
            return;
        }
    })
})