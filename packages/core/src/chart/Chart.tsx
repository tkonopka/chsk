import { useState } from 'react'
import { ChartProps } from './types'
import { DimensionsProvider, LEFT, TOP, WIDTH, HEIGHT } from '../general'
import { emptyTheme, Styles, ThemeProvider } from '../themes'
import { ChartDataProvider } from './contexts'

export const Chart = ({
    id = 'chask',
    size = [500, 400],
    padding = [40, 40, 40, 40],
    theme = emptyTheme,
    data = {},
    styles = ['text', 'line', 'shape', 'path'],
    style,
    children,
}: ChartProps) => {
    const [state, setState] = useState(data)
    const translate = 'translate(' + padding[LEFT] + ',' + padding[TOP] + ')'
    return (
        <ThemeProvider theme={theme}>
            <DimensionsProvider size={size} padding={padding}>
                <ChartDataProvider value={{ data: state, setData: setState }}>
                    <svg
                        id={id}
                        xmlns="http://www.w3.org/2000/svg"
                        width={size[WIDTH]}
                        height={size[HEIGHT]}
                        role={'chart'}
                        style={style}
                    >
                        <Styles chartId={id} styles={styles ?? []} />
                        <g role="chart-content" transform={translate}>
                            {children}
                        </g>
                    </svg>
                </ChartDataProvider>
            </DimensionsProvider>
        </ThemeProvider>
    )
}
