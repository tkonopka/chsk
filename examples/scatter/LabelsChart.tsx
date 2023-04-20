import {
    Chart,
    Axis,
    GridLines,
    Typography,
    ThemeSpec,
    Tooltip,
    TooltipDataItem,
    LabelProps,
    mergeTheme,
} from '@chsk/core'
import {
    isScatterData,
    Scatter,
    ScatterPoints,
    ScatterCrosshair,
    ScatterInteractiveDataItem,
    ScatterLabelProps,
    ScatterLabel,
} from '@chsk/xy'
import { BoxedLabel } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { alphabetGreek, generateUniformPopulation, round2dp, round4dp } from '../utils'
import { useEffect, useState } from 'react'
import { DownloadButtons } from '../navigation'

export const generateLabelsData = () => {
    const n = 10
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

// component to display one data point label with text, a box, rounded corners
const CustomLabel = (props: LabelProps) => {
    const width = String(props.children).length * 10
    return (
        <BoxedLabel
            {...props}
            size={[width, 26]}
            anchor={[0.5, 1]}
            offset={[0, -8]}
            rx={3}
            ry={3}
        />
    )
}

export const LabelsChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    type ScatterLabelPropsWithIndex = ScatterLabelProps & { index: number }

    // on first render, create one label to display a non-trivial chart scene
    let firstLabels: ScatterLabelPropsWithIndex[] = []
    if (isScatterData(rawData)) {
        firstLabels = [
            {
                id: rawData[0].id,
                index: 0,
                position: [Number(rawData[0].data[0].x), Number(rawData[0].data[0].y)],
                children: String(rawData[0].data[0].label),
            },
        ]
    }
    const [labels, setLabels] = useState<Array<ScatterLabelPropsWithIndex>>(firstLabels)
    if (!isScatterData(rawData)) return null

    // upon click, either add or remove a label
    const toggleLabel = (x?: ScatterInteractiveDataItem) => {
        if (!x) return
        let hit = -1
        labels.forEach((label, index) => {
            if (label.id === x.id && label['index'] === x.index) {
                hit = index
            }
        })
        if (hit === -1) {
            const newLabel: ScatterLabelPropsWithIndex = {
                id: x.id,
                index: x.index ?? 0,
                position: x.point ?? 0,
                children: String(x.original?.['label']),
            }
            setLabels([...labels, newLabel])
        } else {
            setLabels([...labels.slice(0, hit), ...labels.slice(hit + 1, labels.length)])
        }
    }

    // when the dataset changes, re-assign positions to synchronize data points and labels
    useEffect(() => {
        const newLabels: ScatterLabelPropsWithIndex[] = labels.map(label => {
            const rawSeries = rawData.filter(rawSeries => rawSeries.id === label.id)[0]
            const rawPoint = rawSeries.data[label.index]
            return { ...label, position: [Number(rawPoint['x']), Number(rawPoint['y'])] }
        })
        setLabels(newLabels)
    }, [rawData])

    const rawDataStr = JSON.stringify(rawData)
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
                <Typography variant={'subtitle'} position={[-50, -28]}>
                    Click on data point to toggle labels
                </Typography>
                <GridLines variant={'x'} />
                <GridLines variant={'y'} />
                <Axis variant={'bottom'} ticks={6} label={'A (a.u.)'} />
                <Axis variant={'left'} ticks={6} label={'B (a.u.)'} />
                <ScatterPoints />
                {labels.map(labelProps => (
                    <ScatterLabel
                        key={rawDataStr + '-' + String(labelProps.children)}
                        positionUnits={'view'}
                        {...labelProps}
                        component={CustomLabel}
                    />
                ))}
                <ScatterCrosshair
                    symbolStyle={{ fill: '#dd0000' }}
                    modifiers={{ onMouseEnter: { cursor: 'pointer' }, onMouseLeave: {} }}
                    handlers={{ onClick: toggleLabel }}
                />
                <Tooltip
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
