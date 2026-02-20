
interface dynamicUserComp {
    params: Promise<{ username: string, blogsId: string }>,
    searchParams: Promise<{ message: string }>
}
export default async function DynamicUsersComp({ params, searchParams }: dynamicUserComp) {

    const { username, blogsId } = await params;
    const message = (await searchParams).message;

    return <div className="flex flex-col gap-20">
        Hi from /server-dynamic-nested/[username]/blogs/[blogId]
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