import {
    Chart,
    Axis,
    AxisTicks,
    AxisLabel,
    GridLines,
    MilestoneMotion,
    Typography,
    ThemeSpec,
    mergeTheme,
    SymbolProps,
    SimpleDataComponent,
    Tooltip,
    TooltipProvider,
} from '@chsk/core'
import {
    Scatter,
    ScatterPoints,
    ScatterCrosshair,
    isScatterData,
    ScatterInteractiveDataItem,
} from '@chsk/xy'
import { randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { buttonTheme } from '@chsk/themes'

const round3 = (x: unknown | number): number => Math.round(Number(x) * 1000) / 1000

export const generateManhattanScatterData = () => {
    // set up chromosomes
    const nChroms = 8
    const chromLengths = Array(nChroms)
        .fill(0)
        .map(() => round3(randomUniformValue(25, 250)))
        .sort((a, b) => b - a)
    // create data points with null distribution
    const density = 2
    let nPoints = 0
    let offset = 0
    const result = chromLengths.map((chromL, index) => {
        const n = Math.round(density * chromL)
        offset += index > 0 ? chromLengths[index - 1] : 0
        nPoints += n
        const pointInterval = chromL / (n + 1)
        const positions: number[] = Array(n)
            .fill(0)
            .map((_, index) => (index + 1) * pointInterval)
        const values = Array(n)
            .fill(0)
            .map(() => randomUniformValue(0, 1))
        return {
            id: 'chr' + (index + 1),
            data: positions.map((x, j) => ({
                pos: x,
                absPos: offset + x,
                value: -Math.log10(Math.max(values[j], 1e-12)),
            })),
        }
    })
    // add hits
    const nHits = Math.round(randomUniformValue(1, 5))
    const hits = new Set(
        Array(nHits)
            .fill(0)
            .map(() => Math.round(randomUniformValue(0, nPoints)))
    )
    const changeValue = (chromIndex: number, pointIndex: number, newValue: number) => {
        result[chromIndex].data[pointIndex].value = newValue
    }
    offset = 0
    chromLengths.forEach((chromL, index) => {
        const nChromPoints = result[index].data.length
        for (let i = 2; i < nChromPoints - 2; i++) {
            if (hits.has(offset + i)) {
                const level = randomUniformValue(5, 10)
                const noise = Array(5)
                    .fill(0)
                    .map(() => randomUniformValue(0, 1))
                noise[2] = 1
                noise.map((noiseValue, j) => {
                    changeValue(index, i + j - 2, level * noise[j])
                })
            }
        }
        offset += nChromPoints
    })
    return result
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    line: {
        grid: {
            stroke: '#dddddd',
            strokeWidth: 1,
        },
        crosshair: {
            stroke: '#444444',
            strokeDasharray: 6,
        },
    },
})

// draw a circle with a simple svg component
// this is a replacement for the Circle component, which animates cx, cy, r
const SimpleCircle = ({ cx, cy, r, className, style }: SymbolProps) => {
    return <circle cx={cx} cy={cy} r={r} style={style} className={className} />
}

// create a label for a tooltip entry
const customTooltipFormat = (item: ScatterInteractiveDataItem): string => {
    const original: Record<string, unknown> = item.original ?? {}
    return item.index + ' (' + round3(original.pos) + ', ' + round3(original.value) + ')'
}

export const ManhattanScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null

    const chromBoundaries = [0]
    rawData.forEach((series, index) => {
        const lastPoint = series.data[series.data.length - 1]
        if (index === rawData.length - 1) {
            chromBoundaries.push(Number(lastPoint.absPos))
        } else {
            chromBoundaries.push(
                (Number(lastPoint.absPos) + Number(rawData[index + 1].data[0].absPos)) / 2
            )
        }
    })
    const chromNames = rawData.map(series => series.id)
    const chromMids = chromBoundaries
        .slice(1, chromBoundaries.length)
        .map((x, i) => (x + chromBoundaries[i]) / 2)
    const chromLabel = (value: unknown, index: number) => {
        return index < 3 || index % 2 == 1 ? chromNames[index] : ''
    }
    let nPoints = 0
    rawData.forEach(series => {
        nPoints += series.data.length
    })

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="manhattan-scatter"
            size={[800, 400]}
            padding={[60, 40, 80, 60]}
            theme={customTheme}
        >
            <Scatter
                data={rawData}
                x={'absPos'}
                y={'value'}
                scaleX={{
                    variant: 'linear',
                    domain: [0, 'auto'],
                }}
                scaleY={{
                    variant: 'linear',
                    domain: [0, 'auto'],
                }}
                valueSize={3}
            >
                <Typography position={[-45, -40]} variant={'title'}>
                    Manhattan plot
                </Typography>
                <Typography position={[-45, -20]} variant={'subtitle'}>
                    This chart has {nPoints} data points
                </Typography>
                <DownloadButtons position={[610, -30]} data image />
                <MilestoneMotion initialOn={'axes'}>
                    <GridLines variant={'y'} />
                    <GridLines variant={'x'} values={chromBoundaries} />
                    <Axis variant={'bottom'}>
                        <AxisTicks
                            variant={'bottom'}
                            ticks={chromMids}
                            tickSize={0}
                            labelFormat={chromLabel}
                        />
                        <AxisLabel variant={'bottom'}>Genome position</AxisLabel>
                    </Axis>
                    <Axis variant={'left'} label={'- log10 (p-value)'} />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'data'}>
                    <ScatterPoints symbol={SimpleCircle} dataComponent={SimpleDataComponent} />
                    <TooltipProvider>
                        <ScatterCrosshair minDistance={30} tooltipFormat={customTooltipFormat} />
                        <Tooltip
                            translate={[0, -10]}
                            anchor={[0.5, 1]}
                            itemSize={[170, 30]}
                            itemPadding={[6, 6, 6, 6]}
                            style={{ stroke: '#222222', strokeWidth: 1 }}
                        />
                    </TooltipProvider>
                </MilestoneMotion>
            </Scatter>
        </Chart>
    )
}
