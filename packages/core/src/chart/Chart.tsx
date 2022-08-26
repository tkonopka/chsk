import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react'
import { ChartProps, ChartRef } from './types'
import { DimensionsProvider, LEFT, TOP, WIDTH, HEIGHT } from '../general'
import { emptyTheme, Styles, ThemeProvider } from '../themes'
import { ChartDataProvider } from './contexts'

const ChartComponent = (
    {
        id = 'chask',
        size = [500, 400],
        padding = [40, 40, 40, 40],
        theme = emptyTheme,
        data = {},
        styles = ['circle', 'line', 'path', 'polygon', 'rect', 'text', 'g'],
        style,
        children,
    }: ChartProps,
    ref: ForwardedRef<ChartRef>
) => {
    // book-keeping for internal chart state
    const [state, setState] = useState(data)
    useImperativeHandle(ref, () => ({
        updateData(d) {
            setState({ ...state, ...d })
        },
        toggleMilestone(milestone: string) {
            const milestones = state?.milestones ?? new Set<string>()
            if (milestones.has(milestone)) {
                milestones.delete(milestone)
            } else {
                milestones.add(milestone)
            }
            setState({ ...state, milestones })
        },
    }))

    // rendering
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

export const Chart = forwardRef<ChartRef, ChartProps>(ChartComponent)
