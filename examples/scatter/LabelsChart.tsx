import { useState } from 'react'
import {
    Chart,
    Axis,
    GridLines,
    Typography,
    ThemeSpec,
    Tooltip,
    TooltipDataItem,
    mergeTheme,
    LabelProps,
} from '@chsk/core'
import {
    isScatterData,
    Scatter,
    ScatterPoints,
    ScatterCrosshair,
    ScatterInteractiveDataItem,
    ScatterChargedLabelData,
    ScatterChargedLabels,
} from '@chsk/xy'
import { BoxedLabel } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { alphabetGreek, generateUniformPopulation, round2dp, round4dp } from '../utils'
import { DownloadButtons } from '../navigation'

export const generateLabelsData = () => {
    const n = 15
    const xValues = generateUniformPopulation(n, 0.05, 10.0)
    const yValues = generateUniformPopulation(n, 0.05, 10.0)
    const data = xValues.map((x, i) => ({
        x: round4dp(x),
        y: round4dp(yValues[i]),
        label: alphabetGreek[i],
    }))
    return [{ id: 'A', data }]
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    circle: {
        default: {
            cursor: 'pointer',
        },
    },
    line: {
        axis: {
            strokeWidth: 1,
        },
        crosshair: {
            strokeWidth: 0,
        },
    },
    rect: {
        boxedLabel: {
            fill: '#f8f8f8',
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
})

const customTooltipLabel = (x: TooltipDataItem) => {
    if (!x) return ''
    const item = x as ScatterInteractiveDataItem
    const original = item.original ?? {}
    const point = item.point ?? [0, 0]
    return original['label'] + ' (' + round2dp(point[0]) + ', ' + round2dp(point[1]) + ')'
}

const CustomLabel = (props: LabelProps) => {
    return <BoxedLabel {...props} rx={3} ry={3} variant={'boxed-label'} />
}

export const LabelsChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    // on first render, create one label to display a non-trivial chart scene
    let firstLabels: ScatterChargedLabelData[] = []
    if (isScatterData(rawData)) {
        const labelString = String(rawData[0].data[0].label)
        firstLabels = [
            {
                id: rawData[0].id,
                index: 0,
                size: [10 + labelString.length * 9, 26],
                content: labelString,
            },
        ]
    }
    const [labels, setLabels] = useState<Array<ScatterChargedLabelData>>(firstLabels)
    if (!isScatterData(rawData)) return null

    // upon click, add/remove an element from the visible labels array
    const toggleLabel = (x?: ScatterInteractiveDataItem) => {
        if (!x) return
        const xLabel = String(x.original?.['label'])
        const hit = labels.map(label => label.id === x.id && label.content === xLabel).indexOf(true)
        if (hit === -1) {
            const newLabel: ScatterChargedLabelData = {
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
            id="scatter-labels"
            size={[600, 480]}
            padding={[80, 40, 60, 60]}
            theme={customTheme}
        >
            <Scatter
                data={rawData}
                x={'x'}
                y={'y'}
                valueSize={5}
                scaleX={{ variant: 'linear', domain: [0, 'auto'], nice: 4 }}
                scaleY={{ variant: 'linear', domain: [0, 'auto'], nice: 4 }}
                scaleColor={{ variant: 'categorical', colors: ['#444444', '#000000'] }}
            >
                <Typography variant={'title'} position={[-50, -50]}>
                    Dataset with labeled points
                </Typography>
                <GridLines variant={'x'} />
                <GridLines variant={'y'} />
                <Axis variant={'bottom'} ticks={6} label={'A (a.u.)'} />
                <Axis variant={'left'} ticks={6} label={'B (a.u.)'} />
                <ScatterPoints />
                <ScatterChargedLabels data={labels} component={CustomLabel} />
                <ScatterCrosshair
                    minDistance={16}
                    symbolStyle={{ fill: '#dd0000' }}
                    modifiers={{ onMouseEnter: { cursor: 'pointer' }, onMouseLeave: {} }}
                    handlers={{ onClick: toggleLabel }}
                />
                <Tooltip
                    offset={[0, 12]}
                    maxOverhang={[40, 40, 40, 40]}
                    anchor={[0.5, 0]}
                    itemPadding={[12, 8, 12, 8]}
                    itemSize={[135, 24]}
                    labelFormat={customTooltipLabel}
                    title={''}
                    r={0}
                    symbol={() => null}
                />
                <DownloadButtons position={[430, -50]} data image />
            </Scatter>
        </Chart>
    )
}
