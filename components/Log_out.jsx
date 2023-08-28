'use client'

import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"
import { AuthStateChange } from "@app/context/AuthStateChangeContext"
import { auth } from "@app/firebase-config"

export default function Log_out() {

  const router = useRouter()
  const user = AuthStateChange()

  const logOut = () => {

    signOut(auth)
      .then(() => {
        console.log('User logged out: ' + user?.email)
        return router.push('/')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div className="my-auto">
      <button
        className='font-inter flex justify-center text-white font-medium hover:text-secondary'
        onClick={logOut}>Log out</button>
    </div>
  )
}
