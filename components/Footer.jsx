import Link from "next/link"

export default function Footer() {
  return (
      <footer className="bg-secondary h-12 flex justify-center">
        <div className="flex">
        <Link href='/' className='font-poppins font-medium text-white text-xl md:text-2xl my-auto'>medi<span className="text-primary font-semibold">hub</span></Link>
        </div>
      </footer>

  )
}
