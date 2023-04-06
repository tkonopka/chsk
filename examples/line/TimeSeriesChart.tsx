import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    GridLines,
    Typography,
    SymbolProps,
    useScales,
    Circle,
    addColor,
    Tooltip,
    TooltipDataItem,
    NumericPositionSpec,
    ViewClip,
    ViewController,
    LinearGradient,
    useProcessedData,
    getMinMax,
    url,
} from '@chsk/core'
import {
    isScatterData,
    Scatter,
    ScatterCrosshair,
    useScatterPreparedData,
    isScatterProcessedData,
    ScatterSeries,
} from '@chsk/xy'
import { buttonTheme } from '@chsk/themes'
import { generateRandomWalk } from './generators'
import { MilestoneStory } from '../types'
import { DownloadButtons, IconButton } from '../navigation'
import { round2dp } from '../utils'

const dayLength = 1000 * 60 * 60 * 24
const aYearAgo = new Date(Date.now() - 365 * dayLength)

export const generateTimeSeriesData = () => [
    {
        id: 'series',
        data: generateRandomWalk(365).map((x: Record<string, unknown>, i) => ({
            ...x,
            y: round2dp('y' in x ? Number(x['y']) : 0),
            time: new Date(Number(aYearAgo) + i * dayLength),
        })),
    },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dateToString = (d: Date) => {
    const day = d.getDate()
    const month = months[d.getMonth()]
    const year = d.getFullYear()
    const result = '' + (day <= 9 ? '0' + day : day) + '-' + month + '-' + year
    return result
}

const FirstPoint = ({
    id,
    r = 5,
    className,
    style,
    setRole,
}: Omit<SymbolProps, 'cx' | 'cy'> & { id?: string }) => {
    const { scales } = useScales()
    const preparedData = useScatterPreparedData()
    const index = id ? preparedData.seriesIndexes[id] ?? 0 : 0
    const cx = preparedData.data[index].x[0]
    const cy = preparedData.data[index].y[0]
    const pointStyle = addColor(style, scales.color(index))
    return (
        <Circle cx={cx} cy={cy} r={r} setRole={setRole} style={pointStyle} className={className} />
    )
}

const customLabelFormat = (x: TooltipDataItem) => {
    const point: NumericPositionSpec = 'point' in x ? (x['point'] as NumericPositionSpec) : [0, 0]
    const date = dateToString(new Date(point[0]))
    return '(' + date + ', ' + point[1] + ')'
}

// wrapper around ScatterArea and ScatterCurve
// It creates custom color gradients based on positive/negative values
const SignCurve = ({ ids, prefix = 'sign-gradient' }: { ids?: string[]; prefix?: string }) => {
    const processedData = useProcessedData()
    const color = useScales().scales.color
    const data = processedData.data
    if (!isScatterProcessedData(data)) return null

    const colorP = color(0)
    const colorM = color(1)
    const getStops = (range: [number, number]): string[] => {
        if (range[0] > 0) return [colorP, colorP]
        if (range[1] < 0) return [colorM, colorM]
        return [colorP, colorP, colorM, colorM]
    }
    const getOffsets = (range: [number, number]): number[] => {
        if (range[0] > 0 || range[1] < 0) return [0, 1]
        const crossover = range[1] / (range[1] - range[0])
        return [0, crossover, crossover, 1]
    }

    const result = (ids ?? processedData.keys).map((id: string) => {
        const seriesIndex = processedData.seriesIndexes[id]
        if (seriesIndex === undefined) return
        const range = getMinMax(data[seriesIndex].y)
        const stops = getStops(range)
        const offsets = getOffsets(range)
        const gradId = prefix + '-' + id
        return (
            <>
                <LinearGradient
                    id={gradId}
                    start={[0, 0]}
                    end={[0, 1]}
                    stops={stops}
                    offsets={offsets}
                />
                <ScatterSeries
                    layers={['area', 'curve']}
                    ids={[id]}
                    curve={'Linear'}
                    baseline={0}
                    areaStyle={{
                        fill: url(gradId),
                        strokeWidth: 0,
                        fillOpacity: 0.25,
                    }}
                    curveStyle={{
                        stroke: url(gradId),
                        strokeWidth: 2,
                    }}
                />
            </>
        )
    })

    return <>{result.filter(Boolean)}</>
}

export const TimeSeriesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="time-series"
            size={[640, 400]}
            padding={[80, 80, 60, 80]}
            theme={buttonTheme}
        >
            <Scatter
                data={rawData}
                x={'time'}
                y={'y'}
                scaleX={{
                    variant: 'time',
                    domain: 'auto',
                    nice: false,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#3f9cde', '#bbbbbb'],
                    domain: ['positive', 'negative'],
                }}
            >
                <Typography variant={'title'} position={[-65, -50]}>
                    Performance metric
                </Typography>
                <Typography variant={'subtitle'} position={[-65, -28]}>
                    Change from baseline value on {dateToString(aYearAgo)}
                </Typography>
                <GridLines variant={'y'} style={{ stroke: '#cccccc' }} />
                <GridLines variant={'y'} values={[0]} style={{ stroke: '#222222' }} />
                <Axis variant={'bottom'} label={'time'}>
                    <AxisTicks
                        variant={'bottom'}
                        labelFormat={v => dateToString(new Date(Number(v)))}
                    />
                </Axis>
                <Axis variant={'left'}>
                    <AxisLabel variant={'left'} offset={60}>
                        Value (a.u.)
                    </AxisLabel>
                    <AxisTicks variant={'left'} labelFormat={v => Number(v).toFixed(1)} />
                </Axis>
                <ViewClip id={'time-curve'} expansion={[5, 5, 5, 5]}>
                    <SignCurve />
                    <ScatterCrosshair
                        variant={'vertical'}
                        style={{ stroke: '#888888', strokeDasharray: 5 }}
                        symbolStyle={{ fill: '#555555' }}
                    />
                    <FirstPoint style={{ fill: '#222222' }} />
                </ViewClip>
                <ViewController
                    container={{ position: [1, 0], offset: [20, 0] }}
                    component={IconButton}
                />
                <DownloadButtons position={[425, -48]} data image />
                <Tooltip
                    offset={[0, -20]}
                    itemSize={[150, 26]}
                    itemPadding={[4, 8, 4, -4]}
                    labelFormat={customLabelFormat}
                    symbol={() => null}
                    title={''}
                    labelStyle={{ fontWeight: 600 }}
                    style={{ fill: '#f4f4f4' }}
                />
            </Scatter>
        </Chart>
    )
}
