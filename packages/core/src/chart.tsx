import { ChartProps } from './types'
import { DimensionsProvider } from './general'
import { emptyTheme, ThemeProvider } from './themes'
import { ScalesProvider } from './scales'
import { Style } from './themes/style'

const defaultChartProps: Pick<ChartProps, 'width' | 'height' | 'margin' | 'data' | 'styles'> = {
    width: 500,
    height: 400,
    margin: { top: 40, bottom: 40, left: 40, right: 40 },
    data: [],
    styles: ['typography', 'line', 'surface', 'shape'],
}

export const Chart = ({
    id = 'chask',
    width,
    height,
    data = defaultChartProps.data,
    margin = defaultChartProps.margin,
    scaleX,
    scaleY,
    theme = emptyTheme,
    styles = defaultChartProps.styles,
    children,
}: ChartProps) => {
    const dimsProps = { width, height, margin }

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
                        <Style chartId={id} styles={styles ?? []} />
                        <g
                            role="chart-content"
                            transform={`translate(${margin.left},${margin.top})`}
                        >
                            {children}
                        </g>
                    </svg>
                </ScalesProvider>
            </DimensionsProvider>
        </ThemeProvider>
    )
}
