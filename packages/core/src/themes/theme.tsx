import { createContext, ReactNode, useContext } from 'react'
import { ThemeSpec } from './types'
import { defaultTheme } from './defaultTheme'

export const themeContext = createContext(defaultTheme as ThemeSpec)

export const ThemeProvider = ({ theme, children }: { theme: ThemeSpec; children: ReactNode }) => {
    const mergedTheme: ThemeSpec = theme

    return <themeContext.Provider value={mergedTheme}>{children}</themeContext.Provider>
}

export const useTheme = () => useContext(themeContext)
