
/* 
Assignment #1 - Create useIsOnline Custom Hook with contextAPI
*/

import { useOnline } from "./hooks/useIsOnline"

export default function App() {

    const { isOnline } = useOnline();

    return <div>
        {isOnline ? <h2>Online</h2> : <h2>Offline</h2>}
    </div>
}