'use client'

import React, { useState } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '@app/firebase-config'
import { useRouter } from 'next/navigation'
import { AuthStateChange } from '@app/context/AuthStateChangeContext'

export default function Log_in() {

    const router = useRouter()
    const user = AuthStateChange()
    const verifiedEmail = AuthStateChange()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logIn = (event) => {
        event.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                if (auth.currentUser.emailVerified === false) {
                    alert("Email has not been verified.")
                    console.log('Email not verified: ' + auth?.currentUser?.email)
                    signOut(auth)
                        .then(() => {

                        })
                }
                else {
                    console.log('User logged in: ' + user?.email)
                    router.push('/home')
                }
            })
            .catch((err) => {
                console.log(err) 
                alert(err)
            })
    }

    return (
        <div >
            <form onSubmit={logIn}>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex flex-col gap-y-1'>
                        <label
                            className="text-primary font-inter font-medium text-medium flex justify-left"
                            htmlFor='email'>Email</label>
                        <input
                            className="bg-gray-200 rounded-lg font-inter p-2"
                            type='email'
                            placeholder='Email'
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}></input>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <label
                            className="text-primary font-inter font-medium text-medium flex justify-left"
                            htmlFor='text'>Password</label>
                        <input
                            className="bg-gray-200 rounded-lg font-inter p-2"
                            type='password'
                            placeholder='Password'
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}></input>
                    </div>
                    <div>
                        <button 
                        type='submit'
                        className='font-inter flex justify-center my-2 bg-primary hover:bg-secondary text-white hover:text-white font-medium w-full py-2 px-4 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300'
                        >Log in</button>
                    </div>
                </div>
            </form>
        </div>
    )
} 
