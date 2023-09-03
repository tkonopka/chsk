import {
    addPositions,
    Chart,
    FourSideSizeSpec,
    Label,
    LabelProps,
    mergeTheme,
    NumericPositionSpec,
    RecordWithId,
    roundDecimalPlaces,
    SizeSpec,
    ThemeSpec,
    Typography,
    url,
    useProcessedData,
    X,
    Y,
} from '@chsk/core'
import { Bar, Bars, useBarPreparedData } from '@chsk/band'
import { alphabetGreek, randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { buttonTheme } from '@chsk/themes'
import { DownloadButtons } from '../navigation'
import { schemePuBuGn } from 'd3-scale-chromatic'
import { Connector, InsetBorderFilter } from '../../packages/annotation/src'

export const fractionsKeys = alphabetGreek.slice(0, 9)

export const generateFractionsVerticalBarData = () => {
    let maxValue = 5
    const multiplier = 1.4
    const values: number[] = []
    while (values.length < 9) {
        values.push(randomUniformValue(1, maxValue)), (maxValue *= multiplier)
    }
    values.sort((a, b) => b - a)
    const total = values.reduce((acc, v) => acc + v, 0)
    const data: RecordWithId = { id: 'A' }
    fractionsKeys.forEach((k: string, i: number) => {
        data[k] = roundDecimalPlaces((100 * Number(values[i])) / total, 1)
    })
    return [data]
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    path: {
        connector: {
            stroke: '#999999',
            strokeWidth: 1,
        },
    },
    text: {
        smallValue: {
            fontSize: '11px',
            fill: '#444444',
        },
        footnote: {
            fontSize: '12px',
            textAnchor: 'start',
            fill: '#444444',
        },
    },
    tspan: {
        percent: {
            fill: '#333333',
            fontWeight: 600,
        },
    },
})

const CustomLabels = ({
    itemSize = [100, 20],
    offset = [8, 0],
    offsetConnector = [28, 0],
    itemPadding = [4, 4, 4, 4],
}: {
    itemSize?: SizeSpec
    itemPadding?: FourSideSizeSpec
    offset?: NumericPositionSpec
    offsetConnector?: NumericPositionSpec
}) => {
    const processedData = useProcessedData().data[0]
    const preparedData = useBarPreparedData().data[0]
    const keys = useProcessedData().keys
    const values: number[] = processedData?.['data'] as number[]
    const total = values.reduce((acc, v) => acc + v, 0)
    // compute positions for labels, starting at the top
    let y = itemSize[Y] / 2
    const indexes = Array.from(Array(values.length).keys()).reverse()
    const start: NumericPositionSpec[] = Array(values.length)
    const end: NumericPositionSpec[] = Array(values.length)
    indexes.forEach(i => {
        const corner = preparedData?.position[i] as [number, number]
        const size = preparedData?.size[i] as [number, number]
        const middle: NumericPositionSpec = [corner[X] + size[X], corner[Y] + size[Y] / 2]
        if (middle[Y] > y) {
            end[i] = addPositions(middle, offset)
        } else {
            start[i] = middle
            if (i === values.length - 1) {
                end[i] = addPositions(middle, offsetConnector)
                y = middle[Y]
            } else {
                end[i] = addPositions([middle[X], y], offsetConnector)
            }
        }
        y += itemSize[Y]
    })
    // create labels
    const labelProps: Partial<LabelProps> = {
        anchor: [0, 0.5],
        padding: itemPadding,
        align: [0, 0.5],
        style: { textAnchor: 'start' },
        size: itemSize,
    }
    const result = indexes.map(i => {
        const percent = roundDecimalPlaces((100 * Number(values[i])) / total, 1)
        const content = (
            <tspan>
                {keys[i]} <tspan className={'percent'}>{percent}%</tspan>
            </tspan>
        )
        const label =
            start[i] === undefined ? (
                <>
                    <Label key={1} position={end[i]} {...labelProps}>
                        {content}
                    </Label>
                </>
            ) : (
                <>
                    <Connector
                        key={0}
                        variant={'lh'}
                        x1={start[i]?.[X] as number}
                        y1={start[i]?.[Y] as number}
                        x2={end[i]?.[X] as number}
                        y2={end[i]?.[Y] as number}
                        elbow={0.25}
                        className={''}
                    />
                    <Label key={1} position={end[i]} {...labelProps} className={'smallValue'}>
                        {content}
                    </Label>
                </>
            )
        return <g key={'label-' + i}>{label}</g>
    })
    return <>{result}</>
}

export const FractionsVerticalBarChart = ({ fref, chartData, rawData }: MilestoneStory) => (
    <Chart
        data={chartData}
        fref={fref}
        id="fractions-vertical"
        size={[320, 480]}
        padding={[60, 220, 50, 40]}
        theme={customTheme}
    >
        <InsetBorderFilter id={'inset-1'} floodOpacity={0.15} />
        <Bar
            variant={'stacked'}
            data={rawData}
            keys={fractionsKeys}
            scaleColor={{ variant: 'categorical', colors: schemePuBuGn }}
            scaleIndex={{ variant: 'band', padding: 0 }}
        >
            <Typography variant={'title'} position={[0, -30]}>
                Partition of resources
            </Typography>
            <Bars style={{ filter: url('inset-1') }} />
            <CustomLabels />
            <Typography variant={'footnote'} position={[0, 390]}>
                data source: synthetic
            </Typography>
            <DownloadButtons position={[180, 390]} data image />
        </Bar>
    </Chart>
)
