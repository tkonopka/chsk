import { Chart, ThemeSpec, mergeTheme, Tooltip, TooltipDataItem } from '@chsk/core'
import { Venn, VennSets, VennSetLabels, VennIntersectionLabels, isVennData } from '@chsk/set'
import { downloadThemePiece } from '@chsk/themes'
import { generateIdentifiers, randomSelection, randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { FilterInsetShadow } from '../../packages/annotation/src'

export const generateTwoSetData = () => {
    const elements = generateIdentifiers(600, 10000, 'el')
    const sizeAlpha = randomUniformValue(10, 400)
    const sizeBeta = randomUniformValue(10, 400)
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
    text: {
        vennSetLabel: {
            fontSize: '18px',
            fontWeight: 600,
            fill: '#222',
        },
        vennIntersectionLabel: {
            fill: '#000',
            pointerEvents: 'none',
        },
    },
})

const labelFormat = (x: string | number) => String(x).slice(0, 1).toLocaleUpperCase()
const tooltipLabelFormat = (x: TooltipDataItem): string => {
    return ('value' in x ? x['label'] + ' - ' + x['value'] : x['label']) ?? ''
}

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
            <FilterInsetShadow id={'inset-shadow'} blurStdDeviation={6} floodOpacity={0.6} />
            <Venn
                data={rawData}
                proportional={true}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#75b9be', '#e57a44'],
                }}
            >
                <VennSets
                    style={{ stroke: '#000', strokeWidth: 1 }}
                    modifiers={{ onMouseEnter: { filter: 'url(#inset-shadow)' }, onMouseLeave: {} }}
                />
                <VennSetLabels
                    ids={['alpha']}
                    rs={[1]}
                    angles={[-Math.PI / 3]}
                    translate={[-12, -12]}
                    format={labelFormat}
                />
                <VennSetLabels
                    ids={['beta']}
                    rs={[1]}
                    angles={[Math.PI / 3]}
                    translate={[12, -12]}
                    format={labelFormat}
                />
                <VennIntersectionLabels />
                <DownloadButtons position={[240, -40]} data image />
                <Tooltip
                    position={[0, -20]}
                    itemSize={[150, 30]}
                    labelFormat={tooltipLabelFormat}
                />
            </Venn>
        </Chart>
    )
}
