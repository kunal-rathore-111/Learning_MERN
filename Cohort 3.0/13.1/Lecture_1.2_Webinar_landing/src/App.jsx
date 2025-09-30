
import { Button } from "./components/button"
import { Input } from "./components/input"

export default function App() {

    return <>
        <div className="h-screen w-screen bg-blue-500 grid grid-cols-3 items-center">

            <div className="flex justify-center h-100 items-center  col-span-3 " >
                <div className="flex flex-col  justify-between h-100 items-center" >
                    <span className="flex text-2xl">
                        <h3 className="text-[#ffffff]">Webinar</h3>
                        <h3>.gg</h3>
                    </span>
                    <h3 className="text-xl">Verify your age</h3>
                    <h3 className="text-2xl">Please enter your email</h3>
                    <Input type={"email"} placeholder={'Enter your email'} />
                    <Button disabled={false}>Sign-Up</Button>
                </div>
            </div>
        </div>
    </>
}