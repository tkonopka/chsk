import {
    Chart,
    Axis,
    mergeTheme,
    ThemeSpec,
    Typography,
    Tooltip,
    AxisTicks,
    TooltipDataItem,
    GridLines,
    Rectangle,
    SymbolProps,
    useScales,
    ContinuousAxisScale,
    TooltipDataComponent,
} from '@chsk/core'
import { Scatter, ScatterPoints, isScatterData } from '@chsk/xy'
import { buttonTheme } from '@chsk/themes'
import { generateRandomWalk } from '../lines/generators'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { round4dp } from '../utils'
import { InsetBorderFilter } from '@chsk/annotation'

const dayLength = 1000 * 60 * 60 * 24
const threeMonths = new Date(Date.now() - 60 * dayLength)

export const generateTimeBarsScatterData = () => {
    const walk = generateRandomWalk(60)
    return [
        {
            id: 'series',
            data: walk.map(d => ({
                time: new Date(Number(threeMonths) + d.x * dayLength),
                y: round4dp(d.y),
            })),
        },
    ]
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    line: {
        baseline: {
            strokeWidth: 2,
            stroke: '#222222',
        },
    },
})

const ScatterRectangle = ({ cx = 0, cy = 0, ...props }: SymbolProps) => {
    const { scales } = useScales()
    const xScale = scales.x as ContinuousAxisScale
    const yScale = scales.y as ContinuousAxisScale
    const width = xScale(dayLength) - xScale(0)
    const baseline = yScale(0)
    return <Rectangle x={cx - width / 2} y={cy} width={width} height={baseline - cy} {...props} />
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dateToString = (d: Date) => {
    const day = d.getDate()
    const month = months[d.getMonth()]
    return '' + day + '-' + month
}

const customTooltipLabelFormat = (x: TooltipDataItem) => {
    if (!('point' in x)) return ''
    const point = x.point as number[]
    return dateToString(new Date(point[0])) + ' ' + point[1]
}

const customModifiers = {
    onMouseEnter: { filter: 'url(#inset)' },
    onMouseLeave: {},
}

export const TimeBarsScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="time-bars"
            size={[600, 300]}
            padding={[60, 60, 40, 50]}
            theme={customTheme}
        >
            <InsetBorderFilter id={'inset'} floodColor={'#222222'} floodOpacity={1} r={2} />
            <Scatter
                data={rawData}
                x={'time'}
                y={'y'}
                scaleX={{ variant: 'time', domain: 'auto', nice: false }}
                scaleY={{ variant: 'linear', domain: 'auto' }}
                valueSize={9}
            >
                <Typography variant={'title'} position={[-30, -50]}>
                    Time series
                </Typography>
                <Typography variant={'subtitle'} position={[-30, -30]}>
                    Measurements (a.u.)
                </Typography>
                <Axis variant={'bottom'} label={''}>
                    <AxisTicks ticks={6} labelFormat={v => dateToString(new Date(Number(v)))} />
                </Axis>
                <Axis variant={'left'} />
                <ScatterPoints
                    symbol={ScatterRectangle}
                    dataComponent={TooltipDataComponent}
                    modifiers={customModifiers}
                />
                <GridLines variant={'y'} values={[0]} className={'baseline'} expansion={[2, 4]} />
                <Tooltip
                    offset={[0, -20]}
                    padding={[6, 4, 4, 4]}
                    itemSize={[115, 20]}
                    itemPadding={[2, 8, 0, 8]}
                    r={7}
                    rx={3}
                    ry={3}
                    style={{
                        strokeWidth: 0.5,
                        stroke: '#777',
                        filter: 'drop-shadow(3px 5px 3px #22222244)',
                    }}
                    title={''}
                    labelFormat={customTooltipLabelFormat}
                />
                <DownloadButtons position={[410, -40]} data image />
            </Scatter>
        </Chart>
    )
}
