import React, { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button'
import { useTheme } from './ThemeProvider'
import { Palette, ChevronDown } from 'lucide-react'

export function ThemeDropdown() {
  const { theme, setTheme, themes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleThemeSelect = (themeKey) => {
    setTheme(themeKey)
    setIsOpen(false)
  }

  return (
    <div className="relative " ref={dropdownRef}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 lg:min-w-[120px] md:min-w-[120px] justify-between"
      >
        <div className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <span className="text-sm hidden sm:inline">{themes[theme]?.name}</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform hidden sm:inline ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
          <div className="py-1">
            {Object.entries(themes).map(([key, themeData]) => (
              <button
                key={key}
                onClick={() => handleThemeSelect(key)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
                  theme === key ? 'bg-accent text-accent-foreground font-medium' : 'text-popover-foreground'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full border-2 ${
                    key === 'light' ? 'bg-blue-500 border-blue-500' :
                    key === 'dark' ? 'bg-slate-700 border-slate-700' :
                    key === 'ocean' ? 'bg-cyan-500 border-cyan-500' :
                    key === 'forest' ? 'bg-green-500 border-green-500' :
                    key === 'sunset' ? 'bg-orange-500 border-orange-500' :
                    key === 'purple' ? 'bg-purple-500 border-purple-500' :
                    key === 'rose' ? 'bg-pink-500 border-pink-500' :
                    key === 'mint' ? 'bg-emerald-400 border-emerald-400' : 'bg-gray-400 border-gray-400'
                  }`} />
                  {themeData.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}