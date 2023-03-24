import {
    Chart,
    ContainerProps,
    Axis,
    AxisLabel,
    AxisLine,
    AxisTicks,
    GridLines,
    ThemeSpec,
    Tooltip,
    WithId,
    SvgElementVariantProps,
    InteractivityProps,
    DataComponentProps,
    useTooltip,
    useDimensions,
    CssProps,
    useChartData,
    TooltipProvider,
    TooltipData,
    TooltipDataItem,
} from '@chsk/core'
import { BandSurface, Bar, Bars, BarsLabels } from '@chsk/band'
import { generateKeyValues } from './generators'
import { MilestoneStory } from '../types'
import { createElement, MouseEvent, ReactNode, useCallback, useState } from 'react'
import { clone, merge } from 'lodash'
import { InsetColorFilter } from '@chsk/annotation'

const multiviewIds = ['A', 'B', 'C', 'D', 'E', 'F']

export const generateMultiViewsData = () => [
    generateKeyValues(
        { id: 'A', alpha: 75 + Math.floor(Math.random() * 15) },
        ['beta', 'gamma'],
        [5, 80]
    ),
    generateKeyValues(
        { id: 'B', alpha: 60 + Math.floor(Math.random() * 15) },
        ['beta', 'gamma'],
        [5, 80]
    ),
    generateKeyValues(
        { id: 'C', alpha: 50 + Math.floor(Math.random() * 10) },
        ['beta', 'gamma'],
        [5, 80]
    ),
    generateKeyValues(
        { id: 'D', alpha: 30 + Math.floor(Math.random() * 10) },
        ['beta', 'gamma'],
        [5, 80]
    ),
    generateKeyValues(
        { id: 'E', alpha: 10 + Math.floor(Math.random() * 5) },
        ['beta', 'gamma'],
        [5, 80]
    ),
    generateKeyValues(
        { id: 'F', alpha: 5 + Math.floor(Math.random() * 5) },
        ['beta', 'gamma'],
        [5, 80]
    ),
]

const multiviewTheme: ThemeSpec = {
    rect: {
        bandSurface: {
            fill: '#f2f2f2',
        },
        'tooltip.surface': {
            fill: '#ffffff',
            strokeWidth: 1,
            stroke: '#161616',
            opacity: 1,
        },
    },
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 2,
        },
    },
    text: {
        axisLabel: {
            textAnchor: 'start',
            dominantBaseline: 'auto',
            fontWeight: 600,
        },
        barLabel: {
            textAnchor: 'start',
            fill: '#ffffff',
            pointerEvents: 'none',
        },
        'barLabel.out': {
            fill: '#222222',
        },
        tooltipItem: {
            fill: '#000000',
        },
    },
    Tooltip: {
        default: {
            itemSize: [120, 26],
        },
    },
}

const multiviewBarProps = {
    variant: 'stacked' as const,
    horizontal: true,
    scaleIndex: {
        variant: 'band' as const,
        domain: multiviewIds,
        padding: 0.2,
        paddingOuter: 0.1,
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 100] as [number, number],
    },
}

// custom DataComponent that mostly reproduces TooltipDataComponent from @chsk/core,
// but also sets an 'activeId' into the global chart state
const GlobalHoverDataComponent = <
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
>({
    component,
    data,
    props,
    handlers,
    modifiers,
}: DataComponentProps<DataSpec, ComponentProps>) => {
    const { setData: setTooltipData } = useTooltip()
    const { data: chartData, setData: setChartData } = useChartData()
    const { ref } = useDimensions()
    const [componentStyle, setComponentStyle] = useState<CssProps | undefined>(props.style)
    const [key, setKey] = useState(0)
    const style = props.style
    if (!setChartData) return null

    const handleTooltip = useCallback(
        (event: MouseEvent) => {
            const clientRect = ref?.current?.getBoundingClientRect()
            if (clientRect === undefined || data === undefined || data === null) return
            if (!('data' in data)) return
            const x = Math.round(event.clientX - clientRect?.x)
            const y = Math.round(event.clientY - clientRect?.y)
            setTooltipData({ x, y, data: [data] })
        },
        [data, ref, setTooltipData]
    )

    const handleMouseEnter = useCallback(
        (event: MouseEvent) => {
            handleTooltip(event)
            setChartData({ ...chartData, activeId: data?.id })
            handlers?.onMouseEnter?.(data, event)
            if (modifiers?.onMouseEnter) {
                setComponentStyle(merge(clone(style), modifiers.onMouseEnter))
                setKey(key => key + 1)
            }
        },
        [data, handleTooltip, handlers, modifiers, style, setComponentStyle, key, setKey]
    )
    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            handleTooltip(event)
            handlers?.onMouseMove?.(data, event)
            if (modifiers?.onMouseMove) {
                setComponentStyle(merge(clone(style), modifiers.onMouseMove))
                setKey(key => key + 1)
            }
        },
        [data, handleTooltip, handlers, modifiers, style, setComponentStyle, key, setKey]
    )
    const handleMouseLeave = useCallback(
        (event: MouseEvent) => {
            setTooltipData({})
            setChartData({ ...chartData, activeId: undefined })
            handlers?.onMouseLeave?.(data, event)
            if (modifiers?.onMouseLeave) {
                setComponentStyle(merge(clone(style), modifiers.onMouseLeave))
                setKey(key => key + 1)
            }
        },
        [data, handleTooltip, handlers, modifiers, style, setComponentStyle, key, setKey]
    )
    const handleClick = useCallback(
        (event: MouseEvent) => {
            handlers?.onClick?.(data, event)
            if (modifiers?.onClick) {
                setComponentStyle(merge(clone(style), modifiers.onClick))
                setKey(key => key + 1)
            }
        },
        [data, handlers, modifiers, style, setComponentStyle, key, setKey]
    )

    return createElement(component, {
        ...props,
        key,
        style: componentStyle,
        onMouseEnter: handleMouseEnter,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onClick: handleClick,
    })
}

// custom React layer that transfers information from chart context to a tooltip context
const ActiveIdTooltipProvider = ({ children }: { children: ReactNode }) => {
    const { data: chartData } = useChartData()
    const { data: tooltipData, setData } = useTooltip()
    // set tooltip data with priority: existing tooltip info, info from chart data, empty object
    let compositeData: TooltipData = {}
    if (chartData.activeId) {
        compositeData = { data: [{ id: String(chartData.activeId) }] }
    }
    if (tooltipData.x !== undefined) {
        compositeData = tooltipData
    }
    return <TooltipProvider value={{ data: compositeData, setData }}>{children}</TooltipProvider>
}

const customTooltipLabel = (x: TooltipDataItem) => {
    return x?.key + ', ' + x?.id + ': ' + x?.data
}

export const MultipleViewsBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    const containerA: ContainerProps = {
        size: [0.333, 1],
        position: [0, 0],
        positionUnits: 'relative',
    }
    const containerB: ContainerProps = {
        size: [0.333, 1],
        position: [0.35, 0],
        positionUnits: 'relative',
    }
    const containerC: ContainerProps = {
        size: [0.333, 1],
        position: [0.7, 0],
        positionUnits: 'relative',
    }
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="multiview"
            size={[600, 280]}
            padding={[40, 40, 40, 60]}
            theme={multiviewTheme}
        >
            <InsetColorFilter id={'darker'} floodColor={'#000000'} erodeR={0} floodOpacity={0.5} />
            <Bar container={containerA} {...multiviewBarProps} data={rawData} keys={['alpha']}>
                <ActiveIdTooltipProvider>
                    <BandSurface
                        tooltip={true}
                        interactive={true}
                        expansion={[0, 8]}
                        dataComponent={GlobalHoverDataComponent}
                    />
                </ActiveIdTooltipProvider>
                <GridLines variant={'y'} shift={[-0.6]} />
                <Axis variant={'top'}>
                    <AxisLine variant={'top'} />
                    <AxisLabel variant={'top'} anchor={0} offset={10}>
                        Alpha
                    </AxisLabel>
                </Axis>
                <Axis variant={'bottom'} ticks={[]} />
                <Bars
                    dataComponent={GlobalHoverDataComponent}
                    modifiers={{ onMouseEnter: { filter: 'url(#darker)' }, onMouseLeave: {} }}
                />
                <BarsLabels showOuter={true} align={[0, 0.5]} minSize={[24, 10]} />
                <Axis variant={'left'}>
                    <AxisTicks variant={'left'} tickSize={0} />
                </Axis>
                <Tooltip labelFormat={customTooltipLabel} />
            </Bar>
            <Bar container={containerB} {...multiviewBarProps} data={rawData} keys={['beta']}>
                <ActiveIdTooltipProvider>
                    <BandSurface
                        tooltip={true}
                        interactive={true}
                        expansion={[0, 8]}
                        dataComponent={GlobalHoverDataComponent}
                    />
                </ActiveIdTooltipProvider>
                <GridLines variant={'y'} shift={[-0.6]} />
                <Axis variant={'top'}>
                    <AxisLine variant={'top'} />
                    <AxisLabel variant={'top'} anchor={0} offset={10}>
                        Beta
                    </AxisLabel>
                </Axis>
                <Axis variant={'bottom'} ticks={[]} />
                <Bars
                    dataComponent={GlobalHoverDataComponent}
                    modifiers={{ onMouseEnter: { filter: 'url(#darker)' }, onMouseLeave: {} }}
                />
                <BarsLabels showOuter={true} align={[0, 0.5]} minSize={[24, 10]} />
                <Tooltip labelFormat={customTooltipLabel} />
            </Bar>
            <Bar container={containerC} {...multiviewBarProps} data={rawData} keys={['gamma']}>
                <ActiveIdTooltipProvider>
                    <BandSurface
                        tooltip={true}
                        interactive={true}
                        dataComponent={GlobalHoverDataComponent}
                    />
                </ActiveIdTooltipProvider>
                <GridLines variant={'y'} shift={[-0.6]} />
                <Axis variant={'top'}>
                    <AxisLine variant={'top'} />
                    <AxisLabel variant={'top'} anchor={0} offset={10}>
                        Gamma
                    </AxisLabel>
                </Axis>
                <Axis variant={'bottom'} ticks={[]} />
                <Bars
                    dataComponent={GlobalHoverDataComponent}
                    modifiers={{ onMouseEnter: { filter: 'url(#darker)' }, onMouseLeave: {} }}
                />
                <BarsLabels showOuter={true} align={[0, 0.5]} minSize={[24, 10]} />
                <Tooltip labelFormat={customTooltipLabel} />
            </Bar>
        </Chart>
    )
}
