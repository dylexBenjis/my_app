'use client'
import React from 'react'
import { ThemeProvider } from "next-themes";


const ThemeModeProvider = (props:any) => {
  return (
      <ThemeProvider>
          {props.children}
    </ThemeProvider>
  )
}

export default ThemeModeProvider