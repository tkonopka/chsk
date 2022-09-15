import { useImperativeHandle, useState } from 'react'
import { domAnimation, LazyMotion } from 'framer-motion'
import { ChartDataContextProps, ChartProps } from './types'
import { DimensionsProvider, HEIGHT, LEFT, TOP, WIDTH } from '../general'
import { emptyTheme, Styles, ThemeProvider } from '../themes'
import { ChartDataProvider } from './contexts'

/**
 * Tried implementing this with forwardRef so that usage could be <Chart ref={myref} />
 * However, that implementation caused troubled with storybook in docs mode.
 * The implementation using a prop fref is less elegant, but works in storybook.
 *
 */

export const Chart = ({
    id = 'chask',
    size = [500, 400],
    padding = [40, 40, 40, 40],
    theme = emptyTheme,
    data = {},
    styles = ['circle', 'line', 'path', 'polygon', 'rect', 'text', 'g'],
    style,
    children,
    fref,
}: ChartProps) => {
    // book-keeping for internal chart state
    const [state, setState] = useState<ChartDataContextProps>({ ...data, id })

    // API to manipulate state from outside the chart
    useImperativeHandle(fref, () => ({
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
                    <LazyMotion features={domAnimation}>
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
                    </LazyMotion>
                </ChartDataProvider>
            </DimensionsProvider>
        </ThemeProvider>
    )
}
