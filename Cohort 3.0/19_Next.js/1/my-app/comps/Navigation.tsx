import Link from "next/link";

export default function Navigation() {
    return <header>
        <nav className="flex gap-5">
            <span>Logo</span>
            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/details">Details</Link>
                </li>
            </ul>
        </nav>
    </header>
}