import React, { useEffect, useRef, useState } from "react"

export default function App() {

    const [messages, setMessages] = useState<string[]>([]);
    const [roomCount, updateRoomCount] = useState<number>(0);
    const mssgRef = useRef<HTMLInputElement | null>(null);
    const wsRef = useRef<WebSocket | null>(null);
    const roomRef = useRef<number | null>(null);

    function sendMessage() {
        const message = mssgRef?.current?.value;
        if (message) {
            const m = {
                type: 'chat',
                payload: {
                    roomId: roomRef?.current,
                    message
                }
            }
            wsRef?.current?.send(JSON.stringify(m));
            alert('Message sent');

        }
        else {
            alert("Message is empty");
        }
    }

    function ButtonComp({ id }: { id: number }) {

        function getToRoom(id: number) {
            roomRef.current = id;
            const message = {
                type: 'join',
                payload: {
                    roomId: id
                }
            }
            wsRef?.current?.send(JSON.stringify(message));
        }
        return <button onClick={() => { getToRoom(id) }} className="ring px-2 py-1">Room-{id}</button>
    }

    useEffect(() => {
        const ws = new WebSocket('ws://192.168.177.49:8080/');
        wsRef.current = ws;
        ws.onmessage = (e) => {
            const stringRes = e?.data.toString();
            const jsonRes = JSON.parse(stringRes);
            if (jsonRes?.type == 'chat') {
                setMessages(prev => [...prev, jsonRes?.message]);
            }
            if (jsonRes?.type == 'count') {
                updateRoomCount(jsonRes?.count);
            }
        }
        // function for removing the connection on page close or reload
        function handleClose() {
            ws.close();
        }

        window.addEventListener('beforeunload', handleClose);// calling handleClose when the window loads and close

        return () => {
            window.removeEventListener('beforeunload', handleClose);
        }

    }, []);

    return <div className="h-screen w-screen bg-emerald-400 flex justify-center gap-20">

        <section className="flex flex-col gap-12 justify-center">
            <ButtonComp id={1} />
            <ButtonComp id={2} />
            <ButtonComp id={3} />
        </section>
        <section className="flex flex-col items-center justify-center gap-9">
            <div className="border-3  h-[55vh] w-[50vw] flex flex-col rounded p-3 gap-4 overflow-y-scroll relative">
                <div className="w-full relative m-3">
                    <div className="absolute right-2">
                        Members Online- {roomCount}
                    </div>
                </div>

                {messages.map(m => {
                    return <div>{m}</div>
                })}

            </div>
            <div className="flex flex-col gap-3 items-center">
                <input className="ring-2 px-2 py-1 rounded" type="text" ref={mssgRef} placeholder="Message here..." />
                <span>  <button onClick={sendMessage} className="ring px-2 py-1 rounded-sm text-lg">Send</button></span>
            </div>
        </section>
    </div>
}
