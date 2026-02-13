import Link from "next/link";

export default function HomePage() {

  return <div className="text-2xl">
    Hi from home page
    <br />
    This app for catchall segments in nextjs (nested routes in one route or folder)
    <br />
    <Link href={'/blogs/xyz'}>CLick to explore slug</Link>

  </div>
}
