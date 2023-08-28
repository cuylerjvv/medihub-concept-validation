
import Link from "next/link"

export default function Hero() {
    return (
        <div className="bg-secondary items-center flex flex-col gap-y-0 lg:gap-y-8 px-4 lg:px-6 pt-16 pb-12 md:pt-32 lg:pt-44 lg:pb-24">
            <div className="flex flex-col items-center gap-y-8 lg:gap-y-12 ">
                <h1 className="max-w-2xl text-center font-montserrat font-semibold text-5xl md:text-6xl lg:text-7xl text-white">Find your <span className="text-primary">perfect placement</span></h1>
                <p className="max-w-4xl text-center font-montserrat font-light md:text-lg lg:text-xl text-white">Easy-to-use platform that makes it simple to search for and connect with other medical professionals who are looking to swop placements.</p>
            </div>
            <div className="flex flex-col gap-y-3">
                <div className="flex flex-col md:flex-row mt-12 md:mt-6 gap-y-4 md:gap-x-6">
                    <Link href='/sign_up' className='font-montserrat flex justify-center border-2 border-primary bg-primary hover:bg-white hover:border-white text-white hover:text-primary font-semibold w-48 py-3 px-4 rounded-lg hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300'>Get started free</Link>
                    <Link href='/log_in' className='md:hidden font-inter flex justify-center border-2 border-primary hover:bg-blue-600 text-white font-semibold w-48 py-3 px-4 rounded-xl focus:outline-none focus:ring focus:ring-blue-300'>Log in</Link>
                </div>
                <div>
                    <p className="font-inter text-white">* No card required</p>
                </div>
            </div>
        </div>
    )
} 