import Link from "next/link"

export default function Navbar() {
    const navMenu = (
        <>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/blog/hello-world">Blog Post</Link>
                </li>
            </ul>
        </>
    )
    return (
        <>
            <nav>
                {navMenu}
            </nav>
        </>
    )
}
