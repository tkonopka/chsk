import {
    Chart,
    Circle,
    Counter,
    CounterProps,
    Line,
    MilestoneMotion,
    ThemeSpec,
    Typography,
    TypographyProps,
    X,
    Y,
} from '@chsk/core'
import { Bar, Bars, BarsLabels, useBarPreparedData } from '@chsk/band'
import { randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'

export const generateFractionsBarData = () => {
    const valueA = randomUniformValue(35, 60)
    const valueB = randomUniformValue(20, valueA)
    const valueC = randomUniformValue(3, 15)
    const normalization = (valueA + valueB + valueC) / 100
    return [
        {
            id: '0',
            A: Math.round(valueA / normalization),
            B: Math.round(valueB / normalization),
            C: Math.round(valueC / normalization),
        },
    ]
}

const customTheme: ThemeSpec = {
    text: {
        subtitle: {
            fontSize: '14px',
            fill: '#888',
        },
        barLabel: {
            textAnchor: 'start',
        },
        'barLabel.primary': {
            fontSize: '48px',
            fontWeight: 600,
            fill: '#f4f4f4',
        },
        'barLabel.secondary': {
            fontSize: '16px',
            fill: '#fff',
            textAnchor: 'start',
        },
        external: {
            fontSize: '16px',
            fill: '#444444',
            textAnchor: 'end',
            dominantBaseline: 'middle',
        },
    },
}

export const CustomCounter = (props: CounterProps) => {
    return <Counter {...props} format={v => String(v) + '%'} />
}

export const CustomLabel = ({ children }: Pick<TypographyProps, 'children'>) => {
    const prepared = useBarPreparedData()
    const position = prepared.data[0].position[2]
    const size = prepared.data[0].size[2]
    const anchor = [position[X] + size[X] / 2, position[Y] + size[Y] - 1]
    const labelPosition: [number, number] = [anchor[X] - 20, anchor[Y] + 32]
    return (
        <>
            <Circle cx={anchor[X]} cy={anchor[Y]} r={3} />
            <Line x1={anchor[X]} y1={anchor[Y]} x2={anchor[X]} y2={labelPosition[Y]} />
            <Line
                x1={anchor[X]}
                y1={labelPosition[Y]}
                x2={labelPosition[X]}
                y2={labelPosition[Y]}
            />
            <Typography position={[labelPosition[X] - 8, labelPosition[Y]]} className={'external'}>
                {children}
            </Typography>
        </>
    )
}

export const FractionsBarChart = ({ fref, chartData, rawData }: MilestoneStory) => (
    <Chart
        data={chartData}
        fref={fref}
        id="fractions"
        size={[600, 220]}
        padding={[60, 40, 40, 40]}
        theme={customTheme}
    >
        <Bar variant={'stacked'} data={rawData} keys={['A', 'B', 'C']} horizontal={true}>
            <MilestoneMotion initial={'invisible'} initialOn={'title'}>
                <Typography variant={'title'} position={[0, -30]}>
                    Partition of resources
                </Typography>
                <Typography variant={'subtitle'} position={[0, -10]}>
                    data source: synthetic
                </Typography>
            </MilestoneMotion>
            <MilestoneMotion initial={'invisible'} initialOn={'A'}>
                <Bars keys={['A']} />
                <BarsLabels
                    keys={['A']}
                    align={[0, 1]}
                    padding={[0, 0, 42, 10]}
                    className={'primary'}
                    component={CustomCounter}
                />
                <BarsLabels
                    keys={['A']}
                    align={[0, 1]}
                    padding={[0, 0, 14, 10]}
                    className={'secondary'}
                    format={() => 'alpha'}
                />
            </MilestoneMotion>
            <MilestoneMotion initial={'invisible'} initialOn={'B'}>
                <Bars keys={['B']} />
                <BarsLabels
                    keys={['B']}
                    align={[0, 1]}
                    padding={[0, 0, 42, 10]}
                    className={'primary'}
                    component={CustomCounter}
                />
                <BarsLabels
                    keys={['B']}
                    align={[0, 1]}
                    padding={[0, 0, 14, 10]}
                    className={'secondary'}
                    format={() => 'beta'}
                />
            </MilestoneMotion>
            <MilestoneMotion initial={'invisible'} initialOn={'C'}>
                <Bars keys={['C']} />
                <CustomLabel>gamma</CustomLabel>
            </MilestoneMotion>
        </Bar>
    </Chart>
)
