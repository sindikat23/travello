import Image from 'next/image'
import React from 'react'
import fast1 from '@/assets/icons/fast1.png'
import fast2 from '@/assets/icons/fast2.png'
import fast3 from '@/assets/icons/fast3.png'
import girl_trav from '@/assets/images/girl_trav.jpg'
import listok from '@/assets/icons/listok.svg'
import map from '@/assets/icons/map.svg'
import message from '@/assets/icons/message.svg'
import build from '@/assets/icons/build.svg'
import heart from '@/assets/icons/heart.svg'
import { useTranslations } from 'next-intl'

const Fast_blog = () => {
    const t =useTranslations()
    return (
        <div>
            <div className='container mx-auto py-8 px-18'>
                <div className='flex'>
                    <div className='w-1/2'>
                        <p className='text-secondary font-semibold text-2xl'>{t("fast")}</p>
                        <h1 className='text-5xl text-[#14183E] volkhov capitalize py-2'>{t("fast_book")}</h1>
                        <div className="flex items-center gap-4 py-5">
                            <div className='p-4 rounded-xl bg-[#F0BB1F]'>
                                <Image src={fast1} alt='icon' width={40} />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold leading-[125%]'>{t("fast_chose")}</h1>
                                <p className='text-xl font-extralight leading-[125%]'>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-5">
                            <div className='p-4 rounded-xl bg-error'>
                                <Image src={fast2} alt='icon' width={40} />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold leading-[125%]'>{t("fast_make")}</h1>
                                <p className='text-xl font-extralight leading-[125%]'>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-5">
                            <div className='p-4 rounded-xl bg-[#006380]'>
                                <Image src={fast3} alt='icon' width={40} />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold leading-[125%]'>{t("fast_reach")}</h1>
                                <p className='text-xl font-extralight leading-[125%]'>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-center items-center p-1'>
                        <div className='rounded-2xl shadow-2xl px-3 py-4 bg-white dark:bg-gray-950 relative'>
                        <div className='absolute p-30 shadow-[0px_0px_180px] bg-[#2da5f063] shadow-[#14a5ff] top-0 right-0 -z-20 rounded-[100%]'></div>
                            <div className='overflow-hidden rounded-2xl hover:scale-110 duration-1000'>
                                <Image src={girl_trav} alt='girl-image' className='w-full' />
                            </div>
                            <div className='py-4'>
                                <h1 className='text-2xl font-medium leading-[125%] tracking-wider py-2'>{t("fast_trip")}</h1>
                                <p className='text-lg font-extralight text-[#84829A] leading-[125%] pb-2'>14-29 {t("fast_data")}</p>
                            </div>
                            <div className='flex gap-2 py-4'>
                                <div className="flex items-center justify-center w-8 h-8 rounded-[100%] bg-[#F5F5F5] active:bg-[#f5f5f544]">
                                    <Image src={listok} alt='listok' width={16} />
                                </div>
                                <div className="flex items-center justify-center w-8 h-8 rounded-[100%] bg-[#F5F5F5] active:bg-[#f5f5f544]">
                                    <Image src={map} alt='map' width={16} />
                                </div>
                                <div className="flex items-center justify-center w-8 h-8 rounded-[100%] bg-[#F5F5F5] active:bg-[#f5f5f544]">
                                    <Image src={message} alt='message' width={16} />
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <Image src={build} alt='build' width={20} />
                                    <p className='text-sm font-extralight text-[#84829A] leading-[125%] py-2'>24 {t("fast_people")}</p>
                                </div>
                                <Image src={heart} alt='hert' width={20} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fast_blog