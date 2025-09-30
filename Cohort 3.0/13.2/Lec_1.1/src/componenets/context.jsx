import { createContext, useState } from "react";


export const Theme = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    function changeMode() {
        document.documentElement.classList.toggle('dark');
        setMode(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }
    return <Theme.Provider value={{ mode, changeMode }}>{children}</Theme.Provider>
}