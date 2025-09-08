import { useState, createContext, useContext } from "react"

// rolling up the state
// prop drilling -> passing states as props un-necessarily, 
// context api => provide way to pass states, functions instead passing as props (doesn't optimize the redering)

// intro to recoil->

const BulbContext = createContext();

function BulbContextProvider({ children }) {

  const [bulb, updateBulb] = useState(true);

  return <BulbContext.Provider value={{ bulb, updateBulb }}>
    {children}
  </BulbContext.Provider>

}

export default function App() {



  return <div>
    <BulbContextProvider >
      <LightBulb></LightBulb>
    </BulbContextProvider>
  </div>
}

const LightBulb = () => {

  return <div>
    <ShowBulb></ShowBulb>
    <ToggleBulb></ToggleBulb>
  </div>
}


const ShowBulb = () => {

  const { bulb } = useContext(BulbContext);

  return <div>
    {bulb ? "Bulb on" : "Bulb off"}
  </div>
}


const ToggleBulb = () => {

  const { updateBulb } = useContext(BulbContext);

  function toggle() {
    updateBulb(b => !b);
  }

  return <div>
    <button onClick={toggle}>Toggle bulb</button>
  </div>
}

