
"use client"

import { use } from "react";

interface dynamicUserComp {
    params: Promise<{ username: string, blogsId: string }>,
    searchParams: Promise<{ message: string }>
}
export default function dynamicUsersComp({ params, searchParams }: dynamicUserComp) {

    const { username, blogsId } = use(params);


    return <div className="flex flex-col gap-20">
        Hi from client-dynamic-nested/[username]/blogs/[blogId]
        <br />
        <section>
            username={username}
            <br />
            blogsId={blogsId}
        </section>
    </div>
} 