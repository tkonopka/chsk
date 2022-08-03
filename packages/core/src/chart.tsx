import { ChartProps } from './types'
import { DimensionsProvider } from './general'
import { ScalesProvider } from './scales'
import { emptyTheme, Styles, ThemeProvider } from './themes'

const defaultChartProps: Pick<ChartProps, 'width' | 'height' | 'padding' | 'data' | 'styles'> = {
    width: 500,
    height: 400,
    padding: { top: 40, bottom: 40, left: 40, right: 40 },
    data: [],
    styles: ['typography', 'line', 'surface', 'shape'],
}

export const Chart = ({
    id = 'chask',
    width,
    height,
    data = defaultChartProps.data,
    padding = defaultChartProps.padding,
    scaleX,
    scaleY,
    theme = emptyTheme,
    styles = defaultChartProps.styles,
    children,
}: ChartProps) => {
    const dimsProps = { width, height, padding }

    return (
        <ThemeProvider theme={theme}>
            <DimensionsProvider {...dimsProps}>
                <ScalesProvider {...dimsProps} scaleX={scaleX} scaleY={scaleY}>
                    <svg
                        id={id}
                        xmlns="http://www.w3.org/2000/svg"
                        width={width}
                        height={height}
                        role={'chart'}
                    >
                        <Styles chartId={id} styles={styles ?? []} />
                        <g
                            role="chart-content"
                            transform={`translate(${padding.left},${padding.top})`}
                        >
                            {children}
                        </g>
                    </svg>
                </ScalesProvider>
            </DimensionsProvider>
        </ThemeProvider>
    )
}
