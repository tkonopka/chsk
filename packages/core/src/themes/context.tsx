import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import { createContext, ReactNode, useContext, useMemo } from 'react'
import { CompleteThemeSpec, ThemeSpec } from './types'
import { defaultTheme } from './defaultTheme'
import { mergeTheme } from './utils'

export const ThemeContext = createContext(defaultTheme as CompleteThemeSpec)

export const ThemeProvider = ({
    baseTheme,
    theme,
    children,
}: {
    baseTheme: CompleteThemeSpec
    theme?: ThemeSpec
    children: ReactNode
}) => {
    const mergedTheme = useMemo(
        () => mergeTheme(baseTheme, theme) as CompleteThemeSpec,
        [baseTheme, theme]
    )
    return (
        <ThemeContext.Provider value={mergedTheme}>
            <MotionConfig transition={mergedTheme.Transition.default}>
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </MotionConfig>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
