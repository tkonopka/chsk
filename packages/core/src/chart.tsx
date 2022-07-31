import { ChartProps } from './types'
import { DimensionsProvider, SurfaceStyles } from './general'
import { emptyTheme, ThemeProvider } from './themes'
import { TypographyStyles } from './typography'
import { LineStyles } from './lines'
import { ScalesProvider } from './scales'

const defaultChartProps: Pick<ChartProps, 'width' | 'height' | 'margin' | 'data' | 'styles'> = {
    width: 500,
    height: 400,
    margin: { top: 40, bottom: 40, left: 40, right: 40 },
    data: [],
    styles: ['typography', 'line', 'surface'],
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
    const styleLayers = styles
        ?.map(styleType => {
            if (styleType === 'typography')
                return <TypographyStyles key={'Style-typography'} id={id} />
            if (styleType === 'surface') return <SurfaceStyles key={'Style-surface'} id={id} />
            if (styleType === 'line') return <LineStyles key={'Style-line'} id={id} />
            return null
        })
        .filter(layer => layer !== null)

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
                        {styleLayers}
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
