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
    Tooltip,
    TooltipData,
    TooltipDataItem,
    ViewController,
    ViewClip,
} from '@chsk/core'
import { Scatter, ScatterPoints, ScatterCrosshair, isScatterData } from '@chsk/xy'
import { buttonTheme } from '@chsk/themes'
import { generateXYValues } from './generators'
import { generateMixedPopulation, randomNormalValue, round1dp, round3dp } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons, IconButton } from '../navigation'

export const generateBubbleScatterData = () => {
    const x1 = generateMixedPopulation([80, 10, 10], [1, 3, 5], [1, 1, 1])
    const x2 = generateMixedPopulation([80, 10, 10], [1, 6, 10], [1, 1, 1])
    return [
        {
            id: 'alpha',
            data: generateXYValues(
                x1.map(round3dp),
                ['y', 'size'],
                [
                    x => round3dp(1.5 * x + randomNormalValue(0, 2)),
                    x => round1dp(Math.abs(1 + 0.5 * x + randomNormalValue(0, 8))),
                ]
            ),
        },
        {
            id: 'beta',
            data: generateXYValues(
                x2.map(round3dp),
                ['y', 'size'],
                [
                    x => round3dp(0.5 * x + randomNormalValue(0, 3)),
                    x => round1dp(Math.abs(1 + x + randomNormalValue(0, 12))),
                ]
            ),
        },
    ]
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
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
    },
})

const customTooltipTitle = (x: TooltipData) => {
    if (!x || !x.data) return ''
    const item = x.data?.[0] as Record<string, unknown>
    return x.title + ' - index ' + String(item['index'])
}
const customTooltipLabel = (x: TooltipDataItem) => {
    if (!x) return ''
    const point = 'point' in x ? (x['point'] as [number, number]) : [0, 0]
    const size = 'size' in x ? x['size'] : ''
    return '(' + point[0] + ', ' + point[1] + ') size: ' + size
}

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
                <MilestoneMotion initialOn={'axes'}>
                    <GridLines variant={'y'} />
                    <GridLines variant={'x'} />
                    <Axis variant={'bottom'} label={'x values (a.u.)'} />
                    <Axis variant={'left'} label={'y values (a.u.)'} />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'data'}>
                    <ViewClip id={'points'}>
                        <ScatterPoints symbolClassName="custom" />
                        <ScatterCrosshair
                            symbolStyle={{ stroke: '#ssssss', strokeWidth: 1, fillOpacity: 1 }}
                            style={{ stroke: '#000000' }}
                        />
                    </ViewClip>
                    <Tooltip
                        offset={[16, -16]}
                        anchor={[0, 1]}
                        itemSize={[180, 26]}
                        titleFormat={customTooltipTitle}
                        labelFormat={customTooltipLabel}
                        symbol={Circle}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'legend'}>
                    <Legend
                        position={[635, 470]}
                        positionUnits={'absolute'}
                        size={[110, 60]}
                        sizeUnits={'absolute'}
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
                        position={[635, 340]}
                        positionUnits={'absolute'}
                        size={[110, 100]}
                        sizeUnits={'absolute'}
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
                <ViewController container={{ offset: [8, 0] }} component={IconButton} />
                <DownloadButtons position={[640, 520]} data image />
            </Scatter>
        </Chart>
    )
}
