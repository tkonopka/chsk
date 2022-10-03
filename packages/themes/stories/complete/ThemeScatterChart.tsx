import { Chart, CssProps, Axis, AxisLabel, AxisTicks, Surface, GridLines } from '@chask/core'
import { Scatter, ScatterPoints, Regression, ScatterDataItem } from '@chask/xy'
import { ThemeStory } from './ThemeController'

const regressionStyle: CssProps = {
    strokeWidth: 2,
    stroke: '#444444',
    strokeDasharray: '9 11',
    strokeLinecap: 'round',
}

const data: ScatterDataItem[] = [
    {
        id: 'A',
        data: [
            { x: 1, y: 1 },
            { x: 1.5, y: 2.5 },
            { x: 2, y: 2.5 },
            { x: 2.5, y: 3 },
            { x: 3, y: 2 },
            { x: 4, y: 2.5 },
            { x: 5, y: 3 },
            { x: 4.5, y: 3.5 },
        ],
    },
]

export const ThemeScatterChart = ({ chartId, theme }: ThemeStory) => {
    return (
        <Chart id={chartId} size={[400, 300]} padding={[40, 40, 60, 60]} theme={theme ?? undefined}>
            <Scatter
                data={data}
                x={'x'}
                y={'y'}
                valueSize={4}
                scaleX={{
                    variant: 'linear',
                    domain: [0, 6],
                    nice: false,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: [0, 4.5],
                }}
            >
                <Surface variant={'inner'} />
                <GridLines variant={'x'} />
                <GridLines variant={'y'} />
                <Axis variant={'bottom'} label={'Covariate (a.u.)'} />
                <Axis variant={'left'}>
                    <AxisLabel variant={'left'}>Measurement (a.u.)</AxisLabel>
                    <AxisTicks variant={'left'} />
                </Axis>
                <ScatterPoints ids={['A']} />
                <Regression ids={['A']} variant={'series'} style={regressionStyle} />
            </Scatter>
        </Chart>
    )
}
