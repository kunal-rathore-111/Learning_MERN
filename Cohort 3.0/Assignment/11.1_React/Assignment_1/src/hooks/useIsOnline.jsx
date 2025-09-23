

import { useState, useEffect } from "react";

export function useOnline() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function setOffline() {
            setIsOnline(false);
        }
        function setOnline() {
            setIsOnline(true);
        }

        window.addEventListener('offline', setOffline);
        window.addEventListener("online", setOnline);

        return () => {
            window.removeEventListener('offline', setOffline);
            window.removeEventListener('online', setOnline);
        }



    }, []);

    return { isOnline };
}