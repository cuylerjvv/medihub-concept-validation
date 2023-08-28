import Link from "next/link"

export default function Feed() {
    return (
        <section className="flex min-h-screen flex-col items-center p-24">
            <Link href='/home'>Home</Link>
            <br></br>
            <div>Feed</div>


        </section>
    )
}
