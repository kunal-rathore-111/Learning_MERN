import { useEffect, useState } from "react";

import axios from "axios";

// Use effect with dependency array 
function App() {

  const [currentTab, setCurrentTab] = useState(1);
  const [currentData, updateData] = useState([{}]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    (async () => {

      setLoading(true);

      console.log("in fetch")
      const Response = await axios({
        method: "GET",
        url: ("https://jsonplaceholder.typicode.com/todos/" + currentTab),
      });

      setLoading(false);

      console.log(Response.data);

      updateData(prevData => Response.data);
    })()

  }, [currentTab]);

  console.log("app re-render");
  return <div>
    <button onClick={function () { setCurrentTab(1) }} style={{ color: currentTab === 1 ? "red" : "black" }}> Tab #1</button>

    <button onClick={function () { setCurrentTab(2) }} style={{ color: currentTab === 2 ? "red" : "black" }}> Tab #2 </button>

    <button onClick={function () { setCurrentTab(3) }} style={{ color: currentTab === 3 ? "red" : "black" }}> Tab #3 </button>

    <button onClick={function () { setCurrentTab(4) }} style={{ color: currentTab === 4 ? "red" : "black" }} > Tab #4 </button>

    {loading ? <h2>Loading...</h2> : <div>{currentData.title}</div>}
  </div>


}

export default App;