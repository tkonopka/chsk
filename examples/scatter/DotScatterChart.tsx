import {
    Chart,
    Axis,
    MilestoneMotion,
    mergeTheme,
    ThemeSpec,
    Typography,
    Legend,
    Tooltip,
    AxisTicks,
    ContinuousAxisScale,
    useDimensions,
    CssProps,
    useScales,
    isArray,
    indexes,
} from '@chsk/core'
import { VerticalGoldenRectangle } from '@chsk/annotation'
import { Scatter, ScatterPoints, ScatterCrosshair, ScatterDataItem, isScatterData } from '@chsk/xy'
import { buttonTheme } from '@chsk/themes'
import { randomUniformValue, round2dp } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = ['alpha', 'beta', 'gamma', 'delta', 'epsilon'].reverse()
export const generateDotScatterData = () => {
    const result: ScatterDataItem[] = [
        { id: 'X', data: [] },
        { id: 'Y', data: [] },
    ]
    ids.forEach((id, index) => {
        const value1 = randomUniformValue(10, 90)
        const value2 = value1 + randomUniformValue(-20, 20)
        if (!isArray(result[0]?.data) || !isArray(result[1]?.data)) return
        result[0]?.data.push({ id, index: index + 1, value: round2dp(value1) })
        result[1]?.data.push({
            id,
            index: index + 1,
            value: round2dp(Math.min(98, Math.max(2, value2))),
        })
    })
    return result
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    line: {
        grid: {
            strokeWidth: 0.5,
            stroke: '#222222',
        },
        crosshair: {
            stroke: '#222222',
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

// formatting for tooltip content
const customLabelFormat = (x: Record<string, unknown>) => {
    return ids[Number(x['index'])] + ': ' + (x['point'] as number[])[0]
}

// create background bands, similar to BandSurface, but here adjusted for xy axes and golden rectangles
const CustomBandSurface = ({ ids, r, style }: { ids: string[]; r: number; style: CssProps }) => {
    const { size } = useDimensions()
    const { scales } = useScales()

    // golden rectangle specification copied from @chsk/annotation
    const goldenRectVisualFactor = 0.96
    const phi = (1 + Math.sqrt(5)) / 2
    const goldenRectWidth = Math.sqrt(Math.PI * phi) * goldenRectVisualFactor

    const indexScale = scales.y as ContinuousAxisScale
    const height = r * goldenRectWidth
    const result = indexes(ids).map(index => {
        return (
            <rect
                key={'bg-' + index}
                x={0}
                width={size[0]}
                y={indexScale(index + 1) - height / 2}
                height={height}
                style={style}
            />
        )
    })
    return <>{result}</>
}

export const DotScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="dots"
            size={[600, 280]}
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
                    domain: [0.75, ids.length + 0.75],
                    variant: 'linear',
                }}
                valueSize={9}
            >
                <Typography variant={'title'} position={[-60, -80]}>
                    Performance metrics
                </Typography>
                <Legend
                    position={[-64, -65]}
                    positionUnits={'absolute'}
                    horizontal={true}
                    itemSize={[55, 28]}
                    title={'Groups:'}
                    r={9}
                    firstOffset={[5, 0]}
                    symbol={VerticalGoldenRectangle}
                />
                <MilestoneMotion enterOn={'axes'}>
                    <CustomBandSurface ids={ids} r={9} style={{ fill: '#f4f4f4 ' }} />
                    <Axis variant={'top'} label={''} />
                    <Axis variant={'left'} label={''}>
                        <AxisTicks
                            variant={'left'}
                            ticks={[1, 2, 3, 4, 5]}
                            labelFormat={(_, i) => ids[i]}
                        />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion enterOn={'data'}>
                    <CustomBandSurface ids={ids} r={9} style={{ fill: '#f4f4f4 ' }} />
                    <ScatterPoints symbol={VerticalGoldenRectangle} />
                    <ScatterCrosshair
                        visible={[true, false]}
                        symbol={VerticalGoldenRectangle}
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
                    <DownloadButtons position={[390, -75]} data image />
                </MilestoneMotion>
            </Scatter>
        </Chart>
    )
}
