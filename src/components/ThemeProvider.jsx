import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

const themes = {
  light: {
    name: 'Light',
    class: 'theme-light'
  },
  dark: {
    name: 'Dark', 
    class: 'theme-dark'
  },
  ocean: {
    name: 'Ocean',
    class: 'theme-ocean'
  },
    forest: {
    name: 'Forest',
    class: 'theme-forest'
  },
  sunset: {
    name: 'Sunset',
    class: 'theme-sunset'
  },
  purple: {
    name: 'Purple',
    class: 'theme-purple'
  },
  rose: {
    name: 'Rose',
    class: 'theme-rose'
  },
  mint: {
    name: 'Mint',
    class: 'theme-mint'
  }
}

export function ThemeProvider({ children, defaultTheme = 'ocean', ...props }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove all theme classes
    Object.values(themes).forEach(t => {
      root.classList.remove(t.class)
    })
    
    // Add current theme class
    root.classList.add(themes[theme].class)
  }, [theme])

  const value = {
    theme,
    setTheme,
    themes
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}