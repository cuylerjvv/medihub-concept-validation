import Link from "next/link"
import Nav_home_page from '@components/Nav_home_page'

export default function page() {
    return (
        <div>
            <Nav_home_page />
            <div className="flex min-h-screen flex-col items-center p-24">
                <h1>About: </h1>
                <p>Video explaining why we are trying to do what we are trying to do. </p>
                <Link href='/'>Back</Link>
            </div>
        </div>
    )
}
