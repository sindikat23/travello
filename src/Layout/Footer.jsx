import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo/logo.png'
import facebook from '@/assets/icons/facebook.svg'
import instagram from '@/assets/icons/instagram.svg'
import twitter from '@/assets/icons/twitter.svg'
import plays from '@/assets/icons/GooglePlay.svg'
import playa from '@/assets/icons/PlayStore.svg'


const Footer = () => {
  return (
    <div className='container mx-auto pt-10'>
      <div className='grid grid-cols-5 gap-5 py-10'>
        <div className='flex flex-col'>
          <div className="logo flex justify-center items-center dark:bg-gray-500 py-1 px-10 rounded-4xl">
            <Image src={logo} alt='travello' width={183} height={53} />
          </div>
          <p className='text-sm leading-5 py-4 text-secondary'>Book your trip in minute, get full
            Control for much longer.
          </p>
        </div>
        <div className='flex flex-col px-2'>
          <h1 className='text-2xl font-bold leading-7 mb-6'>Company</h1>
          <ul className='text-secondary'>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div className='flex flex-col px-2'>
          <h1 className='text-2xl font-bold leading-7 mb-6'>Contact</h1>
          <ul className='text-secondary'>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
          </ul>
        </div>
        <div className='flex flex-col px-2'>
          <h1 className='text-2xl font-bold leading-7 mb-6'>More</h1>
          <ul className='text-secondary'>
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
        <div className='flex flex-col pr-4'>
          <div className='flex gap-2'>
            <Image src={facebook} alt='facebook_icon' width={56}/>
            <Image src={instagram} alt='instagram_icon' width={56}/>
            <Image src={twitter} alt='twitter_icon' width={56}/>
          </div>
          <h1 className='text-2xl font-medium text-secondary py-4'>Discover our app</h1>
          <div className='flex gap-2'>
          <Image src={plays} alt='play_market_icon' width={120}/>
          <Image src={playa} alt='play_market_icon' width={120}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
{/* <div className="logo dark:bg-gray-500 px-4 py-2 rounded-4xl">
            <Image src={logo} alt='travello' width={183} height={53} />
          </div> */}