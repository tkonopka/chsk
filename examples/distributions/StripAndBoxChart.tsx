import {
    Chart,
    Axis,
    GridLines,
    MilestoneMotion,
    ThemeSpec,
    Legend,
    AxisLine,
    TooltipDataItem,
    AxisLabel,
    AxisTicks,
} from '@chsk/core'
import { Quantile, Quantiles, QuantileTooltip, Strip, StripProps, Strips } from '@chsk/band'
import { generateMixedPopulation, randomUniformValue, round2dp } from '../utils'
import { MilestoneStory } from '../types'

export const generateStripAndBoxData = () => {
    const three = Array(3).fill(0)
    const means = three.map(() => randomUniformValue(10, 16)) as [number, number, number]
    const offsets = three.map(() => randomUniformValue(0, 5)) as [number, number, number]
    const positive = (v: number) => v > 0
    const x = generateMixedPopulation([45, 5], [means[0], means[0] + offsets[0]], [3, 6])
    const y = generateMixedPopulation([45, 5], [means[1], means[1] + offsets[1]], [3, 8])
    const z = generateMixedPopulation([45, 5], [means[2], means[2] + offsets[2]], [3, 6])
    const power = (v: number) => Math.pow(2, v)
    return [
        { id: 'controls', x: x.filter(positive).map(power) },
        { id: 'A', y: y.filter(positive).map(power) },
        { id: 'B', z: z.filter(positive).map(power) },
    ]
}

const customTheme: ThemeSpec = {
    line: {
        intervalLabel: {
            strokeWidth: 1,
            stroke: '#222255',
        },
        axis: {
            strokeWidth: 1.5,
        },
    },
    text: {
        axisLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
        intervalLabel: {
            textAnchor: 'middle',
            fontWeight: 400,
            fill: '#222255',
        },
        'tooltipItem.label': { textAnchor: 'start' },
        'tooltipItem.value': {
            textAnchor: 'start',
            fontWeight: 600,
            dominantBaseline: 'central',
        },
    },
    tspan: {
        exponent: {
            fontSize: '10px',
        },
    },
}

const stripProps: Omit<StripProps, 'data'> = {
    keys: ['x', 'y', 'z'],
    variant: 'layered',
    scaleIndex: {
        variant: 'band' as const,
        domain: 'auto' as const,
        paddingInner: 0.2,
        paddingOuter: 0.2,
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 'auto' as const],
    },
}

const expLabelFormat = (v: unknown) => {
    const [a, b] = Number(v).toExponential().split('e')
    return (
        <tspan>
            {a !== '1' ? a + ' · ' : ''}10
            <tspan dy={-6} className={'exponent'}>
                {b?.replace('+', '')}
            </tspan>
        </tspan>
    )
}

const roundExp2dp = (v: number) => {
    const [a, b] = v.toExponential().split('e')
    return round2dp(Number(a)) + 'e' + b
}

export const StripAndBoxChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            id="stripAndBox"
            fref={fref}
            data={chartData}
            size={[360, 400]}
            padding={[40, 60, 60, 80]}
            theme={customTheme}
        >
            <Strip
                {...stripProps}
                data={rawData}
                paddingInternal={0.4}
                scaleValue={{ variant: 'log' }}
            >
                <MilestoneMotion enterOn={'axes'}>
                    <GridLines variant={'y'} values={5} />
                    <Axis variant={'left'}>
                        <AxisLine />
                        <AxisLabel>Measurements (a.u.)</AxisLabel>
                        <AxisTicks ticks={5} labelFormat={expLabelFormat} />
                    </Axis>
                    <Axis variant={'bottom'} label={'counts'}>
                        <AxisLine variant={'bottom'} />
                    </Axis>
                    <Legend
                        position={[0, 1]}
                        positionUnits={'relative'}
                        anchor={[0, 0]}
                        offset={[5, 5]}
                        horizontal={true}
                        padding={[10, 0, 10, 0]}
                        r={10}
                        itemSize={[85, 20]}
                        itemPadding={[2, 2, 2, 2]}
                    />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'strips'}>
                    <Strips />
                </MilestoneMotion>
            </Strip>
            <Quantile
                {...stripProps}
                data={rawData}
                paddingInternal={0}
                scaleValue={{ variant: 'log' }}
            >
                <MilestoneMotion enterOn={'quantiles'}>
                    <Quantiles
                        boxStyle={{ fillOpacity: 0.35, stroke: '#222222', strokeWidth: 1.5 }}
                        whiskerStyle={{ stroke: '#161616', strokeWidth: 1.5 }}
                        middleStyle={{ stroke: '#161616', strokeWidth: 3 }}
                        whiskerCapWidth={0.3}
                    />
                    <QuantileTooltip
                        maxOverhang={[40, 40, 40, 40]}
                        size={[220, 140]}
                        cellSize={[40, 20]}
                        cellPadding={20}
                        padding={[8, 8, 8, 8]}
                        itemSize={[160, 26]}
                        labelFormat={(x: TooltipDataItem) => x.key ?? ''}
                        valueFormat={roundExp2dp}
                        title={''}
                    />
                </MilestoneMotion>
            </Quantile>
        </Chart>
    )
}
