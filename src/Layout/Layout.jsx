"use client"
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'



const Layout = ({ children }) => {
    const [state, setstate] = useState(false)
    useEffect(() => {
        setstate(true)

    });
    if (!state) return null;
    return (
        <ThemeProvider attribute={'class'} defaultTheme='class'>
            <Navbar/>
            {children}
            <h1>Footer</h1>
        </ThemeProvider>
    )
}

export default Layout