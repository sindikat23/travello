import Image from 'next/image'
import React from 'react'
import axon from '@/assets/images/axon.svg'
import jetstar from '@/assets/images/jetstar.svg'
import expedia from '@/assets/images/expedia.svg'
import qantas from '@/assets/images/qantas.svg'
import alitalia from '@/assets/images/alitalia.svg'


const Company = () => {
    return (
        <div className='container mx-auto py-30'>
            <div className='flex items-center justify-evenly'>
                <div className="flex justify-center items-center overflow-hidden w-40 h-10 hover:shadow-2xl hover:scale-110 duration-700 dark:bg-secondary rounded-lg">
                    <Image src={axon} alt='company' width={100} />
                </div>
                <div className="flex justify-center items-center overflow-hidden w-40 h-10 hover:shadow-2xl hover:scale-110 duration-700 dark:bg-secondary rounded-lg">
                    <Image src={jetstar} alt='company' width={100} />
                </div>
                <div className="flex justify-center items-center overflow-hidden w-40 h-10 hover:shadow-2xl hover:scale-110 duration-700 dark:bg-secondary rounded-lg">
                    <Image src={expedia} alt='company' width={100} />
                </div>
                <div className="flex justify-center items-center overflow-hidden w-40 h-10 hover:shadow-2xl hover:scale-110 duration-700 dark:bg-secondary rounded-lg">
                    <Image src={qantas} alt='company' width={100} />
                </div>
                <div className="flex justify-center items-center overflow-hidden w-40 h-10 hover:shadow-2xl hover:scale-110 duration-700 dark:bg-secondary rounded-lg">
                    <Image src={alitalia} alt='company' width={100} />
                </div>
            </div>
        </div>
    )
}

export default Company