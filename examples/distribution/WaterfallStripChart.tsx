import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    GridLines,
    Surface,
    ThemeSpec,
    Typography,
    BandAxisScale,
    LinearAxisScale,
    useScales,
    SizeSpec,
    BandScaleSpec,
} from '@chsk/core'
import { BandHighlight, isStripData, Strip, Strips } from '@chsk/band'
import { BoxedLabel } from '@chsk/annotation'
import { MilestoneStory } from '../types'
import { generateMixedPopulation, generateIdentifiers } from '../utils'

export const generateWaterfallStripData = () => {
    const ids = generateIdentifiers(1000, 10000, 'S')
    const values = generateMixedPopulation([930, 70], [0, 0], [1, 3])
    return ids
        .map((id, i) => ({
            id,
            data: [values[i]],
        }))
        .sort((a, b) => -a.data[0] + b.data[0])
}

export const customTheme: ThemeSpec = {
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 1,
        },
        grid: {
            strokeDasharray: '5 5',
        },
    },
    rect: {
        'surface.inner': {
            stroke: '#222222',
            strokeWidth: 1,
            fill: '#ffffff',
        },
        boxedLabel: {
            fill: '#ffffff',
        },
    },
    text: {
        boxedLabel: {
            fill: '#555555',
        },
    },
}

// custom component that draws a BoxedLabel at the center between two bands
const BetweenBandsLabel = ({
    x1,
    x2,
    y,
    label,
    size,
}: {
    x1: string
    x2: string
    y: number
    label: string
    size: SizeSpec
}) => {
    const { scales } = useScales()
    const scaleIndex = scales.x as BandAxisScale
    const scaleValue = scales.y as LinearAxisScale
    const center: [number, number] = [(scaleIndex(x1) + scaleIndex(x2)) / 2, scaleValue(y)]
    return (
        <BoxedLabel position={center} size={size}>
            {label}
        </BoxedLabel>
    )
}

export const WaterfallStripChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isStripData(rawData)) return null
    const subsetData = rawData.filter(d => Math.abs((d.data as number[])[0]) > 2.5)
    const omitted = '(' + (rawData.length - subsetData.length) + ' samples)'

    // band scale with a gap for a custom label
    const lastPositiveId = subsetData
        .filter(d => Number((d.data as number[])[0]) > 0)
        .reverse()[0].id
    const firstNegativeId = subsetData.filter(d => Number((d.data as number[])[0]) < 0)[0].id
    const scaleIndex: BandScaleSpec = {
        variant: 'band' as const,
        paddingOuter: 0.1,
        paddingInner: 0.2,
        extraPadding: {},
    }
    if (scaleIndex.extraPadding) {
        scaleIndex.extraPadding[firstNegativeId] = 6
    }

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="waterfall"
            size={[800, 340]}
            padding={[60, 40, 60, 60]}
            theme={customTheme}
        >
            <Strip
                data={subsetData}
                keys={['data']}
                scaleValue={{
                    variant: 'linear' as const,
                }}
                scaleIndex={scaleIndex}
            >
                <Surface />
                <GridLines
                    variant={'y'}
                    values={[-2.5, 2.5]}
                    style={{ stroke: '#222222', strokeWidth: 2 }}
                />
                <Axis variant={'bottom'}>
                    <AxisTicks
                        variant={'bottom'}
                        tickSize={5}
                        labelAngle={-45}
                        labelDistance={9}
                        labelStyle={{ textAnchor: 'end', dominantBaseline: 'middle' }}
                    />
                    <AxisLabel variant={'bottom'} distance={55}>
                        Samples
                    </AxisLabel>
                </Axis>
                <Axis variant={'left'}>
                    <AxisTicks variant={'left'} tickSize={5} />
                    <AxisLabel variant={'left'}>z-score</AxisLabel>
                </Axis>
                <Axis variant={'right'}>
                    <AxisTicks variant={'right'} tickSize={5} />
                </Axis>
                <Strips />
                <BetweenBandsLabel
                    x1={lastPositiveId}
                    x2={firstNegativeId}
                    y={0}
                    label={omitted}
                    size={[80, 40]}
                />
                <BandHighlight style={{ fill: '#222222', opacity: 0.3 }} />
            </Strip>
            <Typography variant={'title'} position={[0, -40]}>
                Focus on the edges of a distribution
            </Typography>
            <Typography variant={'subtitle'} position={[0, -18]}>
                {subsetData.length} samples out of {rawData.length} have |z| &gt; 2.5
            </Typography>
        </Chart>
    )
}
