
interface dynamicUserComp {
    params: Promise<{ username: string, blogsId: string }>,
    searchParams: Promise<{ message: string }>
}
export default async function dynamicUsersComp({ params, searchParams }: dynamicUserComp) {

    const { username, blogsId } = await params;


    return <div className="flex flex-col gap-20">
        Hi from /server-dynamic-nested/[username]/blogs/[blogId]
        <br />
        <section>
            username={username}
            <br />
            blogsId={blogsId}
        </section>
    </div>
} 