import Link from "next/link";

export default function HomePage() {

    return <div className="flex flex-col gap-20">
        <h2 className="text-2xl">Hi from client revalidate</h2>
        <Link href="/client-redirect"> Go to client-redirect route</Link>
        <Link href="/server-redirect-revalidateOnDemand"> Go to server-redirect revalidateOnDemand route</Link>
    </div>
}