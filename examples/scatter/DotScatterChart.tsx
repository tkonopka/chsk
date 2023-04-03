import {
    Chart,
    Axis,
    GridLines,
    MilestoneMotion,
    mergeTheme,
    ThemeSpec,
    Typography,
    Circle,
    Legend,
    Tooltip,
    AxisTicks,
} from '@chsk/core'
import { Scatter, ScatterPoints, ScatterCrosshair, ScatterDataItem, isScatterData } from '@chsk/xy'
import { buttonTheme } from '@chsk/themes'
import { randomUniformValue, round2dp } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = ['alpha', 'beta', 'gamma', 'delta']
export const generateDotScatterData = () => {
    const result: ScatterDataItem[] = [
        { id: 'last', data: [] },
        { id: 'current', data: [] },
    ]
    ids.forEach((id, index) => {
        const value1 = randomUniformValue(10, 90)
        const value2 = value1 + randomUniformValue(-20, 20)
        result[0].data.push({ id, index: index + 1, value: round2dp(value1) })
        result[1].data.push({
            id,
            index: index + 1,
            value: round2dp(Math.min(100, Math.max(0, value2))),
        })
    })
    return result
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    circle: {
        default: {
            strokeWidth: 3,
        },
        'bar:hover': {
            cursor: 'pointer',
        },
    },
    line: {
        grid: {
            strokeWidth: 0.5,
            stroke: '#222222',
        },
        'axis.top': {
            strokeWidth: 1,
        },
        crosshair: {
            stroke: '#555555',
            strokeDasharray: 5,
        },
    },
    AxisTicks: {
        left: {
            labelDistance: 60,
            labelStyle: { textAnchor: 'start' },
            tickSize: 0,
        },
    },
})

// style for scatter chart and legend symbols
const customSymbolStyle = { fill: '#ffffff' }

// formatting for tooltip content
const customLabelFormat = (x: Record<string, unknown>) => {
    return ids[Number(x.index)] + ': ' + (x.point as number[])[0]
}

export const DotScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="dots"
            size={[600, 300]}
            padding={[110, 40, 10, 80]}
            theme={customTheme}
        >
            <Scatter
                data={rawData}
                x={'value'}
                y={'index'}
                scaleX={{
                    domain: [0, 100],
                    variant: 'linear',
                }}
                scaleY={{
                    domain: [0.5, ids.length + 1],
                    variant: 'linear',
                }}
                valueSize={6}
            >
                <Typography variant={'title'} position={[-60, -80]}>
                    Performance metrics
                </Typography>
                <Legend
                    position={[-64, -65]}
                    positionUnits={'absolute'}
                    horizontal={true}
                    itemSize={[80, 28]}
                    title={'Years:'}
                    r={6.5}
                    firstOffset={[-10, 0]}
                    symbol={Circle}
                    symbolStyle={customSymbolStyle}
                />
                <MilestoneMotion initialOn={'axes'}>
                    <GridLines variant={'y'} />
                    <Axis variant={'top'} label={''} />
                    <Axis variant={'left'} label={''}>
                        <AxisTicks
                            variant={'left'}
                            ticks={[1, 2, 3, 4]}
                            labelFormat={(_, i) => ids[i]}
                        />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'data'}>
                    <ScatterPoints symbolStyle={customSymbolStyle} />
                    <ScatterCrosshair
                        variant={'vertical'}
                        symbolStyle={customSymbolStyle}
                        minDistance={20}
                    />
                    <Tooltip
                        padding={[8, 0, 8, 0]}
                        itemSize={[120, 20]}
                        itemPadding={[2, 8, 2, 8]}
                        r={7}
                        rx={2}
                        ry={2}
                        style={{
                            strokeWidth: 0.5,
                            stroke: '#777',
                            filter: 'drop-shadow(3px 5px 3px #22222244)',
                        }}
                        labelFormat={customLabelFormat}
                    />
                    <DownloadButtons position={[390, -80]} data image />
                </MilestoneMotion>
            </Scatter>
        </Chart>
    )
}
