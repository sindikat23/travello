"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Navbar from './Navbar'



const Layout = ({ children }) => {
    return (
        <ThemeProvider attribute={'class'} defaultTheme='class'>
            <Navbar/>
            {children}
            <h1>Footer</h1>
        </ThemeProvider>
    )
}

export default Layout