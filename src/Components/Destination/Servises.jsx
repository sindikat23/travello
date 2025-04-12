import React from 'react'
import Image from 'next/image'
import decor_plus from '@/assets/logo/Decore_plus.png'
import calculate_icon from '@/assets/icons/Calculat_icon.png'
import custumization_icon from '@/assets/icons/Custumization_icon.png'
import fly_icon from '@/assets/icons/Fly_icon.png'
import local_icon from '@/assets/icons/Local_icon.png'
import pilot from '@/assets/images/pilot.png'
import { useTranslations } from 'next-intl'


const Servises = () => {
    const t =useTranslations()
    return (
        <div className='container mx-auto relative py-4'>
            <Image src={decor_plus} alt='decore' width={150} className='absolute top-0 right-0 -z-11' />
            <div className='text-center'>
                <p className='text-secondary font-medium text-2xl uppercase'>{t("category")}</p>
                <h1 className='text-6xl volkhov font-bold capitalize py-4 px-10'>{t("service")}</h1>
                <div className='grid grid-cols-4 py-10 gap-16'>

                    <div className='group relative'>
                        <div className='flex flex-wrap justify-center px-2 py-6 gap-6 hover:shadow-[0px_0px_10px] hover:scale-105 duration-1000 rounded-4xl bg-white dark:bg-gray-950'>
                            <div>
                                <Image src={calculate_icon} alt='service_icon' width={85} />
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <h1 className='py-2 text-[#1E1D4C] dark:text-secondary text-[24px] font-semibold'>{t("calculated")}</h1>
                                <p className='w-[210px] text-secondary text-[20px]'>{t("calculated_text")}</p>
                            </div>
                        </div>
                        <div className='p-10 bg-[#fff0] group-hover:bg-error absolute -bottom-10 -left-7 -z-10 rounded-[30px_5px_6px_0px] duration-1000'></div>
                    </div>

                    <div className='group relative'>
                        <div className='flex flex-wrap justify-center px-2 py-6 gap-6 hover:shadow-[0px_0px_10px] hover:scale-105 duration-1000 rounded-4xl bg-white dark:bg-gray-950'>
                            <div className='relative'>
                                <div className='p-7 bg-[#FFF1DA] rounded-[8px_8px_8px_20px] bottom-4 -right-6 absolute -z-1'></div>
                                <Image src={pilot} alt='service_icon' width={69} />
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <h1 className='py-2 text-[#1E1D4C] dark:text-secondary text-[24px] font-semibold'>{t("fly")}</h1>
                                <p className='w-[210px] text-secondary text-[20px]'>{t("fly_text")}</p>
                            </div>
                        </div>
                        <div className='p-10 bg-[#fff0] group-hover:bg-error absolute -bottom-10 -left-7 -z-10 rounded-[30px_5px_6px_0px] duration-1000'></div>
                    </div>

                    <div className='group relative'>
                        <div className='flex flex-wrap justify-center px-2 py-6 gap-6 hover:shadow-[0px_0px_10px] hover:scale-105 duration-1000 rounded-4xl bg-white dark:bg-gray-950'>
                            <div>
                                <Image src={custumization_icon} alt='service_icon' width={105} />
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <h1 className='py-2 text-[#1E1D4C] dark:text-secondary text-[24px] font-semibold'>{t("customization")} </h1>
                                <p className='w-[225px] text-secondary text-[20px]'>{t("customization_text")}</p>
                            </div>
                        </div>
                        <div className='p-10 bg-[#fff0] group-hover:bg-error absolute -bottom-10 -left-7 -z-10 rounded-[30px_5px_6px_0px] duration-1000'></div>
                    </div>

                    <div className='relative group'>
                        <div className='flex flex-wrap justify-center px-2 py-6 gap-6 hover:shadow-[0px_0px_10px] hover:scale-105 duration-1000 rounded-4xl bg-white dark:bg-gray-950'>
                            <div>
                                <Image src={local_icon} alt='service_icon' width={80} />
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <h1 className='py-2 text-[#1E1D4C] dark:text-secondary text-[24px] font-semibold'>{t("local")}</h1>
                                <p className='w-[225px] text-secondary text-[20px]'>
                                    {t("local_text")}
                                </p>
                            </div>
                        </div>
                        <div className='p-10 bg-[#fff0] group-hover:bg-error absolute -bottom-10 -left-7 -z-10 rounded-[30px_5px_6px_0px] duration-1000'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servises