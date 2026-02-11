import Link from "next/link";



export default function React_Client_ServerPage() {
    return <div>
        <h1>This is the Server and client comp exploring route</h1>
        <ul className="grind grid-cols-2 gap-4">
            <li><Link href={'/react-client-server-comp/client-comp'}>Navigate to Client</Link></li>
            <li><Link href={'/react-client-server-comp/server-comp'}>Navigate to Server Comp</Link></li>
        </ul>
    </div>
}