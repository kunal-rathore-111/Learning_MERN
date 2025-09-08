

import { useState } from "react";
import { PostComponent } from "./Post";
import { ToggleMessage } from "./ToggleMessage";
import './App.css'

const data1 = "THis is the data one where my typing speed is slow meooww meooww";
const data2 = "Udi baba apun toh giya reee dsa minor sab karna hae";

function App() {

  const [posts, addPost] = useState([{
    name: "Kunal - Rathore",
    subtitle: "12,334 followers",
    time: "2m",
    data: data1,
    img: "https://png.pngtree.com/png-clipart/20190611/original/pngtree-wolf-logo-png-image_2306634.jpg"
  }]);


  function addPostFunction(params) {
    addPost(newPosts => [...posts, {
      name: "Darshita - Rathore",
      subtitle: "2,019 followers",
      time: "60m",
      data: data2,
      img: "https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png"
    }]);
  }

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
    <button onClick={addPostFunction}>Add Post</button>

    <h1>Meoow Meoow</h1>

    <div style={{ height: "450px", overflowY: "auto"  }}>
      {posts.map((val) => <PostComponent
        name={val.name}
        subtitle={val.subtitle}
        time={val.name}
        data={val.data} >
      </PostComponent>)
      }
    </div>

  </div >
}



export default App;