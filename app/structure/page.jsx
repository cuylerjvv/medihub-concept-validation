import Link from "next/link"

export default function Home() {
    return (
        <div>
            <div className="fixed top-0 left-0 z-10 w-full h-12 bg-primary text-white">
                <p>MediHub</p>
            </div>
            <div className="flex flex-row">
                <div className="sticky top-12 bg-emerald-300 h-full w-1/2">
                    <div className="relative">
                        <p className="flex justify-center h-48 text-white">Fixed</p>
                        <p className="flex justify-center h-48 text-white">Fixed</p>
                        <p className="flex justify-center h-48 text-white">Fixed</p>
                        <p className="flex justify-center h-48 text-white">Fixed</p>
                    </div>
                </div>
                <div className="bg-secondary mt-12 w-1/2 overscroll-contain">
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                    <div className="flex flex-col h-48">
                        <Link className="text-center" href='/feed'>Feed</Link>
                        <Link className="text-center" href='/profile'>Profile</Link>
                    </div>
                </div>
                <div className="sticky top-12 bg-emerald-300 h-full w-1/2">
                    <p className="flex justify-center h-48 text-white">Fixed</p>

                </div>
            </div>
        </div>

    )
}
