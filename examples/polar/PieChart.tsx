import { Chart, ThemeSpec, mergeTheme, Tooltip } from '@chsk/core'
import { isPieData, Origin, Pie, Slices } from '@chsk/polar'
import { downloadTheme } from '@chsk/themes'
import { alphabetGreek, generateUniformPopulation } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek.slice(0, 5)

export const generatePieData = () => {
    const sizes = generateUniformPopulation(ids.length, 1, 50)
        .map(Math.round)
        .sort((a, b) => a - b)
    return ids.map((id, i) => ({ id, data: sizes[i] }))
}

const customTheme: ThemeSpec = mergeTheme(downloadTheme, {})

export const PieChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isPieData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="pie-blues"
            size={[400, 300]}
            padding={[60, 60, 40, 60]}
            theme={customTheme}
        >
            <Pie
                data={rawData}
                scaleColor={{
                    variant: 'categorical',
                    colors: 'Blues',
                }}
            >
                <Origin>
                    <Slices style={{ stroke: '#000', strokeWidth: 1 }} />
                </Origin>
                <DownloadButtons position={[240, -40]} data image />
                <Tooltip translate={[0, -20]} />
            </Pie>
        </Chart>
    )
}
