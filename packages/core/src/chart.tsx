import { ChartProps } from './types'
import { DimensionsProvider, SurfaceStyles } from './general'
import { defaultTheme, ThemeProvider } from './themes'
import { TypographyStyles } from './typography'

const defaultChartProps: ChartProps = {
    width: 500,
    height: 400,
    margin: { top: 40, bottom: 40, left: 40, right: 40 },
    data: [],
    styles: ['typography', 'line', 'surface'],
    children: null,
}

export const Chart = ({
    width,
    height,
    data = defaultChartProps.data,
    margin = defaultChartProps.margin,
    theme = defaultTheme,
    styles = defaultChartProps.styles,
    children = defaultChartProps.children,
}: ChartProps) => {
    const styleLayers = styles
        ?.map(styleType => {
            if (styleType === 'typography') return <TypographyStyles key={'Style-typography'} />
            if (styleType === 'surface') return <SurfaceStyles key={'Style-surface'} />
            return null
        })
        .filter(layer => layer !== null)

    return (
        <ThemeProvider theme={theme}>
            <DimensionsProvider width={width} height={height} margin={margin}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={width}
                    height={height}
                    role={'chart'}
                >
                    {styleLayers}
                    <g transform={`translate(${margin.left},${margin.top})`}>{children}</g>
                </svg>
            </DimensionsProvider>
        </ThemeProvider>
    )
}
