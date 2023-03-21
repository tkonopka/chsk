import { Chart, ThemeSpec, mergeTheme, Tooltip, roundDecimalPlaces } from '@chsk/core'
import { isPieData, Origin, Pie, Slices, SliceLabels } from '@chsk/polar'
import { downloadTheme } from '@chsk/themes'
import { alphabetGreek, generateUniformPopulation } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek.slice(0, 6)

export const generateDoughnutData = () => {
    const sizes = generateUniformPopulation(ids.length, 1, 50).map(Math.round)
    const total = sizes.reduce((acc, v) => acc + v, 0)
    return ids.map((id, i) => ({ id, data: roundDecimalPlaces((100 * sizes[i]) / total, 2) }))
}

const customTheme: ThemeSpec = mergeTheme(downloadTheme, {
    text: {
        sliceLabel: {
            pointerEvents: 'none',
            fill: '#000000',
        },
    },
})

export const DoughnutChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isPieData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="doughnut-oranges"
            size={[400, 300]}
            padding={[60, 60, 40, 60]}
            theme={customTheme}
        >
            <Pie
                data={rawData}
                angleAlign={0.5}
                scaleColor={{
                    variant: 'categorical',
                    colors: 'Oranges',
                }}
                rInner={0.6}
            >
                <Origin>
                    <Slices style={{ stroke: '#000000', strokeWidth: 1 }} />
                    <SliceLabels minAngle={12} format={v => Math.round(Number(v)) + '%'} />
                </Origin>
                <DownloadButtons position={[240, -40]} data image />
                <Tooltip
                    itemSize={[80, 24]}
                    translate={[0, -20]}
                    titleFormat={x => x.data?.[0].id}
                    labelFormat={x => x.data + '%'}
                />
            </Pie>
        </Chart>
    )
}
