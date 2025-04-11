import Image from 'next/image'
import React from 'react'
import london from '@/assets/images/londin.png'
import rim from '@/assets/images/rim.png'
import europa from '@/assets/images/europa.png'
import navigation from '@/assets/icons/Navigation.png'
import slim from '@/assets/logo/slim.png'



const Destination = () => {
    return (
        <div>
            <div className='container mx-auto py-4 px-18'>
                <div className='text-center'>
                    <p className='text-secondary font-medium text-2xl uppercase'>Top Selling</p>
                    <h1 className='text-6xl volkhov font-bold capitalize py-4'>Top Destinations</h1>
                    <div className='grid grid-cols-3 py-10 gap-16 '>

                        <div className='col-span-1 bg-white dark:bg-[#59737ebd] rounded-2xl pb-6 shadow-gray-500 shadow-lg hover:scale-105 duration-700'>
                            <div className='w-full h-95 rounded-[20px_20px_0px_0px] overflow-hidden'>
                                <Image src={rim} width={500} height={700} />
                            </div>
                            <div className='flex justify-between items-center p-4'>
                                <p>Rome, Italty</p>
                                <p>$5,42k</p>
                            </div>
                            <div className='px-4 flex items-center gap-6'>
                                <Image src={navigation} />
                                <p>10 Days Trip</p>
                            </div>
                        </div>

                        <div className='col-span-1 bg-white dark:bg-[#59737ebd] rounded-2xl pb-6 shadow-gray-500 shadow-lg hover:scale-105 duration-700'>
                            <div className='w-full h-95 rounded-[20px_20px_0px_0px] overflow-hidden'>
                                <Image src={london} height={900} />
                            </div>
                            <div className='flex justify-between items-center p-4'>
                                <p>London, UK</p>
                                <p>$4.2k</p>
                            </div>
                            <div className='px-4 flex items-center gap-6'>
                                <Image src={navigation} />
                                <p>12 Days Trip</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='col-span-1 bg-white dark:bg-[#59737ebd] rounded-2xl pb-6 shadow-gray-500 shadow-lg hover:scale-105 duration-700'>
                                <div className='w-full h-95 rounded-[20px_20px_0px_0px] overflow-hidden'>
                                    <Image src={europa} width={500} height={700} className='object-cover' />
                                </div>
                                <div className='flex justify-between items-center p-4'>
                                    <p>Full Europe</p>
                                    <p>$15k</p>
                                </div>
                                <div className='px-4 flex items-center gap-6'>
                                    <Image src={navigation} />
                                    <p>28 Days Trip</p>
                                </div>
                            </div>
                            <div className='absolute top-20 -right-22 -z-10'>
                                <Image src={slim}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination