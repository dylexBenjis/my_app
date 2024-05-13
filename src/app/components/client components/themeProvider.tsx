'use client'
import React from 'react'
import { ThemeProvider } from "next-themes";


const ThemeModeProvider = ({children}: any) => {
  return (
      <ThemeProvider>
          {children}
    </ThemeProvider>
  )
}

export default ThemeModeProvider