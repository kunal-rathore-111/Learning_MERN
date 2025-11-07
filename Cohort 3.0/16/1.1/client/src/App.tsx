import { useEffect, useRef } from "react"


export default function App() {
  const messageRef = useRef<HTMLInputElement | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  function sendFunc() {
    if (!wsRef.current) {
      alert("not connected");
      return;
    }
    const message = messageRef.current?.value;
    wsRef.current.send(message ? message : '');
  }

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    wsRef.current = socket;

    socket.onmessage = (e) => {
      alert(e.data);
    }
  }, [])

  return (
    <div className="h-screen w-screen bg-slate-400 flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <input type="text" ref={messageRef} placeholder="Message..." className="pl-2 ring ring-white" />
        <span>
          <button className="ring px-2" onClick={() => { sendFunc(); }}>
            Send
          </button>
        </span>
      </div>
    </div >)
}
