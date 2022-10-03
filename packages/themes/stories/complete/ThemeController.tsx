import { createElement, FC, useState } from 'react'
import { ThemeSpec } from '@chask/core'

export interface ThemeStory {
    /** id for chart */
    chartId: string
    /** theme */
    theme: ThemeSpec | null
}

export interface ThemeControllerProps {
    /** component that renders a chart */
    chart: FC<ThemeStory>
    /** string identifier for chart */
    chartId: string
    /** dictionary of themes */
    themes: Record<string, ThemeSpec>
    /** first theme to display */
    start: string
}

export const ThemeController = ({ chart, chartId, themes = {} }: ThemeControllerProps) => {
    const themeNames = Object.keys(themes)
    const [theme, setTheme] = useState<ThemeSpec | null>(themes[themeNames[0]])

    const handleTheme0 = () => {
        setTheme(themes[themeNames[0]])
    }
    const handleTheme1 = () => {
        setTheme(themes[themeNames[1]])
    }

    return (
        <div>
            <div className={'controller'}>
                <div className={'controller-label'}>Themes</div>
                {themeNames.length > 0 ? (
                    <button onClick={handleTheme0} className={'themeButton'}>
                        {themeNames[0]}
                    </button>
                ) : null}
                {themeNames.length > 1 ? (
                    <button onClick={handleTheme1} className={'themeButton'}>
                        {themeNames[1]}
                    </button>
                ) : null}
            </div>
            <div className={'controller-chart'}>
                <div className={'chart'}>
                    {createElement(chart, {
                        chartId,
                        theme,
                    })}
                </div>
            </div>
        </div>
    )
}
