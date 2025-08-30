import { use, useEffect, useState } from "react";

/* function App() {

  return <div>
    <h1>hi</h1>
    <CreateButton></CreateButton>
  </div>
}

function CreateButton() {

  const [value, updateValue] = useState(0);

  function increaseCount() {
    updateValue(value + 1);
  }
  console.log("hi");

  function decreaseCount() {
    updateValue(value - 1);
  }

  return <div>
    <h2>{value}</h2>
    <button onClick={increaseCount}>
      Increase Count
    </button>

    <button onClick={decreaseCount}>
      Decrease Count
    </button>
  </div>
} */


// Conditional re-rendering
/* 
function App() {

  const [boolValue, modifyBool] = useState(true);

  useEffect(function () {
    const a = setInterval(() => {
      modifyBool(bV => !bV)
    }, 5000);

  }, [])

  return <div>
    <h2>hi</h2>
    {boolValue ? <Count></Count> : ""}
    <h2>hi</h2>
  </div>
}


function Count() {

  const [value, updateValue] = useState(0);

  console.log("Count");

  useEffect(() => {
    console.log("From useEffect")

    const a = setInterval(function () {
      console.log("From interval mount")
      updateValue(val => val + 1)
    },
      1000);

    // I need to end this interval on unmount
    return function () {
      console.log("From unmount");
      clearInterval(a);
    }
  }, [])


  return <div>
    <h2>{value}</h2>
  </div>
}
 */


// Relearning cleanup, useEffect, and learning dependency array
function App() {

  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  function increaseCount() {
    setValue(val => val + 1);
  }

  function decreaseCount() {
    setValue2(val2 => val2 - 1);
  }

  return <div>
    <Count count={value} count2={value2}></Count>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
  </div>

}

function Count(props) {

  useEffect(() => {
    console.log("ON mounting1");

    return function () {
      console.log("ON unmounting1");
    }

  }, []);

  useEffect(() => {
    console.log("ON mounting2");

    return function () {
      console.log("ON unmounting2"); // call after second time the value change to unmount the first value
    }
  }, [props.count]);


  return <div>
    <h2>Count1- {props.count}</h2>
    <h2>Count2- {props.count2}</h2>
  </div>
}





export default App;