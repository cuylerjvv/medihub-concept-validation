'use client'

import React, { useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth'
import { auth } from '@app/firebase-config'
import { useRouter } from 'next/navigation'

export default function SU_form() {

    const router = useRouter()
    // const [name, setName] = useState()
    // const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signUp = (event) => {
        event.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential.user;

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log("Verification email send to: " + auth?.currentUser?.email)
                    });
                alert("Verification email sent. You will be redirected to login page. You will be able to login after you have verified your email.")
                signOut(auth)
                    .then(() => {

                    })
                return router.push('/log_in')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                alert(errorMessage)
            });
    };

    return (
        <div >
            <form onSubmit={signUp}>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex flex-col gap-y-1'>
                        <label
                            className=" font-inter font-medium text-medium flex justify-left"
                            htmlFor="email"
                        >Email</label>
                        <input
                            className="bg-gray-200 rounded-lg font-inter p-2"
                            placeholder='Email'
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}>
                        </input>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <label
                            className=" font-inter font-medium text-medium flex justify-left"
                            htmlFor="password"
                        >Password</label>
                        <input
                            className="bg-gray-200 rounded-lg font-inter p-2"
                            placeholder='Password'
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}></input>
                    </div>
                    <div className='flex flex-col'>
                        <button className='font-intfont-inter flex justify-center my-2 bg-secondary hover:bg-primary text-white hover:text-white font-medium w-full py-2 px-4 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300'>
                            Sign up</button>
                    </div>
                </div>
                {/* <label htmlFor="name">Name</label>
                <input
                    onChange={(event) => {
                        setName(event.target.value)
                    }}></input>
                <br />
                <label htmlFor="surname">Surname</label>
                <input
                    placeholder='Surname...'
                    onChange={(event) => {
                        setSurname(event.target.value)
                    }}></input>
                <br /> */}

            </form>
        </div>
    )
}
