
/*
 Assignment #1 - Counter Application
Create a simple counter application that increments and decrements a number when buttons are clicked. The counter value should persist in local storage, so that when the page is refreshed, the counter value remains the same.
*/


import { Counter } from "./components/counter"

export default function App() {

    return <div>
        <Counter></Counter>
    </div>
}