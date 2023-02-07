import {
    Chart,
    Axis,
    AxisLabel,
    AxisLine,
    AxisTicks,
    GridLines,
    ThemeSpec,
    SizeSpec,
    Tooltip,
} from '@chsk/core'
import { Bar, Bars, BarsLabels } from '@chsk/band'
import { generateKeyValues } from './generators'
import { MilestoneStory } from '../types'

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
        },
        'barLabel.out': {
            fill: '#222222',
        },
    },
}

const multiviewBarProps = {
    size: [0.333, 1] as SizeSpec,
    units: 'relative' as const,
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

export const MultipleViewsBarChart = ({ fref, chartData, rawData }: MilestoneStory) => (
    <Chart
        fref={fref}
        data={chartData}
        id="multiview"
        size={[600, 280]}
        padding={[40, 40, 40, 60]}
        theme={multiviewTheme}
    >
        <Bar position={[0, 0]} {...multiviewBarProps} data={rawData} keys={['alpha']}>
            <GridLines variant={'y'} shift={[-0.6]} />
            <Axis variant={'top'}>
                <AxisLine variant={'top'} />
                <AxisLabel variant={'top'} anchor={0} offset={10}>
                    Alpha
                </AxisLabel>
            </Axis>
            <Axis variant={'bottom'} ticks={[]} />
            <Bars />
            <BarsLabels showOuter={true} align={[0, 0.5]} minSize={[24, 10]} />
            <Axis variant={'left'}>
                <AxisTicks variant={'left'} tickSize={0} />
            </Axis>
            <Tooltip />
        </Bar>
        <Bar position={[0.35, 0]} {...multiviewBarProps} data={rawData} keys={['beta']}>
            <GridLines variant={'y'} shift={[-0.6]} />
            <Axis variant={'top'}>
                <AxisLine variant={'top'} />
                <AxisLabel variant={'top'} anchor={0} offset={10}>
                    Beta
                </AxisLabel>
            </Axis>
            <Axis variant={'bottom'} ticks={[]} />
            <Bars />
            <BarsLabels showOuter={true} align={[0, 0.5]} minSize={[24, 10]} />
            <Tooltip />
        </Bar>
        <Bar position={[0.7, 0]} {...multiviewBarProps} data={rawData} keys={['gamma']}>
            <GridLines variant={'y'} shift={[-0.6]} />
            <Axis variant={'top'}>
                <AxisLine variant={'top'} />
                <AxisLabel variant={'top'} anchor={0} offset={10}>
                    Gamma
                </AxisLabel>
            </Axis>
            <Axis variant={'bottom'} ticks={[]} />
            <Bars />
            <BarsLabels showOuter={true} align={[0, 0.5]} minSize={[24, 10]} />
            <Tooltip />
        </Bar>
    </Chart>
)
