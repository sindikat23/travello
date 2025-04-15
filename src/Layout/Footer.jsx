import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo/logo.png'
import facebook from '@/assets/icons/facebook.svg'
import instagram from '@/assets/icons/instagram.svg'
import twitter from '@/assets/icons/twitter.svg'
import plays from '@/assets/icons/GooglePlay.svg'
import playa from '@/assets/icons/PlayStore.svg'
import { useTranslations } from 'next-intl'


const Footer = () => {
  const t = useTranslations()
  return (
    <div className='container mx-auto pt-9'>
      <div>
        <div className='grid grid-cols-5 gap-5 py-8'>
          <div className='flex flex-col'>
            <div className="logo flex justify-center items-center dark:bg-gray-500 py-1 px-10 rounded-4xl">
              <Image src={logo} alt='travello' width={183} height={53} />
            </div>
            <p className='text-sm leading-5 py-4 text-secondary'>{t("fotter_text")}
            </p>
          </div>
          <div className='flex flex-col px-2'>
            <h1 className='text-2xl font-bold leading-7 mb-6'>{t("f_company")}</h1>
            <ul className='text-secondary'>
              <li>{t("f_about")}</li>
              <li className='py-2'>{t("f_careers")}</li>
              <li>{t("f_mobile")}</li>
            </ul>
          </div>
          <div className='flex flex-col px-2'>
            <h1 className='text-2xl font-bold leading-7 mb-6'>{t("f_contact")}</h1>
            <ul className='text-secondary'>
              <li>{t("f_help")}</li>
              <li className='py-2'>{t("f_press")}</li>
              <li>{t("f_affilates")}</li>
            </ul>
          </div>
          <div className='flex flex-col px-2'>
            <h1 className='text-2xl font-bold leading-7 mb-6'>{t("f_more")}</h1>
            <ul className='text-secondary'>
              <li>{t("f_airlinefees")}</li>
              <li className='py-2'>{t("f_airline")}</li>
              <li>{t("f_low")}</li>
            </ul>
          </div>
          <div className='flex flex-col pr-4'>
            <div className='flex gap-2'>
              <Image src={facebook} alt='facebook_icon' width={56} />
              <Image src={instagram} alt='instagram_icon' width={56} />
              <Image src={twitter} alt='twitter_icon' width={56} />
            </div>
            <h1 className='text-2xl font-medium text-secondary py-4'>{t("f_dis")}</h1>
            <div className='flex gap-2'>
              <Image src={plays} alt='play_market_icon' width={120} />
              <Image src={playa} alt='play_market_icon' width={120} />
            </div>
          </div>
        </div>
        <p className='text-center text-lg font-extralight py-2 text-secondary'>All rights reserved@jadoo.co</p>
      </div>
    </div>
  )
}

export default Footer
{/* All rights reserved@jadoo.co*/ }