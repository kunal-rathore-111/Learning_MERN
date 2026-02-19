import Link from "next/link"


const Nav = () => {
    return <nav className="mt-10 mb-10">
        <div className="flex gap-10 justify-center">
            <Link href={'/'}>Home Page</Link>
            <Link href={'/server-dynamic-nested/username'}>server dynamic nested</Link>
            <Link href={'/server-dynamic-nested/username/blogs/xyz123'}>server dynamic nested [username] anyblog [id]</Link>
            <Link href={'/client-dynamic-nested/username'}>client dynamic nested</Link>
            <Link href={'/client-dynamic-nested/username/blogs/xyz123'}>client dynamic nested [username] blog anyblog [id]</Link>
        </div>
    </nav>
}

export default Nav;