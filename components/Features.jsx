import Image from "next/image"
import infoIcon from '@app/images/info.png'
import homeIcon from '@app/images/home.png'
import communityIcon from '@app/images/community.png'

export default function Features() {
    return (
        <div className=" pt-12 px-4 xl:px-32">
            <div className="columns-1 md:columns-3 md:gap-4 lg:gap-12">
                <div className=" flex flex-col gap-y-3 border-borders border-2 rounded-2xl md:h-80 xl:h-64 pt-8 px-4 lg:px-6 mb-16 max-md:pb-12">
                    <div className='flex flex-row gap-x-4 lg:gap-x-8 items-center'>
                        <Image
                            src={communityIcon}
                            alt='community-icon'
                            width={44}
                            height={44}
                        />
                        <h1 className="font-poppins font-semibold text-primary text-xl lg:text-2xl">Community support</h1>
                    </div>
                    <p className="font-inter text-text">Easily connect with peers in the community. Mutual help and support one another lays the path to shared achievements.</p>
                </div>
                <div className="border-borders border-2 rounded-2xl md:h-80 lg:h-64 pt-8 px-4 lg:px-6 flex flex-col gap-y-3 mb-16 max-md:pb-12">
                    <div className='flex flex-row gap-x-4 lg:gap-x-8 items-center'>
                        <Image
                            src={infoIcon}
                            alt='info-icon'
                            width={38}
                            height={38}
                        />
                        <h1 className="font-poppins font-semibold text-primary text-xl lg:text-2xl lg-md:w-36 ">Information hub</h1>
                    </div>
                    <p className="font-inter text-text">No more searching, posting, and missing information on platforms such as Facebook and WhatsApp. Welcome to a convenient hub where information is easily accessible.</p>
                </div>
                <div className="border-borders border-2 rounded-2xl md:h-80 lg:h-64 pt-8 px-4 lg:px-6 flex flex-col gap-y-3 mb-16 max-md:pb-12">
                    <div className='flex flex-row gap-x-4 lg:gap-x-8 items-center'>
                        <Image
                            src={homeIcon}
                            alt='home-icon'
                            width={38}
                            height={38}
                        />
                        <h1 className="font-poppins font-semibold text-primary text-xl lg:text-2xl">Verified accommodation</h1>
                    </div>
                    <p className="font-inter text-text">Discover peace of mind with a handpicked selection of trustworthy and verified accommodations.</p>
                </div>
            </div>
        </div>
    )
}
