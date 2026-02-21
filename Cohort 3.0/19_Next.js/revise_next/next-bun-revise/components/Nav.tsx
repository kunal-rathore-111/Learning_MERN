import Link from "next/link"


const Nav = () => {
    return <nav className="mt-10 mb-10">
        <div className="flex gap-10 justify-center">
            <Link href={'/'}>Home Page</Link>

            <Link href={'/server-dynamic-nested/username'}>server dynamic nested</Link>

            <Link href={'/server-dynamic-nested/username/blogs/xyz123?message=something Something'}>
                server dynamic nested [username] anyblog [id] ? message = ...</Link>

            <Link href={'/client-dynamic-nested/username'}>client dynamic nested</Link>

            <Link href={'/client-dynamic-nested/username/blogs/xyz123?message=nothing Nothing'}>client dynamic nested [username] blog anyblog [id] ? message= ...</Link>

            <Link href={'/catch-all-segment/hi'}>Catch all segments</Link>
            <Link href={'/server-data-fetch'}>server-data-fetch</Link>
            <Link href={'/suspense-data-fetch'}>suspense-data-fetch</Link>
            <Link href={'/fetch-data-sql'}>fetch-data-sql</Link>
            <Link href={'/fetch-data-sql-isr'}>fetch-data-sql-isr</Link>
            <Link href={'/get-email-notfound'}>get-email-notfound</Link>
        </div>
    </nav>
}

export default Nav;