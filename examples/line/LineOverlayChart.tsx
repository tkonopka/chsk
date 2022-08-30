import { Chart, Axis, AxisLabel, AxisLine, Typography, ThemeSpec } from '@chask/core'
import { Scatter, ScatterSeries } from '@chask/xy'
import { generateNormalPdf } from './generators'

const overlayIds = ['T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
const nIds = overlayIds.length
const overlayData = overlayIds.map((id, index) => {
    return { id, data: generateNormalPdf(index + 0.8, (index + 1) / 10, [0, 10], 0.1) }
})

export const overlayTheme: ThemeSpec = {
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 1,
        },
    },
    path: {
        scatterCurve: {
            strokeWidth: 2,
        },
        scatterArea: {
            opacity: 0.8,
        },
    },
}

const blues = [
    '#f7fbff',
    '#deebf7',
    '#c6dbef',
    '#9ecae1',
    '#6baed6',
    '#4292c6',
    '#2171b5',
    '#08519c',
    '#08306b',
].reverse()

export const LineOverlayChart = () => (
    <Chart id="line-overlay" size={[600, 360]} padding={[40, 40, 60, 60]} theme={overlayTheme}>
        <Scatter
            data={overlayData}
            x={'x'}
            y={'y'}
            r={1}
            scaleX={{
                variant: 'linear',
                domain: 'auto',
                nice: true,
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 6],
                nice: true,
            }}
            scaleColor={{
                variant: 'categorical',
                colors: blues,
            }}
        >
            <Axis variant={'bottom'} label={'x values (a.u.)'} />
            <Axis variant={'left'}>
                <AxisLine variant={'left'} />
                <AxisLabel variant={'left'} offset={20}>
                    probability density
                </AxisLabel>
            </Axis>
            {overlayIds
                .map(id => id)
                .reverse()
                .map((id, i) => {
                    const moveUp = -33 * (nIds - i - 1)
                    return (
                        <g transform={'translate(0,' + moveUp + ')'}>
                            <ScatterSeries
                                key={'series-' + i}
                                ids={[id]}
                                curve={'MonotoneX'}
                                layers={['area', 'curve']}
                            />
                        </g>
                    )
                })}
            <Typography variant={'title'} position={[0, -26]} children={'Normal distributions'} />
        </Scatter>
    </Chart>
)