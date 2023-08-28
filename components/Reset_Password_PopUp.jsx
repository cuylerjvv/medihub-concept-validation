'use client'

import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@app/firebase-config'

export default function Reset_Password_PopUp(props) {

    const [email, setEmail] = useState()

    const sendResetPasswordEmail = () => {

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Reset password send to: " + email)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div className='flex flex-col justify-center'>
            <div className="fixed inset-0 z-100 bg-black opacity-50 ">
            </div>
            <div className="fixed inset-y-0 inset-x-0 flex flex-col items-center z-102">
                <div className='bg-secondary rounded-lg shadow-md flex flex-col gap-y-4 mx-3 mt-16 px-2 md:px-6 lg:px-12 py-4 md:py-8 lg:py-16 max-w-md h-fit' >
                    <div className='flex flex-col gap-y-4'>
                        <h3 className=" font-poppins font-normal text-black text-2xl flex justify-center">Forgot password?</h3>
                        <hr className='text-black align-middle' />
                        <p className=" font-poppins font-normal text-black text-md flex justify-start">Enter email below to receive reset password email.</p>
                        <input
                            className="bg-gray-200 rounded-lg font-inter p-2"
                            type='email'
                            placeholder='Email'
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        ></input>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <button
                            className='font-inter flex justify-center bg-primary hover:bg-white text-white hover:text-black font-medium w-full py-2 px-2 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300'
                            onClick={sendResetPasswordEmail}>Send password reset email
                        </button>
                        <button
                            className='font-inter flex justify-center text-black font-medium hover:text-primary'
                            onClick={props.resetPasswordHandler}>Close
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}
