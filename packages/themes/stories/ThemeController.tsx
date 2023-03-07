import { createElement, FC, useState } from 'react'
import { CompleteThemeSpec, ThemeSpec } from '@chsk/core'

export interface ThemeStory {
    /** id for chart */
    chartId: string
    /** theme */
    theme: ThemeSpec | null
    /** base theme */
    baseTheme?: CompleteThemeSpec | null
}

export const themeStoryChartProps = {
    size: [400, 300] as [number, number],
    padding: [40, 100, 60, 70] as [number, number, number, number],
}

export interface ThemeControllerProps {
    /** component that renders a chart */
    chart: FC<ThemeStory>
    /** string identifier for chart */
    chartId: string
    /** dictionary of themes */
    themes: Record<string, ThemeSpec>
    /** flag to provide themes to the baseTheme prop instead of the theme prop */
    baseTheme?: boolean
    /** first theme to display */
    start: string
}

export const ThemeController = ({
    chart,
    chartId,
    themes = {},
    baseTheme,
}: ThemeControllerProps) => {
    const themeNames = Object.keys(themes)
    const [theme, setTheme] = useState<ThemeSpec | null>(themes[themeNames[0]])
    const [selection, setSelection] = useState(0)

    const handleTheme0 = () => {
        setTheme(themes[themeNames[0]])
        setSelection(0)
    }
    const handleTheme1 = () => {
        setTheme(themes[themeNames[1]])
        setSelection(1)
    }

    const chartProps: ThemeStory = baseTheme
        ? { chartId, theme: null, baseTheme: theme as CompleteThemeSpec }
        : { chartId, theme }
    return (
        <div>
            <div className={'controller'}>
                <div className={'controller-label'}>Themes</div>
                {themeNames.length > 0 ? (
                    <button
                        onClick={handleTheme0}
                        className={'themeButton' + (selection == 0 ? ' selected' : '')}
                    >
                        {themeNames[0]}
                    </button>
                ) : null}
                {themeNames.length > 1 ? (
                    <button
                        onClick={handleTheme1}
                        className={'themeButton' + (selection == 1 ? ' selected' : '')}
                    >
                        {themeNames[1]}
                    </button>
                ) : null}
            </div>
            <div className={'controller-chart'}>
                <div className={'chart'}>{createElement(chart, chartProps)}</div>
            </div>
        </div>
    )
}
