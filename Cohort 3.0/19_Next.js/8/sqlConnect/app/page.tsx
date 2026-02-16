import Link from "next/link";

export default function HomePage() {

  return <div>

    <Link href={'/dynamic'}>Go to DYNAMIC</Link>
    <br />
    <Link href={'/static'}>Go to STATIC</Link>
    <br />
    <Link href={'/cache'}>Go to Cache</Link>
    <br />
    <Link href={'/not-found'}>Go to NotFound using notFound()  if you not add name= SOMETHING in searchParams</Link>
  </div>
}