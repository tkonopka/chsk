import { m, LazyMotion, domAnimation } from 'framer-motion'
import {
    Chart,
    Axis,
    ThemeSpec,
    Typography,
    useScales,
    TooltipDataItem,
    Rectangle,
    Line,
    ContinuousAxisScale,
    Legend,
    MilestoneMotion,
    mergeTheme,
} from '@chsk/core'
import {
    BoxAndWhiskersProps,
    isStripData,
    Quantile,
    Quantiles,
    QuantileTooltip,
    Strip,
    StripProps,
    Strips,
} from '@chsk/band'
import { MilestoneStory } from '../types'
import { generateMixedPopulation, generateUniformPopulation, round2dp } from '../utils'
import { tooltipItemLabelValueTheme } from '@chsk/themes'

export const generateBarStripData = () => {
    const means = generateUniformPopulation(6, 10, 80)
    const ids = ['alpha', 'beta', 'gamma']
    const positive = (v: number) => v >= 0
    return ids.map((id, index) => ({
        id,
        x: generateMixedPopulation([6], [means[2 * index]], [10]).filter(positive),
        y: generateMixedPopulation([6], [means[2 * index + 1]], [10]).filter(positive),
    }))
}

export const customTheme: ThemeSpec = mergeTheme(tooltipItemLabelValueTheme, {
    line: {
        axis: {
            stroke: '#222222',
            strokeWidth: 2,
        },
        tick: {
            strokeWidth: 1,
        },
    },
    circle: {
        default: {
            pointerEvents: 'none',
        },
    },
    text: {
        tickLabel: {
            fontSize: '12px',
        },
    },
})

const stripProps: Omit<StripProps, 'data'> = {
    keys: ['x', 'y'],
    paddingInternal: 0.3,
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

// custom component that replaces BoxAndWhisker by a rectangle and a single whisker
export const BarAndWhisker = ({
    data,
    horizontal,
    boxStyle,
    whiskerStyle,
    whiskerCapWidth = 0.0,
    className,
    style,
    setRole,
    // interactivity props
    ...props
}: BoxAndWhiskersProps) => {
    const scales = useScales()
    if (!data) return null

    const halfBand = data.bandWidth / 2
    const halfCap = whiskerCapWidth * halfBand
    const coords = horizontal ? data.values.map(v => v).reverse() : data.values

    const cx = data.bandStart + halfBand
    const cy = data.values[2]
    const scaleValue = horizontal
        ? (scales.x as ContinuousAxisScale)
        : (scales.y as ContinuousAxisScale)
    const zero = scaleValue(0)

    const box = (
        <Rectangle
            x={-halfBand}
            y={-cy + coords[2]}
            width={data.bandWidth}
            height={zero - coords[2]}
            style={boxStyle}
            className={className}
        />
    )
    const lines = [
        <Line
            key={'whisker-upper'}
            x1={0}
            x2={0}
            y1={-cy + coords[2]}
            y2={-cy + coords[3]}
            style={whiskerStyle}
            className={className}
        />,
    ]
    const caps = [
        <Line
            key={'whisker-upper-cap'}
            x1={-halfCap}
            x2={halfCap}
            y1={-cy + coords[3]}
            y2={-cy + coords[3]}
            style={whiskerStyle}
            className={className}
        />,
    ]

    const config = {
        x: horizontal ? cy : cx,
        y: horizontal ? cx : cy,
        rotate: horizontal ? -90 : 0,
        originX: '0px',
        originY: '0px',
    }
    return (
        <m.g
            initial={config}
            animate={config}
            role={setRole ? 'boxwhisker' : undefined}
            style={style}
            {...props}
        >
            {box}
            {lines}
            {whiskerCapWidth > 0 ? caps : null}
        </m.g>
    )
}

export const BarStripChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isStripData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="waterfall"
            size={[360, 400]}
            padding={[60, 140, 60, 70]}
            theme={customTheme}
        >
            <Typography variant={'title'} position={[-50, -45]}>
                Distributions as strip and bars
            </Typography>
            <Quantile {...stripProps} data={rawData} paddingInternal={0}>
                <Axis variant={'bottom'} label={'Experiments'} />
                <Axis variant={'left'} label={'Measurements (a.u.)'} />
                <Legend
                    translate={[20, 0]}
                    position={[1, 1]}
                    positionUnits={'relative'}
                    sizeUnits={'absolute'}
                    horizontal={false}
                    anchor={[0, 1]}
                    padding={[0, 0, 0, 0]}
                    r={9}
                    itemSize={[100, 20]}
                    itemPadding={[2, 2, 2, 2]}
                    title={'Conditions'}
                />
                <MilestoneMotion initialOn={'boxes'} exitOn={'bars'}>
                    <Quantiles
                        boxStyle={{ fillOpacity: 0.35, stroke: '#222222', strokeWidth: 2 }}
                        whiskerStyle={{ stroke: '#161616', strokeWidth: 2 }}
                        medianStyle={{ stroke: '#161616', strokeWidth: 3 }}
                        whiskerCapWidth={0.5}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'bars'}>
                    <LazyMotion features={domAnimation}>
                        <Quantiles
                            boxStyle={{ fillOpacity: 0.35, stroke: '#222222', strokeWidth: 2 }}
                            whiskerStyle={{ stroke: '#161616', strokeWidth: 2 }}
                            medianStyle={{ stroke: '#161616', strokeWidth: 3 }}
                            whiskerCapWidth={0.5}
                            component={BarAndWhisker}
                        />
                    </LazyMotion>
                </MilestoneMotion>
                <QuantileTooltip
                    maxOverhang={[40, 40, 40, 40]}
                    size={[200, 140]}
                    anchor={[0.5, 0]}
                    translate={[0, 15]}
                    cellSize={[40, 20]}
                    cellPadding={20}
                    padding={[8, 8, 8, 8]}
                    itemSize={[160, 26]}
                    labelFormat={(x: TooltipDataItem) => {
                        console.log(JSON.stringify(x))
                        return x.key ?? ''
                    }}
                    valueFormat={round2dp}
                    title={''}
                />
            </Quantile>
            <Strip {...stripProps} data={rawData} valueSize={4} style={{ pointerEvents: 'none' }}>
                <MilestoneMotion initialOn={'points'} exitOn={'barsonly'}>
                    <Strips symbolStyle={{ strokeWidth: 1, stroke: '#161616' }} />
                </MilestoneMotion>
            </Strip>
        </Chart>
    )
}
