import {
    Chart,
    Axis,
    Surface,
    ThemeSpec,
    Typography,
    Grid,
    GridItem,
    interval,
    Draggable,
    DraggableProps,
    useDimensions,
    Y,
    DragData,
    mergeTheme,
} from '@chsk/core'
import { Stripe } from '@chsk/annotation'
import {
    Histogram,
    HistogramCurve,
    isHistogramData,
    isScatterData,
    Regression,
    Scatter,
    ScatterPoints,
} from '@chsk/xy'
import { buttonTheme } from '@chsk/themes'
import { generateMixedPopulation } from '../utils'
import { MilestoneStory } from '../types'
import { useEffect, useState } from 'react'
import { DownloadButtons } from '../navigation'

type ScatterData = Array<Record<string, unknown>>

export const generateHistogramScatterData = () => {
    // create two separate populations
    const groupA = generateMixedPopulation([200], [0], [1])
    const noiseA = generateMixedPopulation([200], [0], [1])
    const groupB = generateMixedPopulation([50], [0], [2.5])
    const noiseB = generateMixedPopulation([50], [0], [1])
    // create a dataset where two populations have different trends
    const data: ScatterData = []
    groupA.forEach((x, i) => {
        data.push({ k: data.length, x, y: x * 1.0 + Number(noiseA[i]) })
    })
    groupB.forEach((x, i) => {
        data.push({ k: data.length, x, y: x * 4.0 + Number(noiseB[i]) })
    })
    return [{ id: 'A', data }]
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    g: {
        'draggable:hover': {
            cursor: 'ew-resize',
        },
    },
    line: {
        regression: {
            strokeWidth: 3,
        },
        'regression.pooled': {
            strokeDasharray: 6,
            stroke: '#444444',
        },
        'regression.outside': {
            strokeWidth: 2,
            opacity: 0.7,
        },
        'regression.inside': {
            strokeWidth: 4,
        },
        threshold: {
            stroke: '#222222',
            strokeWidth: 1,
        },
        thresholdBg: {
            opacity: 0,
            strokeWidth: 12,
        },
    },
    rect: {
        domain: {
            fill: '#3f9cde',
            fillOpacity: 0.15,
        },
        surface: {
            strokeWidth: 1,
            stroke: '#444444',
            fill: '#ffffff',
        },
        controls: {
            fill: '#fafafa',
        },
    },
})

// stratify a dataset according to an x coordinate into points inside/outside an interval
const stratifyByX = (data: ScatterData, lower: number, upper: number) => {
    const inside: ScatterData = []
    const outside: ScatterData = []
    data.forEach(d => {
        const x = Number(d['x'])
        if (x < lower || x > upper) {
            outside.push(d)
        } else {
            inside.push(d)
        }
    })
    return [
        { id: 'inside', data: inside },
        { id: 'outside', data: outside },
    ]
}

const DraggableThreshold = ({
    value,
    onDrag,
}: Pick<DraggableProps, 'onDrag'> & { value?: number }) => {
    const { size } = useDimensions()
    if (value === undefined) return null
    return (
        <Draggable
            variant={'x'}
            position={[value, 0]}
            positionUnits={['view', 'absolute']}
            onDrag={onDrag}
        >
            <line x1={0} y1={0} x2={0} y2={size[Y]} className={'thresholdBg'} />
            <line x1={0} y1={0} x2={0} y2={size[Y]} className={'threshold'} />
        </Draggable>
    )
}

export const HistogramScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null

    // interval, will be set by sliders on a histogram
    const [lower, setLower] = useState<number | undefined>(undefined)
    const [upper, setUpper] = useState<number | undefined>(undefined)
    const [instance, setInstance] = useState<number>(0)

    //
    const histogramData = rawData.map(seriesData => {
        const data = seriesData.data as Array<Record<string, number>>
        const values: number[] = data.map(d => Number(d.x))
        return { id: seriesData.id, data: values }
    })

    const scatterData = stratifyByX(rawData[0]?.data as ScatterData, Number(lower), Number(upper))

    // on first render, adjust the bounds to include all the data
    useEffect(() => {
        const [min, max] = interval(histogramData[0]?.data as number[])
        setLower(min)
        setUpper(max)
        setInstance(instance => instance + 1)
    }, [rawData])

    if (!isHistogramData(histogramData)) return null
    if (!isScatterData(scatterData)) return null

    const handleLower = (data: DragData) => {
        setLower(data.view[0])
    }
    const handleUpper = (data: DragData) => {
        setUpper(data.view[0])
    }

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="histogram-scatter"
            size={[600, 480]}
            padding={[50, 40, 60, 60]}
            theme={customTheme}
        >
            <Grid grid={[1, 2]} spacing={[0, 6]} heights={[0.12, 0.88]}>
                <GridItem index={0}>
                    <Histogram data={histogramData} breaks={20} variant={'density'}>
                        <Surface className={'controls'} expansion={[0, 6, 0, 6]} />
                        <HistogramCurve style={{ stroke: '#222222', strokeWidth: 2 }} />
                        <Stripe
                            key={'stripe'}
                            variant={'x'}
                            domain={[lower ?? 0, upper ?? 0]}
                            domainUnits={'view'}
                            className={'domain'}
                        />
                        <DraggableThreshold
                            key={'lower-threshold-' + instance}
                            value={lower}
                            onDrag={handleLower}
                        />
                        <DraggableThreshold
                            key={'upper-threshold-' + instance}
                            value={upper}
                            onDrag={handleUpper}
                        />
                    </Histogram>
                </GridItem>
                <GridItem index={1}>
                    <Scatter data={scatterData} x={'x'} y={'y'} k={'k'} valueSize={2}>
                        <Surface expansion={[6, 6, 6, 6]} />
                        <Axis variant={'bottom'} label={'x (a.u.)'} distance={6} />
                        <Axis variant={'left'} label={'y (a.u.)'} distance={6} />
                        <ScatterPoints />
                        <Regression variant={'pooled'} className={'pooled'} />
                        <Regression ids={['outside']} className={'outside'} />
                        <Regression ids={['inside']} className={'inside'} />
                    </Scatter>
                </GridItem>
            </Grid>
            <Typography variant={'title'} position={[0, -25]}>
                Regression with custom domain
            </Typography>
            <DownloadButtons position={[410, -25]} data image />
        </Chart>
    )
}
