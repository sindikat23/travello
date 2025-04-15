import { SendOutlined } from '@ant-design/icons'
import React from 'react'
import Image from 'next/image'
import sub_decor from '@/assets/icons/sub-decor.png'
import vector from '@/assets/icons/vector.png'
import sub_decor2 from '@/assets/icons/sub-decor2.png'
import decor_plus from '@/assets/logo/decor-plus.png'
import { useTranslations } from 'next-intl'

const Subscribe = () => {
    const t = useTranslations()
  return (
    <div className='container mx-auto flex items-center justify-center py-20'>
        <div className='w-10/12 bg-[#dfd7f9bb] dark:bg-[#dfd7f959]  flex flex-col items-center justify-center py-25 rounded-[80px_10px_10px_10px] relative'>
            <h1 className='text-4xl font-semibold leading-10 px-16 py-6 text-center'>{t("sub_text")}</h1>
            <div className='flex gap-3 pt-10 items-center'>
                <label htmlFor="">
                    <input type="email" className='px-2 py-2.5 w-100 rounded-lg outline-0 bg-white text-black' placeholder='Your email'/>
                </label>
                <button className='bg-error rounded-lg px-3 py-2.5 active:bg-[#df6951b2] text-white openSans font-semibold'>
                    {t("sub_btn")}
                </button>
            </div>
            <div className='absolute bottom-0 left-2 -z-10'>
                <Image src={sub_decor} alt='decor' width={400}/>
            </div>
            <div className='absolute top-0 right-0 -z-10'>
                <Image src={sub_decor2} alt='decor' width={200}/>
            </div>
            <div className='absolute overflow-hidden flex items-center justify-center -top-4 -right-4 z-10 p-5 rounded-[50%] bg-[#5E3BE1]'>
                {/* <SendOutlined className='text-3xl text-white ' /> */}
                <Image src={vector} width={30}/>
            </div>
            <div className='absolute -bottom-20 -right-28 -z-10'>
                <Image src={decor_plus} alt='decor' width={200}/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe
