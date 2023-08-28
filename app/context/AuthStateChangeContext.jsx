'use client'

import { onAuthStateChanged } from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "@app/firebase-config";

const AuthStateChangeContext = createContext()

export const AuthStateChangeContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [verifiedEmail, setVerifiedEmail] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                console.log(user)
                // I think this setUser state causes a delay in correct user value
                setUser(user)
                setVerifiedEmail(user.emailVerified)
                console.log(auth)
                console.log(user.uid)
            }
            else {
                console.log("User logged out.")
                setUser(null)
            }
            setLoading(false)
        })
        return () => unsubscribe()
    }, [user, user?.emailVerified])

    return (
        <AuthStateChangeContext.Provider value={[user, loading, verifiedEmail]}>{children}</AuthStateChangeContext.Provider>
    )
}

export const AuthStateChange = () => {
    return useContext(AuthStateChangeContext)
}
