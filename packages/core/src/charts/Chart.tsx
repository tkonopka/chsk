import { useEffect, useImperativeHandle, useRef, useState } from 'react'
import debounce from 'lodash/debounce'
import { ChartDataContextProps, ChartProps } from './types'
import { DimensionsProvider, SizeSpec, X, Y } from '../general'
import { defaultTheme, Style } from '../themes'
import { ChartDataProvider } from './contexts'

/**
 * Tried implementing this component with forwardRef so that usage could be <Chart ref={myRef} />.
 * However, that implementation caused trouble with storybook in docs mode.
 * The implementation using a prop fref is less elegant, but works in storybook.
 *
 */

export const Chart = ({
    id = 'chsk',
    size = [500, 400],
    padding = [40, 40, 40, 40],
    stretch = false,
    stretchExpansion = [0, 0],
    baseTheme = defaultTheme,
    theme,
    data = {},
    selectors,
    className,
    style,
    setRole = true,
    children,
    fref,
}: ChartProps) => {
    // book-keeping for internal chart state
    const [state, setState] = useState<ChartDataContextProps>({ ...data, id })

    // chart sizing
    const ref = useRef<SVGSVGElement>(null)
    const [chartSize, setChartSize] = useState<SizeSpec>(size)
    const debouncedSetChartSize = debounce(setChartSize, 100, { leading: true })

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

    // handle stretch sizing to fit parent container
    useEffect(() => {
        const parent = ref.current?.parentElement
        if (!stretch || !parent) return
        debouncedSetChartSize([parent.clientWidth, parent.clientHeight])
        const resizeObserver = new ResizeObserver(event => {
            const box = event[0]?.contentBoxSize[0]
            const boxSize: SizeSpec = [
                Math.round((box?.inlineSize ?? 0) + stretchExpansion[X]),
                Math.round((box?.blockSize ?? 0) + stretchExpansion[Y]),
            ]
            debouncedSetChartSize(boxSize)
        })
        resizeObserver.observe(parent)

        return () => {
            resizeObserver.unobserve(parent)
        }
    }, [])

    return (
        <svg
            id={id}
            xmlns="http://www.w3.org/2000/svg"
            width={chartSize[X]}
            height={chartSize[Y]}
            role={setRole ? 'chart' : undefined}
            style={style}
            className={className}
            ref={ref}
        >
            <Style ancestor={'#' + id} selectors={selectors} baseTheme={baseTheme} theme={theme}>
                <ChartDataProvider value={{ data: state, setData: setState }}>
                    <DimensionsProvider
                        key={'content'}
                        size={chartSize}
                        padding={padding}
                        role={setRole ? 'chart-content' : undefined}
                    >
                        {children}
                    </DimensionsProvider>
                </ChartDataProvider>
            </Style>
        </svg>
    )
}
