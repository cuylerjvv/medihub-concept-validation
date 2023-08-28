'use client'

import Link from "next/link"
import Log_out from "@components/Log_out"
import { AuthStateChange } from "@app/context/AuthStateChangeContext"

export default function profile() {

    const [user, loading] = AuthStateChange()

    console.log(user)
    console.log(loading)

    return (
        <section >
            {loading ? (
                <div className="flex min-h-screen flex-col items-center p-24">
                    <h1>Loading...</h1>
                </div>
            ) : (!user ? (
                <div className="flex min-h-screen flex-col items-center p-24">
                    <p>You need to be logged in to see this page.</p>
                    <Link href='/'>Back</Link>
                </div>
            ) : (
                <div className="flex min-h-screen flex-col items-center p-24">
                    <Link href='/home'>Home</Link>
                    <Log_out />
                    <br></br>

                    <div >
                        {/* The ? makes sure that when the app reloads on the profile page (user will be undefined initially)
                the app does not crash. The value of user is the set when the connection has been made and in the useEffect
                function in the context API runs. */}
                        {user?.email}
                    </div>
                </div>
                )
            )}
        </section>
    )
}
