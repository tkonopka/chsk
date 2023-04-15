import { ReactNode } from 'react'
import {
    Chart,
    ThemeSpec,
    mergeTheme,
    View,
    Typography,
    MilestoneMotion,
    NumericPositionSpec,
    X,
    Y,
} from '@chsk/core'
import { BoxedLabel, FlowPath, ArrowMarker } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { randomUniformValue } from '../utils'

// creates an array of integers [nTotal, nLoss, nA, nB]
export const generateTreeFlowData = () => {
    const nTotal = Math.floor(randomUniformValue(120, 260))
    const nLoss = Math.floor(randomUniformValue(2, 20))
    const n = nTotal - nLoss
    const nA = Math.floor(randomUniformValue(0.25 * n, 0.75 * n))
    const nB = n - nA
    const nA1 = Math.round(nA / 2)
    const nA2 = nA - nA1
    const nB1 = Math.round(nB / 2)
    const nB2 = nB - nB1
    return [nTotal, nLoss, nA, nB, nA1, nA2, nB1, nB2]
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    rect: {
        boxedLabel: {
            stroke: '#423e37',
            strokeWidth: 0,
            fill: '#fafafa',
        },
        'boxedLabel.start': {
            fill: '#423e37',
        },
        'boxedLabel.filter': {
            fillOpacity: 0,
        },
        'boxedLabel.A': {
            fill: '#f57600',
        },
        'boxedLabel.B': {
            fill: '#1985a1',
        },
    },
    path: {
        flow: {
            strokeWidth: '2px',
            fillOpacity: 0,
        },
    },
    text: {
        boxedLabel: {
            fill: '#fff',
            fontSize: '14px',
            pointerEvents: 'none',
        },
    },
    tspan: {
        italic: {
            fontStyle: 'italic',
        },
    },
})

// a boxed label with two separate text lines
const DoubleLabel = ({
    position,
    className,
    content1,
    value,
}: {
    position: NumericPositionSpec
    className?: string
    content1: string
    value: number
}) => {
    return (
        <BoxedLabel
            positionUnits={['relative', 'absolute']}
            rx={4}
            ry={4}
            size={[115, 44]}
            position={position}
            className={className}
        >
            <Typography variant={'boxedLabel'} position={[0, -9]}>
                {content1}
            </Typography>
            <Typography variant={'boxedLabel'} position={[0, 9]}>
                <tspan className={'italic'}>n</tspan> = {value}
            </Typography>
        </BoxedLabel>
    )
}

// milestone animation with an arrow flow-path, followed by custom children
const MilestoneArrow = ({
    points,
    enterOn,
    duration = 0.5,
    children,
}: {
    points: NumericPositionSpec[]
    enterOn: string
    duration?: number
    children: ReactNode
}) => {
    return (
        <>
            <MilestoneMotion enterOn={enterOn}>
                <FlowPath
                    points={points}
                    units={['relative', 'absolute']}
                    transition={{ pathLength: { duration } }}
                    markerEnd={'treeArrow'}
                />
            </MilestoneMotion>
            <MilestoneMotion enterOn={enterOn} transition={{ delay: duration }} exit={null}>
                {children}
            </MilestoneMotion>
        </>
    )
}

export const TreeFlowChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    const nData = rawData as unknown as number[]
    const [nTotal, nLoss, nA, nB, nA1, nA2, nB1, nB2] = nData
    // coordinates and settings for box locations
    const boxStart: NumericPositionSpec = [0.5, 30]
    const boxFilter: NumericPositionSpec = [0.5, 90]
    const boxA: NumericPositionSpec = [0.24, 180]
    const boxA1: NumericPositionSpec = [0.12, 270]
    const boxA2: NumericPositionSpec = [0.36, 270]
    const boxB: NumericPositionSpec = [0.76, 180]
    const boxB1: NumericPositionSpec = [0.64, 270]
    const boxB2: NumericPositionSpec = [0.88, 270]
    const boxH = 22
    const arrowPoints1: NumericPositionSpec[] = [
        [boxStart[X], boxStart[Y] + boxH],
        [boxFilter[X], boxFilter[Y] - boxH],
    ]
    const makeArrowPoints = (
        start: NumericPositionSpec,
        end: NumericPositionSpec
    ): NumericPositionSpec[] => [
        [start[X], start[Y] + boxH],
        [start[X], -2 + (start[Y] + end[Y]) / 2],
        [end[X], -2 + (start[Y] + end[Y]) / 2],
        [end[X], end[Y] - boxH - 4],
    ]
    const arrowPointsA0 = makeArrowPoints(boxFilter, boxA)
    const arrowPointsA1 = makeArrowPoints(boxA, boxA1)
    const arrowPointsA2 = makeArrowPoints(boxA, boxA2)
    const arrowPointsB0 = makeArrowPoints(boxFilter, boxB)
    const arrowPointsB1 = makeArrowPoints(boxB, boxB1)
    const arrowPointsB2 = makeArrowPoints(boxB, boxB2)

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="tree-flow"
            size={[600, 360]}
            padding={[40, 40, 40, 40]}
            theme={customTheme}
        >
            <defs>
                <ArrowMarker
                    variant={'Winged'}
                    id={'treeArrow'}
                    size={10}
                    style={{ fill: '#222222', fillOpacity: 1 }}
                />
            </defs>
            <View>
                <Typography variant={'title'} position={[-10, -20]}>
                    A / B study plan
                </Typography>
                <MilestoneMotion enterOn={'start'}>
                    <DoubleLabel
                        position={boxStart}
                        className={'start'}
                        content1={'Large cohort'}
                        value={nTotal}
                    />
                </MilestoneMotion>
                <MilestoneArrow points={arrowPoints1} enterOn={'filter'} duration={0.3}>
                    <BoxedLabel
                        positionUnits={['relative', 'absolute']}
                        rx={4}
                        ry={4}
                        size={[120, 44]}
                        position={boxFilter}
                        className={'filter'}
                    >
                        <Typography>{nLoss} failed data QC</Typography>
                    </BoxedLabel>
                </MilestoneArrow>
                <MilestoneArrow enterOn={'A'} points={arrowPointsA0}>
                    <DoubleLabel
                        position={boxA}
                        className={'A'}
                        content1={'Condition A'}
                        value={nA}
                    />
                </MilestoneArrow>
                <MilestoneArrow enterOn={'A1'} points={arrowPointsA1} duration={0.3}>
                    <DoubleLabel
                        position={boxA1}
                        className={'A'}
                        content1={'Condition A1'}
                        value={nA1}
                    />
                </MilestoneArrow>
                <MilestoneArrow enterOn={'A2'} points={arrowPointsA2} duration={0.3}>
                    <DoubleLabel
                        position={boxA2}
                        className={'A'}
                        content1={'Condition A2'}
                        value={nA2}
                    />
                </MilestoneArrow>
                <MilestoneArrow enterOn={'B'} points={arrowPointsB0}>
                    <DoubleLabel
                        position={boxB}
                        className={'B'}
                        content1={'Condition B'}
                        value={nB}
                    />
                </MilestoneArrow>
                <MilestoneArrow enterOn={'B1'} points={arrowPointsB1} duration={0.3}>
                    <DoubleLabel
                        position={boxB1}
                        className={'B'}
                        content1={'Condition B1'}
                        value={nB1}
                    />
                </MilestoneArrow>
                <MilestoneArrow enterOn={'B2'} points={arrowPointsB2} duration={0.3}>
                    <DoubleLabel
                        position={boxB2}
                        className={'B'}
                        content1={'Condition B2'}
                        value={nB2}
                    />
                </MilestoneArrow>
                <DownloadButtons position={[470, -20]} image />
            </View>
        </Chart>
    )
}
