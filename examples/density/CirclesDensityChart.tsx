import {
    Chart,
    Legend,
    Typography,
    ThemeSpec,
    Circle,
    mergeTheme,
    ViewClip,
    Line,
    range,
    TypographyProps,
    ContinuousScaleSpec,
} from '@chsk/core'
import {
    isScatterData,
    Density,
    DensityCells,
    useDensityPreparedData,
    DENSITY_COUNT,
} from '@chsk/xy'
import { ArrowMarker } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { alphabetGreek, randomUniformValue } from '../utils'
import { generateClusterCenters, generateClusterFrames } from './generators'

export const generateCirclesDensityData = () => {
    const n = Math.floor(randomUniformValue(3, 7))
    const centers = generateClusterCenters(n, [-50, 50], [-50, 50])
    const populations = range(n).map(() => Math.floor(randomUniformValue(5000, 15000)))
    const density = 60
    const data = generateClusterFrames(centers, populations, density)
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
    text: {
        arrowLabel: {
            fill: '#222222',
            dominantBaseline: 'middle',
        },
    },
})

const customScales: ContinuousScaleSpec = { variant: 'linear', domain: [-70, 70] }

const CustomSubtitle = ({ position }: Pick<TypographyProps, 'position'>) => {
    const { data } = useDensityPreparedData()
    const total = data.reduce((acc, d) => acc + d[DENSITY_COUNT], 0)
    const msg = 'This chart summarizes ' + total + ' data points using ' + data.length + ' cells'
    return (
        <Typography variant={'subtitle'} position={position}>
            {msg}
        </Typography>
    )
}

export const CirclesDensityChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="circles"
            size={[600, 480]}
            padding={[70, 140, 40, 30]}
            theme={customTheme}
        >
            <ArrowMarker variant={'chevron'} id={'am'} size={11} style={{ strokeWidth: 2 }} />
            <Density
                data={rawData}
                x={'x'}
                y={'y'}
                binSize={2.5}
                scaleX={customScales}
                scaleY={customScales}
            >
                <ViewClip id={'points'}>
                    <DensityCells />
                </ViewClip>
                <Line x1={10} y1={360} x2={10} y2={280} markerEnd={'am'} className={'arrow'} />
                <Typography variant={'arrowLabel'} position={[-6, 320]} angle={-90}>
                    dimension 2
                </Typography>
                <Line x1={10} y1={360} x2={90} y2={360} markerEnd={'am'} className={'arrow'} />
                <Typography variant={'arrowLabel'} position={[50, 378]} angle={0}>
                    dimension 1
                </Typography>
                <Legend
                    offset={[10, 0]}
                    position={[1, 1]}
                    anchor={[0, 1]}
                    padding={[0, 10, 0, 10]}
                    r={7}
                    itemSize={[80, 22]}
                    itemPadding={[2, 2, 2, 2]}
                    title={'Clusters'}
                    symbol={Circle}
                    firstOffset={[0, 4]}
                />
                <Typography variant={'title'} position={[0, -45]}>
                    Density map
                </Typography>
                <CustomSubtitle position={[0, -25]} />
                <DownloadButtons position={[440, -45]} data image />
            </Density>
        </Chart>
    )
}
