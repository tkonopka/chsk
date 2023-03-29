import {
    Axis,
    Chart,
    GridLines,
    Counter,
    ThemeSpec,
    mergeTheme,
    Rectangle,
    useScales,
} from '@chsk/core'
import { HeatMap, HeatMapCellProps, HeatMapCells } from '@chsk/matrix'
import { BoxedTitle } from '@chsk/annotation'
import { downloadTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { randomUniformValue } from '../utils'
import { DownloadButtons } from '../navigation'

const keys = ['A', 'B', 'C']
export const generateConfusionTableData = () => [
    {
        id: 'A',
        A: Math.round(randomUniformValue(50, 100)),
        B: Math.round(randomUniformValue(5, 30)),
        C: Math.round(randomUniformValue(10, 20)),
    },
    {
        id: 'B',
        A: Math.round(randomUniformValue(10, 20)),
        B: Math.round(randomUniformValue(50, 100)),
        C: Math.round(randomUniformValue(0, 10)),
    },
    {
        id: 'C',
        A: Math.round(randomUniformValue(0, 20)),
        B: Math.round(randomUniformValue(10, 30)),
        C: Math.round(randomUniformValue(60, 100)),
    },
]

const customTheme: ThemeSpec = mergeTheme(downloadTheme, {
    rect: {
        boxedTitle: {
            stroke: '#222222',
            strokeWidth: 1,
            fill: '#fafafa',
        },
    },
    line: {
        grid: {
            stroke: '#222222',
        },
    },
    text: {
        'label.outer': {
            fontSize: '16px',
            fontWeight: 600,
        },
        'counter.cell': {
            textAnchor: 'middle',
            dominantBaseline: 'middle',
            fontSize: '18px',
        },
        'counter.cell.highvalue': {
            fill: '#ffffff',
        },
        tickLabel: {
            fontSize: '16px',
            fontWeight: 600,
        },
    },
    AxisTicks: {
        top: {
            tickSize: 0,
            labelOffset: 10,
        },
        left: {
            tickSize: 0,
            labelOffset: 11,
        },
    },
    Motion: {
        default: {
            type: 'spring',
            mass: 0.5,
            stiffness: 200,
            damping: 25,
        },
    },
})

const HeatMapCounter = ({ x, y, width, height, className, style, cellValue }: HeatMapCellProps) => {
    const colorScale = useScales().scales.color
    const color = colorScale(Number(cellValue))
    return (
        <>
            <Rectangle
                x={x}
                y={y}
                width={width}
                height={height}
                fill={color}
                style={{ ...style, fill: undefined }}
                center={true}
            />
            <Counter
                setRole={false}
                position={[x, y]}
                size={[width, height]}
                style={{ ...style, fill: undefined }}
                className={(cellValue ?? 0) > 65 ? className + ' highvalue' : className}
            >
                {cellValue}
            </Counter>
        </>
    )
}

export const ConfusionTableChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="confusion-table"
            size={[400, 250]}
            padding={[80, 40, 40, 80]}
            theme={customTheme}
        >
            <HeatMap
                data={rawData}
                keys={keys}
                scaleColor={{
                    variant: 'sequential',
                    colors: 'Blues',
                    domain: [0, 100],
                }}
            >
                <HeatMapCells cell={HeatMapCounter} style={{ strokeWidth: 0 }} />
                <GridLines variant={'x'} shift={[-0.5, 0.5]} />
                <GridLines variant={'y'} shift={[-0.5, 0.5]} />
                <BoxedTitle variant={'left'} offset={0} size={35} />
                <BoxedTitle variant={'left'} offset={35} size={35} className={'outer'}>
                    Ground truth
                </BoxedTitle>
                <BoxedTitle variant={'top'} offset={0} size={32} />
                <BoxedTitle variant={'top'} offset={32} size={32} className={'outer'}>
                    Model prediction
                </BoxedTitle>
                <Axis variant={'top'} />
                <Axis variant={'left'} />
                <DownloadButtons position={[210, 150]} data />
            </HeatMap>
        </Chart>
    )
}
