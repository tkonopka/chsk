import {
    Chart,
    Axis,
    GridLines,
    Legend,
    MilestoneMotion,
    Surface,
    Typography,
    Tooltip,
    TooltipProvider,
    mergeThemes,
    AxisTicks,
    Draggable,
} from '@chsk/core'
import { Scatter, ScatterPoints, isScatterData, ScatterCrosshair } from '@chsk/xy'
import { createConcentricSymbol } from '@chsk/annotation'
import { generateXYValues } from './generators'
import { generateMixedPopulation, randomNormalValue, round3dp } from '../utils'
import { MilestoneStory } from '../types'
import { buttonTheme, faintTicksTheme } from '@chsk/themes'
import { DownloadButtons } from '../navigation'

export const generateClusterScatterData = () => {
    return [
        {
            id: 'alpha',
            data: generateXYValues(
                generateMixedPopulation([60], [0], [1]).map(round3dp),
                ['y'],
                [x => round3dp(0 * x + randomNormalValue(0, 1))]
            ),
        },
        {
            id: 'beta',
            data: generateXYValues(
                generateMixedPopulation([60], [3], [1]).map(round3dp),
                ['y'],
                [x => round3dp(x + randomNormalValue(0, 3))]
            ),
        },
        {
            id: 'gamma',
            data: generateXYValues(
                generateMixedPopulation([60], [1], [1]).map(round3dp),
                ['y'],
                [x => round3dp(4 + x + randomNormalValue(0, 1))]
            ),
        },
    ]
}

const customTheme = mergeThemes([
    buttonTheme,
    faintTicksTheme,
    {
        circle: {
            custom: {
                opacity: 0.8,
            },
            'custom:hover': {
                cursor: 'pointer',
            },
        },
        AxisTicks: {
            left: { tickSize: -6, labelDistance: 4 },
            bottom: { tickSize: -6, labelDistance: 4 },
            top: { tickSize: -6 },
            right: { tickSize: -6 },
        },
    },
])

const scatterProps = {
    x: 'x',
    y: 'y',
    valueSize: 4,
    scaleX: {
        variant: 'linear' as const,
        domain: 'auto' as const,
        nice: 6,
    },
    scaleY: {
        variant: 'linear' as const,
        domain: 'auto' as const,
        nice: 6,
    },
}

const CustomActiveSymbol = createConcentricSymbol({
    variant: 'background',
    rMultiplier: 2.2,
    styleModifier: { strokeWidth: 2, fill: '#ffffff', stroke: '#555555' },
})

export const ClustersScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="uniform-scatter"
            size={[640, 480]}
            padding={[50, 120, 60, 60]}
            theme={customTheme}
        >
            <Scatter data={rawData} {...scatterProps}>
                <Typography position={[0, -20]} variant={'title'}>
                    Scatter plot with clusters
                </Typography>
                <DownloadButtons position={[480, -20]} data image />
                <MilestoneMotion enterOn={'axes'}>
                    <GridLines variant={'y'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                    <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                    <Surface style={{ fill: '#ffffff', stroke: '#222222', strokeWidth: 1 }} />
                    <Axis variant={'bottom'} label={'x values (a.u.)'} />
                    <Axis variant={'left'} label={'y values (a.u.)'} />
                    <Axis variant={'top'}>
                        <AxisTicks labelFormat={() => ''} />
                    </Axis>
                    <Axis variant={'right'}>
                        <AxisTicks labelFormat={() => ''} />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion enterOn={'data'}>
                    <TooltipProvider>
                        <ScatterPoints symbolClassName={'custom'} />
                        <ScatterCrosshair
                            style={{ opacity: 0 }}
                            symbol={CustomActiveSymbol}
                            symbolStyle={{ opacity: 1, stroke: '#000000', strokeWidth: 0.5 }}
                            minDistance={20}
                        />
                        <Tooltip
                            offset={[0, -25]}
                            padding={[4, 0, 4, 0]}
                            itemSize={[160, 26]}
                            itemPadding={[4, 8, 4, 8]}
                        />
                    </TooltipProvider>
                </MilestoneMotion>
                <MilestoneMotion enterOn={'legend'}>
                    <Draggable>
                        <Legend
                            position={[1, 0.2]}
                            positionUnits={'relative'}
                            offset={[2, 0]}
                            size={[100, 88]}
                            sizeUnits={'absolute'}
                            anchor={[0, 0.5]}
                            padding={[0, 8, 0, 8]}
                            r={10.5}
                            itemSize={[80, 22]}
                            itemPadding={[1, 2, 1, 2]}
                            title={'Populations'}
                        />
                    </Draggable>
                </MilestoneMotion>
            </Scatter>
        </Chart>
    )
}
