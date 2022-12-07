import { Chart, ThemeSpec, mergeTheme } from '@chsk/core'
import { Venn, VennSets, isVennData, VennSetLabels } from '@chsk/set'
import { downloadThemePiece } from '@chsk/themes'
import { generateIdentifiers, randomSelection, randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const generateThreeSetData = () => {
    const elements = generateIdentifiers(600, 10000, 'el')
    const common = elements.slice(0, 5)
    const other = elements.slice(5, elements.length)
    const sizeAlpha = randomUniformValue(20, 400)
    const sizeBeta = randomUniformValue(20, 400)
    const sizeGamma = randomUniformValue(20, 400)
    const generateSet = (n: number) => {
        const set = new Set(common)
        randomSelection(other, n).forEach(x => set.add(x))
        return Array.from(set)
    }
    return [
        { id: 'alpha', data: generateSet(sizeAlpha) },
        { id: 'beta', data: generateSet(sizeBeta) },
        { id: 'gamma', data: generateSet(sizeGamma) },
    ]
}

const customTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    circle: {
        default: {
            fillOpacity: 0.7,
            strokeWidth: 0,
        },
    },
    text: {
        vennLabel: {
            fill: '#222',
            fontSize: '16px',
        },
    },
})

const labelFormats: Record<string, string> = { alpha: 'A', beta: 'B', gamma: 'C' }
const labelFormat = (x: string): string => String(labelFormats[x] ?? 'X')

export const ThreeSetChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isVennData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="three-sets"
            size={[400, 300]}
            padding={[60, 60, 60, 60]}
            theme={customTheme}
        >
            <Venn
                data={rawData}
                proportional={true}
                scaleColor={{
                    variant: 'categorical',
                    colors: 'Accent',
                    size: 5,
                }}
            >
                <VennSets />
                <VennSets style={{ fillOpacity: 0, stroke: '#000', strokeWidth: 1 }} />
                <VennSetLabels ids={['alpha']} format={labelFormat} />
                <VennSetLabels ids={['beta']} format={labelFormat} />
                <VennSetLabels ids={['gamma']} format={labelFormat} />
                <DownloadButtons position={[240, -40]} data image />
            </Venn>
        </Chart>
    )
}
