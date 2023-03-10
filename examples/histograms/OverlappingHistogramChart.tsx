import { useState } from 'react'
import {
    Chart,
    Axis,
    AxisLabel,
    AxisLine,
    AxisTicks,
    GridLines,
    ThemeSpec,
    Legend,
    Typography,
} from '@chsk/core'
import {
    Histogram,
    HistogramArea,
    HistogramCurve,
    HistogramBars,
    isHistogramData,
    HistogramInteractiveDataItem,
} from '@chsk/xy'
import { generateMixedPopulation, stepSequence } from '../utils'
import { MilestoneStory } from '../types'

export const generateOverlappingHistogramData = () => [
    {
        id: 'A',
        data: generateMixedPopulation([340, 50], [0, 0], [1, 2]),
    },
    {
        id: 'B',
        data: generateMixedPopulation([300, 200], [2, 2], [1.5, 2.5]),
    },
]

const customHistogramTheme: ThemeSpec = {
    line: {
        intervalLabel: {
            strokeWidth: 1,
            stroke: '#222255',
        },
    },
    text: {
        axisLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
        lineLabel: {
            textAnchor: 'middle',
            fontWeight: 400,
            fill: '#222255',
        },
    },
    path: {
        default: {
            fillOpacity: 0,
        },
        histogramArea: {
            cursor: 'pointer',
            fillOpacity: 0.2,
        },
        'histogramArea:hover': {
            fillOpacity: 0.4,
        },
        histogramCurve: {
            pointerEvents: 'none',
        },
    },
    rect: {
        histogramBar: {
            fillOpacity: 0.2,
            cursor: 'pointer',
        },
        'histogramBar:hover': {
            fillOpacity: 0.4,
        },
    },
}

const customHistogramProps = {
    breaks: stepSequence([-3, 7], 0.5),
    scaleX: {
        variant: 'linear' as const,
        domain: [-3, 7] as [number, number],
    },
    scaleY: {
        variant: 'linear' as const,
        domain: [0, 'auto'] as [number, 'auto'],
    },
}

const ClickSummary = ({ data }: { data: HistogramInteractiveDataItem }) => {
    const labelStyle = {
        fontWeight: 600,
        color: '#444444',
        minWidth: '4rem',
        display: 'inline-block',
    }
    const breaks = data.breaks
    const domain = data.bin ? '[' + breaks[data.bin - 1] + ', ' + breaks[data.bin] + ']' : null
    const value = data.bin ? data.points[data.bin][1] : null
    return (
        <div>
            <div>
                <div style={labelStyle}>series:</div>
                {data.id}
            </div>
            <div>
                <div style={labelStyle}>bin:</div>
                {data.bin}
            </div>
            <div>
                <div style={labelStyle}>domain:</div>
                {domain}
            </div>
            <div>
                <div style={labelStyle}>value:</div>
                {value}
            </div>
        </div>
    )
}

export const OverlappingHistogramChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHistogramData(rawData)) return null

    const [clicked, setClicked] = useState<HistogramInteractiveDataItem | null>(null)
    const onClickArea = (data?: HistogramInteractiveDataItem) => {
        setClicked(data ?? null)
    }
    const onClickBars = (data?: HistogramInteractiveDataItem) => {
        setClicked(data ?? null)
    }

    return (
        <div>
            <Chart
                id="overlapping"
                fref={fref}
                data={chartData}
                size={[600, 320]}
                padding={[60, 60, 60, 60]}
                theme={customHistogramTheme}
            >
                <Histogram {...customHistogramProps} data={rawData}>
                    <GridLines variant={'y'} />
                    <Axis variant={'left'} label={'counts'} />
                    <Axis variant={'bottom'}>
                        <AxisLine
                            variant={'bottom'}
                            style={{ strokeWidth: 1, visibility: 'visible' }}
                        />
                        <AxisTicks variant={'bottom'} ticks={8} />
                        <AxisLabel variant={'bottom'} anchor={0.5}>
                            values (a.u.)
                        </AxisLabel>
                    </Axis>
                    <HistogramArea ids={['A']} curve={'Step'} handlers={{ onClick: onClickArea }} />
                    <HistogramCurve ids={['A']} curve={'Step'} />
                    <HistogramBars ids={['B']} handlers={{ onClick: onClickBars }} />
                    <HistogramCurve ids={['B']} curve={'Step'} />
                    <Typography variant={'title'} position={[-50, -40]}>
                        Clickable histograms
                    </Typography>
                    <Legend
                        position={[510, -36]}
                        size={[140, 20]}
                        sizeUnits={'absolute'}
                        horizontal={true}
                        anchor={[1, 1]}
                        padding={[0, 0, 0, 0]}
                        r={9}
                        itemSize={[70, 20]}
                        itemPadding={[2, 2, 2, 2]}
                    />
                </Histogram>
            </Chart>
            <div
                style={{
                    margin: '1em',
                    padding: '1em',
                    border: 'solid 1px #bbbbbb',
                    background: '#f8f8f8',
                    minHeight: '3rem',
                }}
            >
                <div style={{ fontWeight: 600, color: '#444444', marginBottom: '0.75rem' }}>
                    This is an html div element. It responds to click events.
                </div>
                {clicked ? <ClickSummary data={clicked} /> : null}
            </div>
        </div>
    )
}
