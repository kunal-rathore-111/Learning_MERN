import { useContext, useState } from "react"
import { Link } from "react-router-dom";

import { HomeIcon, WebinarIcon, BillingIcon, UsermanagementIcon, ModeDarkIcon, ModeLightIcon } from "./icons/sideBarIcon";
import { Theme, ThemeContextProvider } from "./context";

export const SideBar = () => {

    const [toogle, setToggle] = useState(true);


    const navItems = [
        { to: "/", label: "Home", Icon: HomeIcon },
        { to: "/", label: "Webinars", Icon: WebinarIcon },
        { to: "/", label: "Billing", Icon: BillingIcon },
        { to: "/", label: "Users", Icon: UsermanagementIcon }
    ]

    return <>
        <ThemeContextProvider>
            <div
                className={`bg-white-400 dark:bg-gray-400  transition-all duration-500  
            position-sticky ${toogle ? "w-24" : "w-36"} 
            flex flex-col
            items-center justify-between`}
                onMouseEnter={() => setToggle(false)}
                onMouseLeave={() => setToggle(true)}
            >
                <ButtonToChangeMode />

                <div
                    className={`${toogle ? "w-1/2" : "w-full"} transition-all duration-500 flex flex-col gap-12 items-center bg-white py-12 
                rounded-3xl font-[600] `}
                >
                    {navItems.map(({ to, label, Icon }) => {
                        return <Link to={to}
                            className="h-12">
                            {toogle ? <Icon /> : <span>{label}</span>}
                        </Link>
                    })}
                </div>
                <button className="border-2 rounded px-2 cursor-pointer mb-8 mx-1">
                    <b>{toogle ? "." : "_"}</b>
                </button>
            </div>
        </ThemeContextProvider>
    </>


}

const ButtonToChangeMode = () => {
    const { mode, changeMode } = useContext(Theme);

    return <button onClick={changeMode} className="mt-8 cursor-pointer">
        {mode == 'dark' ? <ModeLightIcon /> : <ModeDarkIcon />}
    </button>

}