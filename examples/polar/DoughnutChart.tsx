import { Chart, ThemeSpec, mergeTheme, Tooltip, roundDecimalPlaces } from '@chsk/core'
import { isPieData, Origin, Pie, Slices, SliceLabels } from '@chsk/polar'
import { buttonTheme } from '@chsk/themes'
import { schemeOranges } from 'd3-scale-chromatic'
import { alphabetGreek, generateUniformPopulation } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek.slice(0, 6)

export const generateDoughnutData = () => {
    const sizes = generateUniformPopulation(ids.length, 1, 50).map(Math.round)
    const total = sizes.reduce((acc, v) => acc + v, 0)
    return ids.map((id, i) => ({
        id,
        data: roundDecimalPlaces((100 * Number(sizes[i])) / total, 2),
    }))
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    path: {
        default: {
            fillOpacity: 1,
        },
    },
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
            size={[480, 360]}
            padding={[80, 60, 30, 60]}
            theme={customTheme}
        >
            <Pie
                data={rawData}
                angleAlign={0.5}
                scaleColor={{
                    variant: 'categorical',
                    colors: schemeOranges,
                }}
                rInner={0.6}
            >
                <Origin>
                    <Slices style={{ stroke: '#000000', strokeWidth: 1 }} />
                    <SliceLabels minAngle={12} format={v => Math.round(v.proportion * 100) + '%'} />
                </Origin>
                <DownloadButtons position={[240, -40]} data image />
                <Tooltip
                    offset={[0, -20]}
                    itemSize={[80, 24]}
                    titleFormat={x => x.data?.[0]?.id}
                    labelFormat={x => x.data + '%'}
                />
            </Pie>
        </Chart>
    )
}
