import {
    Chart,
    ThemeSpec,
    mergeTheme,
    range,
    Grid,
    GridItem,
    ColorScaleSpec,
    interval,
    LegendTitle,
    LegendColorScale,
    Legend,
    ContinuousScaleSpec,
    Tooltip,
    TooltipDataItem,
} from '@chsk/core'
import { interpolateOranges } from 'd3-scale-chromatic'
import { isScatterData, Density, DensityCells, DensityCrosshair } from '@chsk/xy'
import { ArrowMarker, BoxedTitle } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { alphabetGreek, randomUniformValue, round3dp } from '../utils'
import { generateClusterCenters, generateClusterFrames } from './generators'
import { DimensionsArrows } from './CirclesDensityChart'

export const generateGradientsDensityData = () => {
    const n = Math.floor(randomUniformValue(5, 12))
    const centers = generateClusterCenters(n, [-40, 40], [-40, 40])
    const populations = range(n).map(() => Math.floor(randomUniformValue(2000, 5000)))
    const density = 30
    const data = generateClusterFrames(centers, populations, density)
    data.forEach((d: { x: number[]; y: number[] } & Record<string, number[]>) => {
        const xInterval = interval(d.x)
        const xSize = xInterval[1] - xInterval[0]
        const yInterval = interval(d.y)
        const ySize = yInterval[1] - yInterval[0]
        d['a'] = d.x.map(v => (v - xInterval[0]) / xSize)
        d['b'] = d.y.map(v => (v - yInterval[0]) / ySize)
    })
    return alphabetGreek.slice(0, n).map((id, i) => ({ id, data: data[i] }))
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    line: {
        arrow: {
            stroke: '#222222',
            strokeWidth: 2,
        },
        grid: {
            stroke: '#dddddd',
            strokeWidth: 1,
        },
    },
    rect: {
        boxedTitle: {
            fillOpacity: 0,
        },
    },
    text: {
        arrowLabel: {
            fill: '#222222',
            dominantBaseline: 'middle',
        },
        'label.boxedTitle': {
            fill: '#222222',
            fontSize: '16px',
            fontWeight: 600,
        },
    },
})

const customColorSpec: ColorScaleSpec = {
    variant: 'sequential',
    domain: [0, 1],
    colors: interpolateOranges,
}
const customScales: ContinuousScaleSpec = { variant: 'linear', domain: [-60, 60] }

const customLabelFormat = (x: TooltipDataItem) => {
    return 'data' in x ? x['label'] + '; mean: ' + round3dp(Number(x['data'])) : ''
}

export const GradientsDensityChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="gradients"
            size={[600, 310]}
            padding={[80, 100, 40, 40]}
            theme={customTheme}
        >
            <ArrowMarker variant={'chevron'} id={'arr'} size={11} style={{ strokeWidth: 2 }} />
            <Grid grid={[2, 1]} spacing={[40, 10]}>
                <GridItem index={0}>
                    <Density
                        data={rawData}
                        x={'x'}
                        y={'y'}
                        binSize={2}
                        valueColor={'a'}
                        scaleX={customScales}
                        scaleY={customScales}
                        scaleColor={customColorSpec}
                    >
                        <DensityCells />
                        <DensityCrosshair minDistance={20} />
                        <DimensionsArrows corner={[0, 200]} markerId={'arr'} />
                        <BoxedTitle variant={'top'} distance={15}>
                            Variable &lsquo;a&lsquo;
                        </BoxedTitle>
                        <Tooltip itemSize={[160, 25]} labelFormat={customLabelFormat} />
                    </Density>
                </GridItem>
                <GridItem index={1}>
                    <Density
                        data={rawData}
                        x={'x'}
                        y={'y'}
                        binSize={2}
                        valueColor={'b'}
                        scaleX={customScales}
                        scaleY={customScales}
                        scaleColor={customColorSpec}
                    >
                        <DensityCells />
                        <DensityCrosshair minDistance={20} />
                        <BoxedTitle variant={'top'} distance={15}>
                            Variable &lsquo;b&lsquo;
                        </BoxedTitle>
                        <DimensionsArrows corner={[0, 200]} markerId={'arr'} />
                        <Legend
                            variant={'color'}
                            horizontal={false}
                            offset={[20, 0]}
                            position={[1, 0.5]}
                            size={[60, 160]}
                            positionUnits={'relative'}
                            sizeUnits={'absolute'}
                            anchor={[0, 0.5]}
                        >
                            <LegendTitle
                                key={'title'}
                                position={[0, 8]}
                                size={[60, 24]}
                                padding={[0, 0, 0, 0]}
                            >
                                intensity
                            </LegendTitle>
                            <LegendColorScale
                                key={'legend-color-scale'}
                                variant={'right'}
                                size={[9, 120]}
                                position={[0, 30]}
                                gradientId={'grad-sequential'}
                            />
                        </Legend>
                        <DownloadButtons position={[190, -60]} data image />
                        <Tooltip itemSize={[160, 25]} labelFormat={customLabelFormat} />
                    </Density>
                </GridItem>
            </Grid>
        </Chart>
    )
}
