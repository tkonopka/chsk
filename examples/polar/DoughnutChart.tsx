import { Chart, ThemeSpec, mergeTheme, Tooltip } from '@chsk/core'
import { isPieData, Pie, Slices } from '@chsk/polar'
import { downloadTheme } from '@chsk/themes'
import { alphabetGreek, generateUniformPopulation } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek.slice(0, 6)

export const generateDoughnutData = () => {
    const sizes = generateUniformPopulation(ids.length, 1, 50).map(Math.round)
    return ids.map((id, i) => ({ id, data: sizes[i] }))
}

const customTheme: ThemeSpec = mergeTheme(downloadTheme, {})

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
            >
                <Slices rInner={0.6} style={{ stroke: '#000000', strokeWidth: 1 }} />
                <DownloadButtons position={[240, -40]} data image />
                <Tooltip translate={[0, -20]} />
            </Pie>
        </Chart>
    )
}
