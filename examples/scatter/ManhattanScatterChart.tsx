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
    ViewClip,
    ViewController,
    isArray,
    indexes,
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
import { DownloadButtons, IconButton } from '../navigation'
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
        offset += index > 0 ? (chromLengths[index - 1] as number) : 0
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
                value: -Math.log10(Math.max(Number(values[j]), 1e-12)),
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
        const obj = result[chromIndex]?.data[pointIndex]
        if (obj) obj.value = newValue
    }
    offset = 0
    indexes(chromLengths).forEach(index => {
        const nChromPoints = result[index]?.data.length ?? 0
        for (let i = 2; i < nChromPoints - 2; i++) {
            if (hits.has(offset + i)) {
                const level = randomUniformValue(5, 10)
                const noise = Array(5)
                    .fill(0)
                    .map(() => randomUniformValue(0, 1))
                noise[2] = 1
                indexes(noise).map(j => {
                    changeValue(index, i + j - 2, level * Number(noise[j]))
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
    return item.index + ' (' + round3(original['pos']) + ', ' + round3(original['value']) + ')'
}

export const ManhattanScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null

    const chromBoundaries = [0]
    rawData.forEach((series, index) => {
        const d = series.data
        const lastPoint = isArray(d) ? d[d.length - 1] : { absPos: 0 }
        if (index === rawData.length - 1) {
            chromBoundaries.push(Number(lastPoint?.['absPos']))
        } else {
            const nextSeries = rawData[index + 1]?.['data']
            const nextPos = isArray(nextSeries) ? Number(nextSeries[0]?.['absPos']) : 0
            chromBoundaries.push((Number(lastPoint?.['absPos']) + nextPos) / 2)
        }
    })
    const chromNames = rawData.map(series => series.id)
    const chromMids = chromBoundaries
        .slice(1, chromBoundaries.length)
        .map((x, i) => (x + Number(chromBoundaries[i])) / 2)
    const chromLabel = (value: unknown, index: number) => {
        return index < 3 || index % 2 == 1 ? chromNames[index] : String(value)
    }
    let nPoints = 0
    rawData.forEach(series => {
        const d = series.data
        nPoints += isArray(d) ? d.length : 0
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
                <MilestoneMotion enterOn={'axes'}>
                    <GridLines variant={'y'} />
                    <GridLines variant={'x'} values={chromBoundaries} />
                    <Axis variant={'bottom'}>
                        <AxisTicks ticks={chromMids} tickSize={0} labelFormat={chromLabel} />
                        <AxisLabel>Genome position</AxisLabel>
                    </Axis>
                    <Axis variant={'left'} label={'- log10 (p-value)'} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'data'}>
                    <ViewClip id={'manhattan-pointer'} expansion={[4, 4, 4, 4]}>
                        <ScatterPoints symbol={SimpleCircle} dataComponent={SimpleDataComponent} />
                    </ViewClip>
                    <TooltipProvider>
                        <ScatterCrosshair minDistance={30} tooltipFormat={customTooltipFormat} />
                        <Tooltip
                            offset={[0, -10]}
                            anchor={[0.5, 1]}
                            itemSize={[170, 30]}
                            itemPadding={[6, 6, 6, 6]}
                            style={{ stroke: '#222222', strokeWidth: 1 }}
                        />
                    </TooltipProvider>
                </MilestoneMotion>
                <ViewController
                    variant={'x'}
                    container={{ offset: [10, 0] }}
                    component={IconButton}
                />
                <DownloadButtons position={[610, -30]} data image />
            </Scatter>
        </Chart>
    )
}
