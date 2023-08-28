'use client'

import Link from "next/link";
import SU_form from "../../components/SU_form";
import SU_Google from "@components/SU_Google";
import { AuthStateChange } from "@app/context/AuthStateChangeContext";
import Log_out from "@components/Log_out";

export default function sign_up() {

  const [user, loading] = AuthStateChange()

  return (

    <div className=''>
      {
        loading ? (
          <div className="flex min-h-screen flex-col items-center p-24">
            <h1>Loading...</h1>
          </div>
        ) : (!user) ? (
          <div>
            <div className="bg-primary flex px-4 lg:px-10 mb-16">
              <h1 className='font-montserrat font-medium text-white text-3xl'>medi<span className="text-secondary font-semibold">hub</span></h1>
            </div>
            <div className="border-2 border-borders rounded-xl mx-auto max-w-sm">
              <div className="flex flex-col gap-y-2 items-center py-4 px-4">
                <div className="flex flex-col justify-center w-full">
                  <div className="font-inter font-semibold text-primary text-2xl md:text-3xl flex justify-center mb-4">
                    <h1>Sign up</h1>
                  </div>
                  <div >
                    <hr className='text-black align-middle' />
                  </div>
                </div>
                <div className='flex flex-col justify-center w-full'>
                  <SU_form />
                  <p className='flex justify-center font-inter font-light text-sm'>or sing up with Google</p>
                  <SU_Google />
                </div>
                <hr className='w-full' />
                <div className='flex flex-col w-full'>
                  <Link className=' text-text' href='/log_in'>Already have an account? <span className='font-semibold text-primary hover:text-secondary'>Log in</span></Link>
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
