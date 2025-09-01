

import './App.css'

const data1 = "THis is the data one where my typing speed is slow";
const data2 = "Udi baba apun toh giya reee dsa minor sab karna hae";

function App() {
  return <div style={{ backgroundColor: "lightgrey", height: "100vh", display: "flex", justifyContent: 'center', alignItems: 'center', gap: "10px", flexDirection: "column" }}>

    <h1>Meoow Meoow</h1>

    <PostComponent name={"Kunal - Rathore"} subtitle={"12,334 followers"} time={"2m"} data={data1} img={"https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"}></PostComponent>
    <PostComponent name={"Darshita - Rathore"} subtitle={"promoted"} data={data2} img={"https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png"}></PostComponent>

  </div>
}

function PostComponent(props) {

  return <div style={{ width: "350px", height: "180px", border: "3px red solid", backgroundColor: "whitesmoke", borderRadius: "10px" }}>

    <div style={{ display: "flex", margin: "10px", gap: "10px" }}>
      <img src={props.img} style={{ width: "45px", height: "45px", borderRadius: "50%", border: "2px solid black" }} />

      <div>
        <b>{props.name}</b>
        <p style={{ margin: "0px" }}>{props.subtitle}</p>

        {props.time ?
          <p style={{ margin: "0px", alignItems: 'center', display: 'flex' }}>
            {props.time}
            <img src="https://www.shutterstock.com/image-vector/vector-illustration-two-oclock-icon-260nw-2209885727.jpg" style={{ height: "20px", width: "20px" }} />
          </p> : null
        }

      </div>
    </div>
    <div >
      <p style={{ fontSize: "16 px", margin: "7px" }}>{props.data}</p>
    </div>
  </div >
}

export default App
// style={{ height: "20px", width: "20px" }}}