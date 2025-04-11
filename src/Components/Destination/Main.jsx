import Image from 'next/image'
import React from 'react'

import header_girl from '@/assets/images/header_img_girl.png'
import pilot from '@/assets/images/pilot.png'
import play_icon from '@/assets/icons/play_icon.png'


const Main = () => {
    return (
        <div className='container mx-auto relative'>
            <div className='grid grid-cols-5 py-8'>
                <div className="left_header col-span-2 py-14">
                    <div className='flex items-center w-[545px] h-[40px]'>
                        <p className='text-error font-bold uppercase text-[19px]'>Best Destinations around the world</p>
                    </div>
                    <div className='flex items-center w-[570px] h-[300px]'>
                        <p className='text-main dark:text-white/50 text-7xl font-bold leading-[100px] tracking-tighter'>Travel, enjoy and live a new and full life</p>
                    </div>
                    <div className='flex items-center w-[530px] h-[120px] my-10'>
                        <p className='text-secondary font-medium text-[18px] leading-[36px]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    </div>
                    <div className='flex items-center justify-between w-[503px] h-[79px] my-10'>
                        <div>
                            <button className='py-4 px-5 text-xl text-white font-medium bg-[#F1A501] rounded-2xl'>Find out more</button>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <button className='p-5 text-xl font-medium bg-error shadow-[0px_0px_20px] shadow-error rounded-[500px]'><Image src={play_icon} width={16}/></button>
                            <p className='text-secondary text-xl'>Play Demo</p>
                        </div>
                    </div>
                </div>
                <div className="right_header col-span-3">
                    <div className='relative'>
                        <Image src={pilot} alt='pilot' width={100} className='absolute -z-2'/>
                        <Image src={pilot} alt='pilot' width={100} className='absolute right-10 -z-2 top-4 rotate-45'/>
                    </div>
                    <Image src={header_girl} alt='image' />
                </div>
            </div>
        </div>
    )
}

export default Main