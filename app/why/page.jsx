import Link from "next/link"
import Nav_home_page from '@components/Nav_home_page'

export default function page() {
    return (
        <div>
            <Nav_home_page />
            <div className="flex min-h-screen flex-col items-center p-24">
                <h1>Why you should sign up:</h1>
                <p>Video with testimonials explaining how they wish we existed when they did com serve.</p>
                <Link href='/'>Back</Link>
            </div>
        </div>
    )
}
