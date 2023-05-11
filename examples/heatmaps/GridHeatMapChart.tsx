import { interpolateRdYlBu } from 'd3-scale-chromatic'
import {
    Chart,
    Axis,
    Legend,
    LegendTitle,
    LegendColorScale,
    Tooltip,
    GridLines,
    WithId,
    roundDecimalPlaces,
    mergeTheme,
    TooltipDataItem,
} from '@chsk/core'
import {
    HeatMap,
    HeatMapCellProps,
    HeatMapCells,
    HeatMapHighlight,
    isHeatMapData,
} from '@chsk/matrix'
import { alphabetGreek, randomSelection, randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { buttonTheme } from '@chsk/themes'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek
export const generateGridHeatMapData = () => {
    return ids.map(id => {
        const item: WithId & Record<string, number | string> = { id }
        const n = Math.floor(randomUniformValue(1, 5))
        const keys = randomSelection(ids, n, false)
        keys.map(k => {
            item[k] = roundDecimalPlaces(randomUniformValue(-100, 100), 3)
        })
        return item
    })
}

const customTheme = mergeTheme(buttonTheme, {
    circle: {
        default: {
            strokeWidth: 1,
        },
    },
    line: {
        tick: {
            strokeWidth: 1,
            stroke: '#666666',
        },
    },
    rect: {
        heatmapHighlight: {
            opacity: 0.2,
            fill: '#222222',
        },
    },
    text: {
        tickLabel: {
            fill: '#666666',
        },
    },
    AxisLabel: {
        top: {
            distance: 65,
        },
        left: {
            distance: 70,
        },
    },
    AxisTicks: {
        top: {
            labelAngle: -90,
            tickSize: 0,
            labelStyle: { textAnchor: 'start', dominantBaseline: 'middle' },
        },
        left: {
            tickSize: 0,
        },
        right: {
            tickSize: 0,
        },
        bottom: {
            labelAngle: -90,
            tickSize: 0,
            labelStyle: { textAnchor: 'end', dominantBaseline: 'middle' },
        },
    },
    GridLines: {
        x: {
            expansion: [4, 4],
        },
        y: {
            expansion: [4, 4],
        },
    },
})

const CustomHeatMapCell = ({
    x,
    y,
    width,
    height,
    className,
    style,
    cellValue,
}: HeatMapCellProps) => {
    if (cellValue === undefined || cellValue === null) return null
    return (
        <circle
            role={undefined}
            cx={x}
            cy={y}
            r={Math.min(width, height) / 2}
            style={style}
            className={className}
        />
    )
}

const customLabelFormat = (x: TooltipDataItem) => {
    return !x.label || x.label === ' ' ? 'no data' : x.label
}

export const GridHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHeatMapData(rawData)) return null

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="grid-map"
            size={[600, 500]}
            padding={[80, 160, 70, 100]}
            theme={customTheme}
        >
            <HeatMap
                data={rawData}
                keys={ids}
                scaleColor={{
                    variant: 'diverging',
                    colors: interpolateRdYlBu,
                    domain: [-100, 0, 100],
                }}
                scaleX={{ variant: 'band', padding: 0.2 }}
                scaleY={{ variant: 'band', padding: 0.2 }}
            >
                <GridLines variant={'x'} />
                <GridLines variant={'y'} />
                <HeatMapCells cell={CustomHeatMapCell} style={{ stroke: '#444444' }} />
                <Axis variant={'left'} label={'Origin'} />
                <Axis variant={'right'} label={''} />
                <Axis variant={'top'} label={'Target'} />
                <Axis variant={'bottom'} label={''} />
                <Legend
                    variant={'color'}
                    horizontal={true}
                    position={[1, 0]}
                    positionUnits={'relative'}
                    size={[140, 60]}
                    sizeUnits={'absolute'}
                    offset={[30, -68]}
                >
                    <LegendTitle size={[60, 20]}>Edge weight</LegendTitle>
                    <LegendColorScale
                        horizontal={true}
                        variant={'bottom'}
                        size={[100, 9]}
                        position={[0, 14]}
                        gradientId={'grad-grid'}
                    />
                </Legend>
                <HeatMapHighlight />
                <Tooltip
                    offset={[16, -16]}
                    anchor={[0, 1]}
                    padding={[4, 0, 4, 0]}
                    itemSize={[140, 26]}
                    itemPadding={[4, 8, 4, 8]}
                    maxOverhang={[60, 120, 60, 60]}
                    labelFormat={customLabelFormat}
                />
                <DownloadButtons position={[380, 400]} data image />
            </HeatMap>
        </Chart>
    )
}
