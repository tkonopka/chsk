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
} from '@chsk/core'
import { isScatterData, Scatter, ScatterCurve, useScatterPreparedData } from '@chsk/xy'
import { downloadThemePiece } from '@chsk/themes'
import { generateRandomWalk } from './generators'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const dayLength = 1000 * 60 * 60 * 24
const aYearAgo = new Date(Date.now() - 365 * dayLength)

export const generateTimeSeriesData = () => [
    {
        id: 'series',
        data: generateRandomWalk(365).map((x: Record<string, unknown>, i) => ({
            ...x,
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
    const scales = useScales()
    const preparedData = useScatterPreparedData()
    const index = id ? preparedData.seriesIndexes[id] ?? 0 : 0
    const cx = preparedData.data[index].x[0]
    const cy = preparedData.data[index].y[0]
    const pointStyle = addColor(style, scales.color(index))
    return (
        <Circle cx={cx} cy={cy} r={r} setRole={setRole} style={pointStyle} className={className} />
    )
}

export const TimeSeriesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="time-series"
            size={[600, 400]}
            padding={[80, 40, 60, 80]}
            theme={downloadThemePiece}
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
            >
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
                <ScatterCurve
                    curve={'Linear'}
                    style={{ stroke: '#ff0000', strokeWidth: 2, fillOpacity: 0 }}
                />
                <FirstPoint style={{ fill: '#222222' }} />
                <Typography variant={'title'} position={[-65, -50]}>
                    Change over one year
                </Typography>
                <Typography variant={'subtitle'} position={[-65, -28]}>
                    Base values set to zero for {dateToString(aYearAgo)}
                </Typography>
                <DownloadButtons position={[390, -48]} data image />
            </Scatter>
        </Chart>
    )
}
