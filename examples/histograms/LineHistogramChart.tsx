import { Chart, Axis, AxisLabel, AxisLine, AxisTicks, GridLines, ThemeSpec } from '@chask/core'
import { Histogram, HistogramArea, HistogramCurve } from '@chask/xy'
import { LineLabel } from '@chask/annotation'
import { generateHistogramValues, makeBreaks } from "./generators";

const customValues = generateHistogramValues([500, 50, 40], [0, 0, 4.5], [1, 2, 0.5])
const customData = [
    {
        id: 'custom',
        data: customValues,
    },
]
const breaks = makeBreaks([-3, 7], 0.2)

export const customHistogramTheme: ThemeSpec = {
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
        intervalLabel: {
            textAnchor: 'middle',
            fontWeight: 400,
            fill: '#222255',
        },
    },
}

const customHistogramProps = {
    data: customData,
    breaks: breaks,
    scaleX: {
        variant: 'linear' as const,
        domain: [-3, 7] as [number, number],
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 50] as const,
    },
}

export const LineHistogramChart = () => {
    return (
        <Chart
            id="customHistogram"
            size={[600, 320]}
            padding={[60, 40, 60, 60]}
            theme={customHistogramTheme}
        >
            <Histogram {...customHistogramProps}>
                <GridLines variant={'y'} />
                <Axis variant={'bottom'}>
                    <AxisLine
                        variant={'bottom'}
                        style={{ strokeWidth: 1, visibility: 'visible' }}
                    />
                    <AxisTicks variant={'bottom'} ticks={8} />
                    <AxisLabel variant={'bottom'} anchor={0.5} children={'values (a.u.)'} />
                </Axis>
                <Axis variant={'left'} label={'counts'} />
                <HistogramArea ids={['custom']} curve={'Step'} style={{ opacity: 0.2 }} />
                <HistogramCurve ids={['custom']} curve={'Step'} />
                <LineLabel
                    start={[-2, 54]}
                    end={[2, 54]}
                    textStyle={{ textAnchor: 'middle', fill: '#222255' }}
                    align={0.5}
                >
                    Central population
                </LineLabel>
                <LineLabel start={[3.4, 15]} end={[5.6, 15]}>
                    Secondary population
                </LineLabel>
            </Histogram>
        </Chart>
    )
}
