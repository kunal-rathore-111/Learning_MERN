

import { PostComponent } from "./Post";
import { ToggleMessage } from "./ToggleMessage";
import './App.css'

const data1 = "THis is the data one where my typing speed is slow";
const data2 = "Udi baba apun toh giya reee dsa minor sab karna hae";

function App() {

  return <div style={{
    backgroundColor: "lightgrey",
    height: "100vh",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    gap: "10px",
    flexDirection: "column"
  }}>
    <ToggleMessage></ToggleMessage>

    <h1>Meoow Meoow</h1>

    <PostComponent name={"Kunal - Rathore"} subtitle={"12,334 followers"} time={"2m"} data={data1} img={"https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"}></PostComponent>
    <PostComponent name={"Darshita - Rathore"} subtitle={"promoted"} data={data2} img={"https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png"}></PostComponent>

  </div>
}



export default App;