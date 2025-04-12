import Image from 'next/image'
import React from 'react'
import london from '@/assets/images/londin.png'
import rim from '@/assets/images/rim.png'
import europa from '@/assets/images/europa.png'
import navigation from '@/assets/icons/Navigation.png'
import slim from '@/assets/logo/slim.png'
import { useTranslations } from 'next-intl'



const Destination = () => {
    const t =useTranslations()
    return (
        <div>
            <div className='container mx-auto py-4 px-18'>
                <div className='text-center'>
                    <p className='text-secondary font-medium text-2xl uppercase'>{t("top")}</p>
                    <h1 className='text-6xl volkhov font-bold capitalize py-4'>{t("top_title")}</h1>
                    <div className='grid grid-cols-3 py-10 gap-16 '>

                        <div className='col-span-1 bg-white dark:bg-[#59737ebd] rounded-2xl pb-6 shadow-gray-500 shadow-lg hover:scale-105 duration-700'>
                            <div className='w-full h-95 rounded-[20px_20px_0px_0px] overflow-hidden'>
                                <Image src={rim} alt='rim_picture' width={500} height={700} />
                            </div>
                            <div className='flex justify-between items-center p-4'>
                                <p>{t("rim")}</p>
                                <p>$5,42k</p>
                            </div>
                            <div className='px-4 flex items-center gap-6'>
                                <Image src={navigation} alt='navigation' />
                                <p>10 {t("day")}</p>
                            </div>
                        </div>

                        <div className='col-span-1 bg-white dark:bg-[#59737ebd] rounded-2xl pb-6 shadow-gray-500 shadow-lg hover:scale-105 duration-700'>
                            <div className='w-full h-95 rounded-[20px_20px_0px_0px] overflow-hidden'>
                                <Image src={london} height={900} alt='london' />
                            </div>
                            <div className='flex justify-between items-center p-4'>
                                <p>{t("london")}</p>
                                <p>$4.2k</p>
                            </div>
                            <div className='px-4 flex items-center gap-6'>
                                <Image src={navigation} alt='navigation' />
                                <p>12 {t("day")}</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='col-span-1 bg-white dark:bg-[#59737ebd] rounded-2xl pb-6 shadow-gray-500 shadow-lg hover:scale-105 duration-700'>
                                <div className='w-full h-95 rounded-[20px_20px_0px_0px] overflow-hidden'>
                                    <Image src={rim} width={500} height={700} alt='rim' />
                                </div>
                                <div className='flex justify-between items-center p-4'>
                                    <p>{t("euro")}</p>
                                    <p>$15k</p>
                                </div>
                                <div className='px-4 flex items-center gap-6'>
                                    <Image src={navigation} alt='navigation' />
                                    <p>28 {t("day")}</p>
                                </div>
                            </div>
                            <div className='absolute top-10 -right-22 -z-100'>
                                <Image src={slim} alt="decore" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination