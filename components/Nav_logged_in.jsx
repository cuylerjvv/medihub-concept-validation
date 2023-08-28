import Link from "next/link"
import Log_out from "./Log_out"

export default function Nav_logged_in() {
    return (
        <div className="sticky inset-0 w-full px-4 pt-2 pb-2 lg:px-10 bg-primary text-white">
            <div className="flex flex-row justify-between ">
                <div>
                    <Link href='/' className='font-poppins font-medium text-white text-2xl md:text-3xl'>medi<span className="text-secondary">hub</span></Link>
                </div>
                <div className="flex">
                    <Log_out />
                </div>
            </div>
        </div>
    )
}
