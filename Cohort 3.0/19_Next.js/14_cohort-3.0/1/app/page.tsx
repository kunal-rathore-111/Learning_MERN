/* 
"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"



export default function HomePage() {
return <div></div>

  return <div>
    HI there
    <SessionProvider><RealHome /></SessionProvider>
  </div>
}

function RealHome() {
return <div></div>
  const session = useSession();

  return <div>
    {session.status === "authenticated" ? <button onClick={() => signOut()}>SignOut</button> : <button onClick={() => signIn()}>SignIn</button>}
  </div>
} */

import { getServerSession } from "next-auth"


export default async function HomePage() {

  const session = await getServerSession();
  return <div>
    hi there
    <br />
    {JSON.stringify(session)}

  </div>
}