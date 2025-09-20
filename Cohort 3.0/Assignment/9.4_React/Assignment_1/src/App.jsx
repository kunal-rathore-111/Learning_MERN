

/* 
Assignment #1 - Create a LinkedIn notification component that increases by 1 every 5 seconds.
*/

import React, { useEffect, useRef, useState } from "react"

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("Error caught", error, info);
    }
    render() {
        if (this.state.hasError) {
            return <h1> there's some error</h1>
        }
        return this.props.children;
    }
}


export default function App() {


    return <div>
        hi
        <ErrorBoundary>
            <LinkdinNotification></LinkdinNotification>
        </ErrorBoundary>
        by
    </div>
}


function LinkdinNotification() {

    const [notificationCount, setNotificationCount] = useState(0);

    const timer = useRef();

    useEffect(() => {
        console.log("useEffeect");

        throw new Error("error");
        timer.current = setInterval(() => {
            console.log("setInterval");

            setNotificationCount(notificationCount => notificationCount + 1);
        }, 5000);

        return function () {
            console.log("clear");
            clearInterval(timer.current);
        }
    }, []);

    return <div style={{ height: "200px", width: "200px", position: 'relative' }}>

        <img style={{ height: "200px" }} src="https://www.seekpng.com/png/detail/130-1304578_notification-comments-notification-icon-svg.png"></img>

        <span style={{ color: "red", position: 'absolute', fontSize: "45px", fontWeight: "bold", transform: "translate(-42px, 10px)" }}  >
            {notificationCount}
        </span>

    </div>
}