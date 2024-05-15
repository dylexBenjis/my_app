'use client'
import React, { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { FaComputer } from 'react-icons/fa6';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {

      //for theme mode dark/light
  const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
    
    useEffect(() => {
            setMounted(true);//for theme to check if component is mounted so it can reach useTheme

    }, [])
    console.log(systemTheme, resolvedTheme, mounted)

    if (!mounted) {
        return <FaComputer />
    } 
    if (theme === 'system') {
        if (systemTheme === 'dark') {
            return <FaComputer onClick={() => setTheme('light')} />
        }else if (systemTheme === 'light') {
            return <FaComputer onClick={() => setTheme('dark')} />
        }
    } 

    if (resolvedTheme === 'light') {
        return <IoMoon onClick={() => setTheme('dark')} />
    }
    if (resolvedTheme === 'dark') {
        return <IoSunny onClick={() => setTheme('light')} />
    }
}

export default ThemeSwitch