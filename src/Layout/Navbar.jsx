"use client"
import React from 'react'
import DarkModeSwith from './DarkModeSwith'
import Image from 'next/image'
import logo from "@/assets/logo/logo.png";
import decore_l from '@/assets/logo/decore_light.png'
import decore_n from '@/assets/logo/decore_night.png'
import { useTheme } from 'next-themes';
import LangSwitch from './LangSwitch';
import { useTranslations } from 'next-intl';

const Navbar = () => {

  const t = useTranslations()
  const {theme} = useTheme()
  console.log(theme);
  

  return (
    <div>
      <div className='relative container mx-auto'>
        {
          theme == 'light' ? 
          <Image src={decore_l} alt='decore' width={750} height={750} className='absolute top-0 right-0 -z-10' /> : 
          <Image src={decore_n} alt='decore' width={750} height={750} className='absolute top-0 right-0 -z-10' />
        }
        {/* <Image src={theme == 'dark' ? decore_n : decore_l} alt='decore' width={750} className='absolute top-0 right-0 -z-10' /> */}
        <div className='flex justify-between items-center py-10'>
          <div className="logo dark:bg-gray-500 px-4 py-2 rounded-4xl">
            <Image src={logo} alt='travello' width={183} height={53} />
          </div>
          <div className="links">
            <ul className='flex items-center gap-10 font-bold'>
              <li className='hover:border-gray-700 hover:border-[0px_0px_1px_0px] cursor-pointer'>{t("Desitnations")}</li>
              <li className='hover:border-gray-700 hover:border-[0px_0px_1px_0px] cursor-pointer'>{t("Hotels")}</li>
              <li className='hover:border-gray-700 hover:border-[0px_0px_1px_0px] cursor-pointer'>{t("Flights")}</li>
              <li className='hover:border-gray-700 hover:border-[0px_0px_1px_0px] cursor-pointer'>{t("Bookings")}</li>
            </ul>
          </div>
          <div className="layouts flex justify-evenly items-center gap-10 px-4">
            <DarkModeSwith />
            <LangSwitch/>
            <button>Login</button>
            {/* <select className='outline-0'>
              <option value="uz" className='text-secondary dark:bg-white '>UZ</option>
              <option value="uz" className='text-secondary dark:bg-white '>EN</option>
            </select> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar