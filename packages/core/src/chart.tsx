import { ChartProps } from './types'
import { DimensionsProvider, LEFT, TOP, WIDTH, HEIGHT } from './general'
import { emptyTheme, Styles, ThemeProvider } from './themes'

export const Chart = ({
    id = 'chask',
    size = [500, 400],
    padding = [40, 40, 40, 40],
    theme = emptyTheme,
    styles = ['text', 'line', 'shape'],
    style,
    children,
}: ChartProps) => {
    const translate = 'translate(' + padding[LEFT] + ',' + padding[TOP] + ')'
    return (
        <ThemeProvider theme={theme}>
            <DimensionsProvider size={size} padding={padding}>
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
            </DimensionsProvider>
        </ThemeProvider>
    )
}
