import { useState } from 'react'
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
    LineProps,
} from '@chsk/core'
import {
    Scatter,
    ScatterPoints,
    ScatterCrosshair,
    isScatterData,
    ScatterSelectedLabelData,
    ScatterInteractiveDataItem,
    ScatterSelectedLabels,
} from '@chsk/xy'
import { BoxedLabel, Connector } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { schemeDark2 } from 'd3-scale-chromatic'
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
    rect: {
        scatterLabel: {
            fill: '#ffffff',
            stroke: '#000000',
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
        active: {
            strokeWidth: 1.5,
            pointerEvents: 'none',
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
const CustomConnector = (props: LineProps) => {
    return <Connector {...props} variant={'vl'} elbow={1} beta={0.85} />
}

export const BubbleScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null

    // tracking of labels
    const [labels, setLabels] = useState<Array<ScatterSelectedLabelData>>([])
    const toggleLabel = (x?: ScatterInteractiveDataItem) => {
        if (!x) return
        console.log('labels ' + JSON.stringify(labels) + ' x ' + JSON.stringify(x))
        const xLabel = x.id + ' ' + x.index
        const hit = labels.map(label => label.id === x.id && label.content === xLabel).indexOf(true)
        if (hit === -1) {
            const newLabel: ScatterSelectedLabelData = {
                id: x.id,
                index: x.index ?? 0,
                size: [10 + xLabel.length * 9, 26],
                content: xLabel,
            }
            setLabels([...labels, newLabel])
        } else {
            setLabels([...labels.slice(0, hit), ...labels.slice(hit + 1, labels.length)])
        }
    }

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
                    size: 20,
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: schemeDark2,
                }}
            >
                <MilestoneMotion enterOn={'axes'}>
                    <GridLines variant={'y'} />
                    <GridLines variant={'x'} />
                    <Axis variant={'bottom'} label={'x values (a.u.)'} />
                    <Axis variant={'left'} label={'y values (a.u.)'} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'data'}>
                    <ViewClip id={'points'}>
                        <ScatterPoints symbolClassName="custom" />
                        <ScatterCrosshair
                            symbolStyle={{ stroke: '#000000', strokeWidth: 1, fillOpacity: 1 }}
                            style={{ stroke: '#000000' }}
                            handlers={{ onClick: toggleLabel }}
                            minDistance={30}
                        />
                        <ScatterSelectedLabels
                            data={labels}
                            component={BoxedLabel}
                            symbol={Circle}
                            symbolStyle={{ stroke: '#000000' }}
                            connector={CustomConnector}
                            clearance={25}
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
                <MilestoneMotion enterOn={'legend'}>
                    <Legend
                        offset={[12, 0]}
                        position={[1, 1]}
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
                        variant={'size'}
                        offset={[12, -190]}
                        position={[1, 1]}
                        anchor={[0, 1]}
                        padding={[0, 12, 0, 12]}
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
