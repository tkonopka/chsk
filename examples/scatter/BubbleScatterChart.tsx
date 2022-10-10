import {
    Chart,
    Axis,
    GridLines,
    Legend,
    MilestoneMotion,
    Typography,
    ThemeSpec,
    Circle,
    mergeTheme,
} from '@chsk/core'
import { Scatter, ScatterPoints, isScatterData } from '@chsk/xy'
import { generateXYValues } from './generators'
import { generateMixedPopulation, randomNormalValue } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { downloadThemePiece } from '@chsk/themes'

export const generateBubbleScatterData = () => {
    const x1 = generateMixedPopulation([80, 10, 10], [1, 3, 5], [1, 1, 1])
    const x2 = generateMixedPopulation([80, 10, 10], [1, 6, 10], [1, 1, 1])
    return [
        {
            id: 'alpha',
            data: generateXYValues(
                x1,
                ['y', 'size'],
                [
                    x => 1.5 * x + randomNormalValue(0, 2),
                    x => Math.abs(1 + 0.5 * x + randomNormalValue(0, 8)),
                ]
            ),
        },
        {
            id: 'beta',
            data: generateXYValues(
                x2,
                ['y', 'size'],
                [
                    x => 0.5 * x + randomNormalValue(0, 3),
                    x => Math.abs(1 + x + randomNormalValue(0, 12)),
                ]
            ),
        },
    ]
}

const customTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    line: {
        grid: {
            stroke: '#dddddd',
            strokeWidth: 1,
        },
    },
    g: {
        'sizeScale g.legendItem:hover': {
            cursor: 'auto',
        },
    },
    circle: {
        default: {
            fillOpacity: 0.7,
        },
        legendSymbol: {
            fillOpacity: 1,
        },
        'custom:hover': {
            cursor: 'pointer',
            stroke: '#222222',
            strokeWidth: 3,
        },
    },
})

export const BubbleScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="bubble-scatter"
            size={[800, 600]}
            padding={[60, 120, 60, 60]}
            theme={customTheme}
        >
            <Scatter
                data={rawData}
                x={'x'}
                y={'y'}
                valueSize={'size'}
                scaleX={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: true,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: true,
                }}
                scaleSize={{
                    variant: 'sqrt',
                    domain: 'auto',
                    size: 15,
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: 'Dark2',
                }}
            >
                <MilestoneMotion initial={'invisible'} initialOn={'axes'}>
                    <GridLines variant={'y'} />
                    <GridLines variant={'x'} />
                    <Axis variant={'bottom'} label={'x values (a.u.)'} />
                    <Axis variant={'left'} label={'y values (a.u.)'} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'data'}>
                    <ScatterPoints symbolClassName="custom" />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'legend'}>
                    <Legend
                        position={[635, 480]}
                        size={[110, 60]}
                        units={'absolute'}
                        anchor={[0, 1]}
                        padding={[0, 12, 0, 12]}
                        r={9}
                        itemSize={[80, 22]}
                        itemPadding={[2, 2, 2, 2]}
                        title={'Populations'}
                        symbol={Circle}
                        firstOffset={[0, 4]}
                    />
                    <Legend
                        position={[635, 350]}
                        size={[110, 100]}
                        units={'absolute'}
                        anchor={[0, 1]}
                        padding={[0, 12, 0, 12]}
                        variant={'size'}
                        itemSize={[80, 22]}
                        itemPadding={[2, 2, 2, 2]}
                        title={'Size scale'}
                        className={'sizeScale'}
                        interactive={false}
                        symbol={Circle}
                        symbolStyle={{ strokeWidth: 0, fill: '#bbbbbb' }}
                        firstOffset={[0, 4]}
                    />
                </MilestoneMotion>
                <Typography position={[-45, -30]} variant={'title'}>
                    Large scatter plot
                </Typography>
                <DownloadButtons position={[630, -30]} data image />
            </Scatter>
        </Chart>
    )
}
