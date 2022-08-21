import {
    Chart,
    Axis,
    AxisLabel,
    AxisLine,
    AxisTicks,
    GridLines,
    ThemeSpec,
    SizeSpec,
} from '@chask/core'
import { Bar, BarDataItem, Bars, BarsLabels } from '@chask/band'
import { generateKeyValues } from './generators'

const multiviewIds = ['A', 'B', 'C', 'D', 'E', 'F']
const multiviewData: Array<BarDataItem> = [
    generateKeyValues(
        { id: 'A', alpha: 75 + Math.floor(Math.random() * 15) },
        ['beta', 'gamma'],
        [5, 75]
    ),
    generateKeyValues(
        { id: 'B', alpha: 60 + Math.floor(Math.random() * 15) },
        ['beta', 'gamma'],
        [5, 75]
    ),
    generateKeyValues(
        { id: 'C', alpha: 50 + Math.floor(Math.random() * 10) },
        ['beta', 'gamma'],
        [5, 75]
    ),
    generateKeyValues(
        { id: 'D', alpha: 30 + Math.floor(Math.random() * 10) },
        ['beta', 'gamma'],
        [5, 75]
    ),
    generateKeyValues(
        { id: 'E', alpha: 10 + Math.floor(Math.random() * 5) },
        ['beta', 'gamma'],
        [5, 75]
    ),
    generateKeyValues(
        { id: 'F', alpha: 5 + Math.floor(Math.random() * 5) },
        ['beta', 'gamma'],
        [5, 75]
    ),
]

export const multiviewTheme: ThemeSpec = {
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
    stacked: true,
    horizontal: true,
    data: multiviewData,
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

export const MultipleViewsBarChart = () => {
    return (
        <Chart id="multiview" size={[600, 300]} padding={[40, 40, 40, 60]} theme={multiviewTheme}>
            <Bar position={[0, 0]} {...multiviewBarProps} keys={['alpha']}>
                <GridLines variant={'y'} shift={[-0.6]} />
                <Axis variant={'top'}>
                    <AxisLine variant={'top'} />
                    <AxisLabel variant={'top'} anchor={0} padding={10} children={'Alpha'} />
                </Axis>
                <Axis variant={'bottom'} ticks={null} />
                <Bars />
                <BarsLabels showOuter={true} align={[0, 0.5]} minSize={[24, 10]} />
                <Axis variant={'left'}>
                    <AxisTicks variant={'left'} size={0} />
                </Axis>
            </Bar>
            <Bar position={[0.35, 0]} {...multiviewBarProps} keys={['beta']}>
                <GridLines variant={'y'} shift={[-0.6]} />
                <Axis variant={'top'}>
                    <AxisLine variant={'top'} />
                    <AxisLabel variant={'top'} anchor={0} padding={10} children={'Beta'} />
                </Axis>
                <Axis variant={'bottom'} ticks={null} />
                <Bars />
                <BarsLabels showOuter={true} align={[0, 0.5]} minSize={[24, 10]} />
            </Bar>
            <Bar position={[0.7, 0]} {...multiviewBarProps} keys={['gamma']}>
                <GridLines variant={'y'} shift={[-0.6]} />
                <Axis variant={'top'}>
                    <AxisLine variant={'top'} />
                    <AxisLabel variant={'top'} anchor={0} padding={10} children={'Gamma'} />
                </Axis>
                <Axis variant={'bottom'} ticks={null} />
                <Bars />
                <BarsLabels showOuter={true} align={[0, 0.5]} minSize={[24, 10]} />
            </Bar>
        </Chart>
    )
}
