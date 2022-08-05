import { ChartProps } from './types'
import { DimensionsProvider } from './general'
import { emptyTheme, Styles, ThemeProvider } from './themes'

export const Chart = ({
    id = 'chask',
    width = 500,
    height = 400,
    padding = { top: 40, bottom: 40, left: 40, right: 40 },
    theme = emptyTheme,
    styles = ['typography', 'line', 'shape'],
    children,
}: ChartProps) => {
    const dimsProps = { width, height, padding }
    return (
        <ThemeProvider theme={theme}>
            <DimensionsProvider {...dimsProps}>
                <svg
                    id={id}
                    xmlns="http://www.w3.org/2000/svg"
                    width={width}
                    height={height}
                    role={'chart'}
                >
                    <Styles chartId={id} styles={styles ?? []} />
                    <g role="chart-content" transform={`translate(${padding.left},${padding.top})`}>
                        {children}
                    </g>
                </svg>
            </DimensionsProvider>
        </ThemeProvider>
    )
}
