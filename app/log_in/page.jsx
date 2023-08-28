'use client'

import { useState } from 'react'
import Link from 'next/link'
import Log_in from '@components/Log_in'
import Log_in_Google from '@components/Log_in_Google' 
import { auth } from '@app/firebase-config'
import { AuthStateChange } from '@app/context/AuthStateChangeContext'
import Log_out from '@components/Log_out'
import Reset_Password_PopUp from '@components/Reset_Password_PopUp'

export default function page() {

    const [user, loading] = AuthStateChange()

    const [resetPasswordPopUp, setResetPasswordPopUp] = useState(false)

    console.log(resetPasswordPopUp)

    const resetPasswordHandler = () => {
        if (!resetPasswordPopUp) {
            console.log(resetPasswordPopUp)
            setResetPasswordPopUp(true)
            document.body.style.overflow = "hidden";
        }
        else {
            console.log(resetPasswordPopUp)
            setResetPasswordPopUp(false)
            document.body.style.overflow = "auto";
        }
    }

    return (
        <div className='pb-12'>
            {
                loading ? (
                    <div className="flex min-h-screen flex-col items-center p-24">
                        <h1>Loading...</h1>
                    </div>
                ) : (!user) ? (
                    <div>
                        {resetPasswordPopUp && <Reset_Password_PopUp resetPasswordHandler={resetPasswordHandler} />}
                        <div className="bg-primary flex px-4 lg:px-10 mb-16">
                            <h1 className='font-montserrat font-medium text-white text-3xl'>medi<span className="text-secondary font-semibold">hub</span></h1>
                        </div>
                        <div className="border-2 border-borders rounded-xl mx-auto max-w-sm">
                            <div className="flex flex-col gap-y-2 items-center py-4 px-4">
                                <div className="flex flex-col justify-center w-full">
                                    <div className=" font-inter font-semibold text-secondary text-2xl md:text-3xl flex justify-center mb-4">
                                        <h1>Login</h1>
                                    </div>
                                    <div >
                                        <hr className='align-middle' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <Log_in />
                                    <p className='flex justify-center text-text font-normal text-sm'>or log in with Google</p>
                                    <Log_in_Google />
                                </div>
                                <hr className='w-full' />
                                <div className='flex flex-col w-full'>
                                    <button
                                        className='flex text-primary font-semibold hover:text-secondary'
                                        onClick={resetPasswordHandler}>Forgot password?</button>
                                    <Link className=' text-text' href='/sign_up'>Not have an account yet? <span className='font-semibold text-primary hover:text-secondary'>Sign up</span></Link>
                                    <Link className=' text-text' href='/'>Go back to <span className='font-semibold text-primary hover:text-secondary'>home</span> page</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                ) : (
                    <div className="flex min-h-screen flex-col items-center p-24">
                        <h1>There is already a user logged in.</h1>
                        <br />
                        <Link href='/home'>Home</Link>
                        <Log_out />
                    </div>
                )
            }
        </div>
    )
}
