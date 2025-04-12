'use client'
import React from 'react'
import { redirect, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

const LangSwitch = () => {

    const locale = useLocale()
    
    const path = usePathname()

    const switchHandle = (param) => {
        console.log(param?.target?.value);
        redirect({locale:param?.target?.value, href:path})
    }

    return (
        <div>
            <select className='outline-0' onChange={switchHandle} value={locale}>
                <option value="uz" className='text-secondary dark:bg-white '>UZ</option>
                <option value="en" className='text-secondary dark:bg-white '>EN</option>
            </select>
        </div>
    )
}

export default LangSwitch