import {
    Chart,
    ThemeSpec,
    Counter,
    mergeThemes,
    Surface,
    Typography,
    NumericPositionSpec,
    SizeSpec,
    ContainerProps,
    TextContentProps,
} from '@chsk/core'
import { Origin, Pie, PieDataItem, Slices } from '@chsk/polar'
import { darkTheme, downloadTheme } from '@chsk/themes'
import { alphabetGreek, generateUniformPopulation } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek.slice(0, 5)
const createPieData = (v: number) => [
    {
        id: 'value',
        data: v,
    },
    {
        id: 'other',
        data: 100 - v,
    },
]
export const generateGaugesData = () => {
    const sizes = generateUniformPopulation(ids.length, 0, 100).map(Math.round)
    return ids.map((id, i) => ({ id, pieData: createPieData(sizes[i]) }))
}

const customTheme: ThemeSpec = mergeThemes([
    darkTheme,
    downloadTheme,
    {
        text: {
            sliceLabel: {
                pointerEvents: 'none',
                fill: '#bbbbbb',
            },
            download: {
                fill: '#bbbbbb',
            },
            counter: {
                fontSize: '24px',
                fontWeight: 300,
                dominantBaseline: 'auto',
            },
            gaugeName: {
                fontSize: '12px',
                fill: '#aaaaaa',
            },
        },
        tspan: {
            percent: {
                fontSize: '20px',
                dominantBaseline: 'auto',
            },
        },
        path: {
            download: {
                fill: '#bbbbbb',
            },
        },
        Colors: {
            categorical: {
                variant: 'categorical',
                colors: ['#f57600', '#555555'],
            },
        },
    },
])

export const CustomPolarGaugeValue = ({ className, style, children }: TextContentProps) => {
    return (
        <text style={style} className={className}>
            {children}
            <tspan className={'percent'}>%</tspan>
        </text>
    )
}

export const CustomPolarGauge = ({
    id,
    position,
    size,
    data,
}: {
    id: string
    position: NumericPositionSpec
    size: SizeSpec
    data: Array<PieDataItem>
}) => {
    const value = data[0].data
    const container: ContainerProps = {
        position,
        positionUnits: 'relative',
        size,
        sizeUnits: 'relative',
        padding: [0, 5, 0, 5],
    }
    return (
        <Pie container={container} data={data} angleAlign={0} rInner={0.9} rOuter={0.98}>
            <Origin>
                <Slices style={{ strokeWidth: 0 }} />
                <Typography variant={'gauge-name'} position={[0, -16]}>
                    {id}
                </Typography>
                <Counter position={[2, 14]} component={CustomPolarGaugeValue}>
                    {value}
                </Counter>
            </Origin>
        </Pie>
    )
}

export const PolarGaugesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    const width = 1 / rawData.length
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="polar-gauges"
            size={[600, 200]}
            padding={[40, 30, 32, 30]}
            theme={customTheme}
        >
            <Surface variant={'outer'} />
            {rawData.map((item, index) => {
                return (
                    <CustomPolarGauge
                        key={'gauge-' + index}
                        id={item.id}
                        position={[index * width, 0]}
                        size={[width, 1]}
                        data={item.pieData as Array<PieDataItem>}
                    />
                )
            })}
            <DownloadButtons position={[485, -23]} image />
        </Chart>
    )
}
