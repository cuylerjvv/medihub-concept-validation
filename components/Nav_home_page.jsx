
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='max-md:hidden fixed w-full px-4 pt-4 pb-4 lg:px-10 bg-secondary'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row items-center'>
        <Link href='/' className='font-montserrat font-medium text-primary text-3xl'>medi<span className="text-white font-semibold">hub</span></Link>
        </div>
        <div className='flex gap-x-6'>
          <Link href='/log_in' className='font-inter flex justify-center border-2 border-primary  hover:border-white text-primary hover:text-white font-semibold w-24 py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300'><span>Log in</span></Link>
          <Link href='/sign_up' className='font-inter flex justify-center border-2 border-primary bg-primary hover:bg-white hover:border-white text-white hover:text-primary font-semibold w-28 py-2 px-4 rounded-lg hover:shadow-lg focus:outline-none focus:shadow'><span>Sign up</span></Link>
        </div>
      </div>
    </nav>
  )
}
