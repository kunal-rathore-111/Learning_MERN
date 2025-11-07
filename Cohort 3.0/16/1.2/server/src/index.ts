import { WebSocketServer, WebSocket } from "ws";

const ws = new WebSocketServer({ port: 8080 });
interface AllSocketsInter {
    [roomId: string]: WebSocket[]
}
let roomToSocketMp = new Map<WebSocket, string>(); // a map to map the socket and roomId
let allSockets: AllSocketsInter = {};


function broadcastCount(roomId: string) {
    const count = allSockets[roomId]?.length;
    const message = JSON.stringify({
        type: 'count',
        count
    })
    allSockets[roomId]?.forEach((s) => s.send(message)); // send the count
}

ws.on('connection', (socket) => {
    console.log('user connected');

    socket.on('message', (message) => {

        const messageAsJSON = JSON.parse(message as unknown as string);

        // join logic
        if (messageAsJSON?.type == 'join') {
            const roomId = messageAsJSON?.payload?.roomId;

            console.log("Join request came for room " + roomId);
            // add in the allSockets in the corresponding room logic and then send connected


            if (allSockets[roomId]) {
                const oldRoomId = roomToSocketMp?.get(socket);
                if (oldRoomId) {
                    allSockets[oldRoomId] = allSockets[oldRoomId]?.filter((x) => x != socket) ?? [];//if socket already in any prev room it remove the socket from the prev room

                    broadcastCount(oldRoomId)//updating the prev room on the userLeft
                    roomToSocketMp.delete(socket) //remove the prev roomId from map
                }
                // store new roomId
                if (!allSockets[roomId].includes(socket)) allSockets[roomId].push(socket);
            }
            else allSockets[roomId] = [socket];

            broadcastCount(roomId); // sending the total no. of members in the room
            socket.send("Connected");
            roomToSocketMp.set(socket, roomId);// mapping that socket for removing on disconnection
        }
        // sending message logic
        if (messageAsJSON?.type == 'chat') {
            // then send the message from the payload to all the socket of that room
            const message = messageAsJSON?.payload?.message;
            const roomId = messageAsJSON?.payload?.roomId;
            console.log('user sending messsage ' + message);
            const m = JSON.stringify({
                type: 'chat',
                message
            })
            allSockets[roomId]?.forEach((x) => {
                if (x != socket) x.send(m);
            });
        }
    })

    socket.on('close', () => {
        console.log("user disconnected");
        const roomId = roomToSocketMp?.get(socket);
        if (!roomId) return;
        if (allSockets[roomId]) allSockets[roomId] = allSockets[roomId].filter((x) => x != socket); // removing that socket from room

        roomToSocketMp.delete(socket); // deleting that socket from the map too
        broadcastCount(roomId); // sending the total members in the room
    })
});

console.log("sever started");
