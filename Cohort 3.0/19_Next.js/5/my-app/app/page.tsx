import Link from "next/link";

export default function HomePage() {
  return <div>
    Hi from HOme page, exploring search params in nextjs

    <br />
    <Link href={'/search-params'}>Click to go to search-params Page</Link>
    <br />
    <Link href={'/use-search'}>Click to go to use-search-inClientComponent Page</Link>
    <br />
    <Link href={'/search-params-using-use-api'}>Click to go to search-params-using-use-api Page</Link>
  </div>
}