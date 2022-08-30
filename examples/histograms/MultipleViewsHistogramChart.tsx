import {
    Chart,
    Axis,
    AxisTicks,
    GridLines,
    ThemeSpec,
    SizeSpec, Surface, AxisLabel,
    Typography
} from '@chask/core'
import { BoxedLabel } from '@chask/annotation'
import {generateHistogramValues, makeBreaks} from './generators'
import { Histogram, HistogramCurve } from '@chask/xy'

const valuesSmall = generateHistogramValues([60, 40], [0, 1.2], [0.8, 1])
const valuesMedium = generateHistogramValues([360, 240], [0, 1.2], [0.8, 1])
const valuesLarge = generateHistogramValues([2160, 1440], [0, 1.2], [0.8, 1])
const breaks = makeBreaks([-3, 4], 0.4)

const rawData = [
    {
        id: 'small',
        data: valuesSmall,
    },
    {
        id: 'medium',
        data: valuesMedium,
    },
    {
        id: 'large',
        data: valuesLarge,
    },
]

export const multiviewTheme: ThemeSpec = {
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 1,
        },
    },
    path: {
        histogramCurve: {
            strokeWidth: 3,
        }
    },
    rect: {
        inner: {
            fill: '#ffffff00',
            stroke: '#222222',
            strokeWidth: 1,
        },
        boxedLabel: {
            fill: '#f6f6f6',
            stroke: '#222222',
            strokeWidth: 1,
        }
    },
    text: {
        axisLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
        title: {
            fontWeight: 400,
        }
    },
}

const multiviewHistogramProps = {
    size: [0.333, 1] as SizeSpec,
    units: 'relative' as const,
    data: rawData,
    breaks: breaks,
    density: true,
    scaleX: {
        variant: 'linear' as const,
        domain: [-3, 4] as [number, number],
    },
    scaleY: {
        variant: 'linear' as const,
        domain: [0, 0.55] as [number, number],
    },
}

export const MultipleViewsHistogramChart = () => (
    <Chart id="multiview" size={[600, 340]} padding={[60, 40, 40, 60]} theme={multiviewTheme}>
        <Histogram position={[0, 0]} {...multiviewHistogramProps}>
            <GridLines variant={'y'} shift={[-0.6]} />
            <Surface />
            <Axis variant={'bottom'} />
            <HistogramCurve ids={['small']}/>
            <Axis variant={'left'}>
                <AxisTicks variant={'left'} tickSize={0} />
                <AxisLabel variant={'left'}>probability density</AxisLabel>
            </Axis>
            <BoxedLabel position={[1, 0]} size={[60, 24]} units={'relative'}
                        translate={[-30, 12]} children={'n=' + rawData[0].data.length}
            />
        </Histogram>
        <Histogram position={[0.35, 0]} {...multiviewHistogramProps}>
            <GridLines variant={'y'} shift={[-0.6]} />
            <Surface />
            <Axis variant={'bottom'} label={'values (a.u.)'}/>
            <HistogramCurve ids={['medium']}/>
            <Axis variant={'left'} >
                <AxisTicks variant={'left'} tickSize={0} ticks={[]}/>
            </Axis>
            <BoxedLabel position={[1, 0]} size={[60, 24]} units={'relative'}
                        translate={[-30, 12]} children={'n=' + rawData[1].data.length}
            />
        </Histogram>
        <Histogram position={[0.7, 0]} {...multiviewHistogramProps} >
            <GridLines variant={'y'} shift={[-0.6]} />
            <Surface />
            <Axis variant={'bottom'} />
            <HistogramCurve ids={['large']}/>
            <Axis variant={'left'} ticks={[]}>
                <AxisTicks variant={'left'} tickSize={0} ticks={[]}/>
            </Axis>
            <BoxedLabel position={[1, 0]} size={[60, 24]} units={'relative'}
            translate={[-30, 12]} children={'n=' + rawData[2].data.length}
            />
        </Histogram>
        <Typography variant={'title'} position={[0, -40]}>
            Three measurements of the same distribution
        </Typography>
        <Typography variant={'subtitle'} position={[0, -20]}>
            Measurements involve sampling n points from a distribution
        </Typography>
    </Chart>
)
