import serverActionFunc from "./server.action";




export default function ServerActionComp() {

    return <div className="m-20 ">
        This is servercomp-server action form
        <form action={serverActionFunc} className="p-12" >
            <input type="text" name="username" placeholder="Enter your username" />
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
        </form>
    </div>
}