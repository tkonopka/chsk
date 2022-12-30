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
} from '@chsk/core'
import { Scatter, ScatterPoints, isScatterData } from '@chsk/xy'
import { randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { downloadThemePiece } from '@chsk/themes'

const round3 = (x: number): number => Math.round(x * 1000) / 1000

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
        const positions: number[] = Array(n)
            .fill(0)
            .map(() => round3(randomUniformValue(0, chromL)))
            .sort((a, b) => a - b)
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

const customTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    line: {
        grid: {
            stroke: '#dddddd',
            strokeWidth: 1,
        },
    },
})

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

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="manhattan-scatter"
            size={[800, 400]}
            padding={[60, 40, 60, 60]}
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
                <MilestoneMotion initial={'invisible'} initialOn={'axes'}>
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
                <MilestoneMotion initial={'invisible'} initialOn={'data'}>
                    <ScatterPoints />
                </MilestoneMotion>
                <Typography position={[-45, -30]} variant={'title'}>
                    Manhattan plot
                </Typography>
                <DownloadButtons position={[610, -30]} data image />
            </Scatter>
        </Chart>
    )
}
