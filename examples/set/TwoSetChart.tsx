import { Chart, ThemeSpec, mergeTheme } from '@chsk/core'
import { Venn, VennSets, isVennData } from '@chsk/set'
import { downloadThemePiece } from '@chsk/themes'
import { generateIdentifiers, randomSelection, randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const generateTwoSetData = () => {
    const elements = generateIdentifiers(500, 10000, 'el')
    const sizeAlpha = randomUniformValue(20, 400)
    const sizeBeta = randomUniformValue(20, 400)
    const generateSet = (n: number) => {
        const set = new Set()
        randomSelection(elements, n).forEach(x => set.add(x))
        return Array.from(set)
    }
    return [
        { id: 'alpha', data: generateSet(sizeAlpha) },
        { id: 'beta', data: generateSet(sizeBeta) },
    ]
}

const customTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    circle: {
        default: {
            fillOpacity: 0.7,
            strokeWidth: 0,
        },
    },
})

export const TwoSetChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isVennData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="two-sets"
            size={[400, 300]}
            padding={[60, 60, 60, 60]}
            theme={customTheme}
        >
            <Venn
                data={rawData}
                proportional={true}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#75b9be', '#e57a44'],
                }}
            >
                <VennSets />
                <VennSets style={{ fillOpacity: 0, stroke: '#000', strokeWidth: 1 }} />
                <DownloadButtons position={[240, -40]} data image />
            </Venn>
        </Chart>
    )
}
