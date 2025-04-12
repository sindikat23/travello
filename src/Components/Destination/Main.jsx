import Image from 'next/image'
import React from 'react'

import header_girl from '@/assets/images/header_img_girl.png'
import pilot from '@/assets/images/pilot.png'
import play_icon from '@/assets/icons/play_icon.png'
import { useTranslations } from 'next-intl'


const Main = () => {
    const t =useTranslations()
    return (
        <div className='container mx-auto relative'>
            <div className='grid grid-cols-5 py-8'>
                <div className="left_header col-span-2 py-14">
                    <div className='flex items-center w-[545px] h-[40px]'>
                        <p className='text-error font-bold uppercase text-[19px]'>{t('text_main_best')}</p>
                        {/* <p className='text-error font-bold uppercase text-[19px]'>Best Destinations around the world</p> */}
                    </div>
                    <div className='flex items-center w-[570px] h-[400px]'>
                        <p className='text-main dark:text-white/50 text-7xl font-bold leading-[100px] tracking-tighter'>{t("text_main_travel")}</p>
                    </div>
                    <div className='flex items-center w-[530px] h-[170px] my-10'>
                        <p className='text-secondary font-medium text-[18px] leading-[36px]'>{t("text_main_build")}</p>
                    </div>
                    <div className='flex items-center justify-between w-[503px] h-[79px] my-10'>
                        <div>
                            <button className='py-4 px-5 text-xl text-white font-medium active:bg-[#f1a50170]  bg-[#F1A501] rounded-2xl'>{t("main_btn_find")}</button>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <button className='p-5 text-xl font-medium active:bg-[#ec7c60b2] bg-error shadow-[0px_0px_20px] shadow-error rounded-[500px]'><Image src={play_icon} alt='icon' width={16}/></button>
                            <p className='text-secondary text-xl'>{t("main_btn_plat")}</p>
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