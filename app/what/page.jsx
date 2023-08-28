import Link from "next/link"
import Nav_home_page from '@components/Nav_home_page'

export default function page() {
    return (
        <div>
            <Nav_home_page />
            <div className="flex min-h-screen flex-col items-center p-24">
                <h1>What is xyz: </h1>
                <p>Video explaining what xyz is and how it will work. </p>
                <Link href='/'>Back</Link>
            </div>
        </div>
    )
}
