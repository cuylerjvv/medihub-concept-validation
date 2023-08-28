
import Link from "next/link"

export default function Nav_mobile() {

    return (
        <nav className="md:hidden bg-primary px-4 pt-2 pb-2 lg:px-6 ">
            <div className="flex flex-col">
                <div className="flex flex-row justify-left">
                    <div className='flex items-center'>
                    <Link href='/' className='font-poppins font-medium text-white text-3xl'>medi<span className="text-secondary">hub</span></Link>
                    </div>
                    {/* <div className='flex flex-row gap-x-2 font-inter font-medium text-white text-lg'>
                        <Link href='/log_in' className='align-middle font-inter hover:border-white text-white hover:text-black font-semibold rounded-xl focus:outline-none focus:ring focus:ring-blue-300'>Log in</Link>
                        <Link href='/sign_up' className='font-inter flex justify-center border-2 border-white hover:bg-white hover:border-white text-white font-semibold py-1 px-1 rounded-xl shadow-md focus:outline-none focus:ring focus:ring-blue-300'><span>Sign up</span></Link>
                    </div> */}
                </div>
            </div >

        </ nav >
    )
}
