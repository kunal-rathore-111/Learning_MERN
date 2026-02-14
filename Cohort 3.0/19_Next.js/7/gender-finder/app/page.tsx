"use client"

import Link from "next/link";

export default function HomePage() {
  return <div className="flex flex-col gap-10">
    <h1><Link href={'/data-fetch'}>Link to data-fetch</Link></h1>
    <h1><Link href={'/data-fetch-client-comp'}>Link to data-fetch-client-comp</Link></h1>
  </div>
}