import React from 'react'
import Image from 'next/image'
import decor_plus from '@/assets/logo/Decore_plus.png'
import calculate_icon from '@/assets/icons/Calculat_icon.png'
import custumization_icon from '@/assets/icons/Custumization_icon.png'
import fly_icon from '@/assets/icons/Fly_icon.png'
import local_icon from '@/assets/icons/Local_icon.png'
import pilot from '@/assets/images/pilot.png'


const Servises = () => {
    return (
        <div className='container mx-auto relative py-4'>
            <Image src={decor_plus} alt='decore' width={150} className='absolute top-0 right-0 -z-11' />
            <div className='text-center'>
                <p className='text-secondary font-medium text-2xl capitalize'>Category</p>
                <h1 className='text-6xl volkhov font-bold capitalize py-4'>We offer best services</h1>
                <div className='grid grid-cols-4 py-10 gap-16'>

                    <div className='group relative'>
                        <div className='flex flex-wrap justify-center px-2 py-6 gap-6 hover:shadow-[0px_0px_10px] hover:scale-105 duration-1000 rounded-4xl bg-white dark:bg-gray-950'>
                            <div>
                                <Image src={calculate_icon} alt='service_icon' width={85} />
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <h1 className='py-2 text-[#1E1D4C] dark:text-secondary text-[24px] font-semibold'>Calculated Weather </h1>
                                <p className='w-[210px] text-secondary text-[20px]'>Built Wicket longer admire do barton vanity itself do in it.</p>
                            </div>
                        </div>
                        <div className='p-10 bg-[#fff0] group-hover:bg-error absolute -bottom-10 -left-7 -z-10 rounded-[30px_5px_6px_0px] duration-1000'></div>
                    </div>

                    <div className='group relative'>
                        <div className='flex flex-wrap justify-center px-2 py-6 gap-6 hover:shadow-[0px_0px_10px] hover:scale-105 duration-1000 rounded-4xl bg-white dark:bg-gray-950'>
                            <div className='relative'>
                                <div className='p-7 bg-[#FFF1DA] rounded-[8px_8px_8px_25px] bottom-4 -right-6 absolute -z-1'></div>
                                <Image src={pilot} alt='service_icon' width={69} />
                            </div>
                            <div className='flex flex-wrap justify-center'>
                                <h1 className='py-2 text-[#1E1D4C] dark:text-secondary text-[24px] font-semibold'>Best Flights</h1>
                                <p className='w-[210px] text-secondary text-[20px]'>Engrossed listening. Park gate sell they west hard for the.</p>
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
                                <h1 className='py-2 text-[#1E1D4C] dark:text-secondary text-[24px] font-semibold'>Customization </h1>
                                <p className='w-[225px] text-secondary text-[20px]'>We deliver outsourced aviation services for military customers</p>
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
                                <h1 className='py-2 text-[#1E1D4C] dark:text-secondary text-[24px] font-semibold'>Local Events</h1>
                                <p className='w-[225px] text-secondary text-[20px]'>
                                    Barton vanity itself do in it. Preferd to men it engrossed listening.
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