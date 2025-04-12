'use client'
import { MoonFilled, SunFilled } from "@ant-design/icons"
import { useTheme } from "next-themes"
import React from "react"

const DarkModeSwith = () => {
    const { theme, setTheme } = useTheme()
    console.log(theme);


    return (
        <div>
            <button onClick={()=>{
                if (theme == 'dark') {
                    setTheme('light')
                }
                else{
                    setTheme("dark")
                }                
            }} className="font-bold">{theme =='light' ? <MoonFilled  className="text-xl"/>:<SunFilled className="text-xl"/> }</button>
        </div>
    )
}

export default DarkModeSwith