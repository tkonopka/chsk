import {
    Chart,
    Axis,
    GridLines,
    Legend,
    MilestoneMotion,
    Surface,
    Typography,
    NumericPositionSpec,
    useScales,
    ContinuousAxisScale,
    SizeSpec,
    ContainerProps,
} from '@chsk/core'
import { Scatter, ScatterCurve, isScatterData } from '@chsk/xy'
import { FlowPath } from '@chsk/annotation'
import { randomNormalValue, randomUniformValue, round3dp, stepSequence } from '../utils'
import { MilestoneStory } from '../types'

export const generateInnerPanelLineData = () => {
    const xValues = stepSequence([0, 80], 0.1)
    const a = randomUniformValue(0.05, 0.2)
    const c = randomUniformValue(0.015, 0.15)
    const b1 = randomUniformValue(49, 51)
    const b2 = randomUniformValue(48, 52)
    const d = randomUniformValue(0.5, 1.5)
    const addNoise = (x: number) => Math.max(0, x + 0.05 * randomNormalValue(0, Math.sqrt(x)))
    const generateData = (x: number, b: number) => ({
        x: round3dp(x),
        y: round3dp(addNoise(Math.exp(-x * a) + c * Math.exp(-d * (x - b) * (x - b)))),
    })
    return [
        {
            id: 'alpha',
            data: xValues.map(x => generateData(x, b1)),
        },
        {
            id: 'beta',
            data: xValues.map(x => generateData(x, b2)),
        },
    ]
}

const customTheme = {
    rect: {
        inner: {
            fill: '#ffffff',
            stroke: '#222222',
            strokeWidth: 1,
        },
    },
    path: {
        default: {
            fillOpacity: 0,
        },
        flow: {
            strokeWidth: 1.5,
            stroke: '#222222',
        },
    },
    AxisTicks: {
        left: {
            tickSize: -6,
            labelDistance: 6,
        },
        bottom: {
            tickSize: -6,
            labelDistance: 6,
        },
    },
}

const ZoomBox = ({
    fromX,
    fromY,
    toCorner = [0, 0],
    toSize = [100, 100],
}: {
    fromX: [number, number]
    fromY: number
    toCorner?: NumericPositionSpec
    toSize?: SizeSpec
}) => {
    const { scales } = useScales()
    const xScale = scales.x as ContinuousAxisScale
    const yScale = scales.y as ContinuousAxisScale
    // convert from view coordinates into absolute coordinates
    const x0 = xScale(fromX[0])
    const x1 = xScale(fromX[1])
    const y = yScale(fromY)
    return (
        <>
            <FlowPath
                points={[
                    [x0, y],
                    [toCorner[0], toCorner[1] + toSize[1]],
                ]}
                units={'absolute'}
                transition={{ pathLength: { duration: 0.7 } }}
            />
            <FlowPath
                points={[
                    [x1, y],
                    [toCorner[0] + toSize[0], toCorner[1] + toSize[1]],
                ]}
                units={'absolute'}
                transition={{ pathLength: { duration: 0.7 } }}
            />
        </>
    )
}

export const InnerPanelLineChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null

    const bounds: [number, number] = [45, 55]
    const detailData = rawData.map(item => ({
        id: item.id,
        data: item.data.filter(d => Number(d['x']) < bounds[1] && Number(d['x']) > bounds[0]),
    }))
    const detailMax =
        1.2 *
        detailData
            .map(item => item.data.map(d => Number(d['y'])))
            .flat()
            .reduce((max, y) => Math.max(y, max), 0)

    const zoomRect: NumericPositionSpec[] = [
        [bounds[0], detailMax],
        [bounds[1], detailMax],
        [bounds[1], 0],
        [bounds[0], 0],
        [bounds[0], detailMax],
    ]
    const insetContainer: ContainerProps = {
        position: [230, 30],
        positionUnits: 'absolute',
        size: [200, 160],
        sizeUnits: 'absolute',
    }
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="inner-panel"
            size={[640, 420]}
            padding={[60, 100, 60, 60]}
            theme={customTheme}
        >
            <Scatter data={rawData} x={'x'} y={'y'} valueSize={3}>
                <Typography position={[0, -20]} variant={'title'}>
                    Line chart with inset
                </Typography>
                <MilestoneMotion enterOn={'axes'}>
                    <GridLines variant={'y'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                    <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                    <Surface />
                    <Axis variant={'bottom'} label={'x values (a.u.)'} />
                    <Axis variant={'left'} label={'y values (a.u.)'} />
                    <Legend
                        horizontal={false}
                        position={[1.0, 1]}
                        positionUnits={'relative'}
                        size={[80, 80]}
                        sizeUnits={'absolute'}
                        anchor={[0, 1]}
                        padding={[0, 12, 0, 12]}
                        r={10.5}
                        itemSize={[80, 20]}
                        itemPadding={[2, 2, 2, 2]}
                        title={'Populations'}
                        firstOffset={[0, 4]}
                    />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'box'}>
                    <FlowPath points={zoomRect} units={'view'} style={{ fill: '#f8f8f8' }} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'data'}>
                    <ScatterCurve />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'inner'}>
                    <ZoomBox
                        fromX={bounds}
                        fromY={detailMax}
                        toCorner={insetContainer.position as NumericPositionSpec}
                        toSize={insetContainer.size}
                    />
                </MilestoneMotion>
                <MilestoneMotion
                    enterOn={'inner'}
                    exit={null}
                    transition={{ type: 'spring', delay: 0.7 }}
                >
                    <Scatter
                        container={insetContainer}
                        x={'x'}
                        y={'y'}
                        data={detailData}
                        valueSize={3}
                    >
                        <Surface style={{ strokeWidth: 1.5, fill: '#f8f8f8' }} />
                        <Axis variant={'bottom'} />
                        <Axis variant={'left'} />
                        <ScatterCurve />
                    </Scatter>
                </MilestoneMotion>
            </Scatter>
        </Chart>
    )
}
