
"use client"

import { useSearchParams } from "next/navigation";
import { use } from "react";

interface dynamicUserComp {
    params: Promise<{ username: string, blogsId: string }>,
    searchParams: Promise<{ message: string }>
}
export default function DynamicUsersComp({ params, searchParams }: dynamicUserComp) {

    const { username, blogsId } = use(params);
    //const message = useSearchParams().get('message');
    const message = use(searchParams).message;

    return <div className="flex flex-col gap-20">
        Hi from client-dynamic-nested/[username]/blogs/[blogId]
        <br />
        <section>
            username={username}
            <br />
            blogsId={blogsId}
        </section>
        {message &&
            <section>
                Message is- {message}
            </section>
        }

    </div>
} 