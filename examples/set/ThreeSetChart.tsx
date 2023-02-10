import {
    Chart,
    Axis,
    AxisLine,
    AxisTicks,
    Counter,
    MilestoneMotion,
    Typography,
    ThemeSpec,
    mergeTheme,
    Tooltip,
    TooltipDataItem,
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { Venn, VennSets, isVennData, VennSetLabels, VennIntersectionLabels } from '@chsk/set'
import { downloadThemePiece } from '@chsk/themes'
import { generateIdentifiers, randomSelection, randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'

export const generateThreeSetData = () => {
    const elements = generateIdentifiers(600, 10000, 'el')
    const common = elements.slice(0, 5)
    const other = elements.slice(5, elements.length)
    const sizeAlpha = Math.round(randomUniformValue(20, 400))
    const sizeBeta = Math.round(randomUniformValue(20, 400))
    const sizeGamma = Math.round(randomUniformValue(20, 400))
    const generateSet = (n: number) => {
        const set = new Set(common)
        randomSelection(other, n).forEach(x => set.add(x))
        return Array.from(set)
    }
    return [
        { id: 'A', data: generateSet(sizeAlpha), size: sizeAlpha },
        { id: 'B', data: generateSet(sizeBeta), size: sizeBeta },
        { id: 'C', data: generateSet(sizeGamma), size: sizeGamma },
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
        title: {
            fontWeight: 400,
        },
        vennSetLabel: {
            fill: '#222',
            fontSize: '16px',
        },
        vennIntersectionLabel: {
            fill: '#000',
            fontSize: '14px',
            pointerEvents: 'none',
        },
        counter: {
            textAnchor: 'middle',
            dominantBaseline: 'middle',
        },
    },
    line: {
        axis: {
            visibility: 'visible',
        },
    },
})

const labelFormats: Record<string, string> = { A: 'A', B: 'B', C: 'C' }
const labelFormat = (x: unknown, index?: number): string => String(labelFormats[String(x)] ?? index)
const tooltipLabelFormat = (x: TooltipDataItem): string => {
    return ('value' in x ? x['label'] + ' - ' + x['value'] : x['label']) ?? ''
}

export const ThreeSetChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isVennData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="three-sets"
            size={[500, 340]}
            padding={[100, 40, 40, 40]}
            theme={customTheme}
        >
            <MilestoneMotion initial={'invisible'} initialOn={'title'}>
                <Typography variant={'title'} position={[-30, -70]}>
                    Consider a pool of 600 elements.
                </Typography>
            </MilestoneMotion>
            <MilestoneMotion initial={'invisible'} initialOn={'sizes'}>
                <Typography variant={'title'} position={[-30, -46]}>
                    Pick three sets at random, each of size [20, 400].
                </Typography>
            </MilestoneMotion>
            <MilestoneMotion initial={'invisible'} initialOn={'sizes'}>
                <Bar data={rawData} keys={['size']} size={[0.4, 1]} padding={[10, 40, 0, 20]}>
                    <Axis variant={'bottom'}>
                        <AxisLine variant={'bottom'} />
                        <AxisTicks variant={'bottom'} labelFormat={labelFormat} />
                    </Axis>
                    <Axis variant={'left'} label={'Set size'} />
                    <Bars />
                    <Tooltip itemSize={[90, 30]} />
                </Bar>
            </MilestoneMotion>
            <MilestoneMotion initial={'invisible'} initialOn={'intersections'}>
                <Typography variant={'title'} position={[200, 6]}>
                    The random sets will likely
                </Typography>
                <Typography variant={'title'} position={[200, 30]}>
                    have non-zero overlap.
                </Typography>
            </MilestoneMotion>
            <MilestoneMotion initial={'invisible'} initialOn={'intersections'}>
                <Venn
                    data={rawData}
                    proportional={true}
                    separation={0.5}
                    scaleColor={{
                        variant: 'categorical',
                        colors: 'Accent',
                        size: 5,
                    }}
                    position={[0.5, 0.2]}
                    size={[0.6, 0.75]}
                    padding={[20, 80, -10, 20]}
                >
                    <VennSets />
                    <VennSets style={{ fillOpacity: 0, stroke: '#000', strokeWidth: 1 }} />
                    <VennSetLabels
                        ids={['A']}
                        format={labelFormat}
                        rs={[1.3]}
                        angles={[-Math.PI / 3]}
                    />
                    <VennSetLabels
                        ids={['B']}
                        format={labelFormat}
                        rs={[1.3]}
                        angles={[Math.PI / 3]}
                    />
                    <VennSetLabels ids={['C']} format={labelFormat} rs={[1.3]} angles={[Math.PI]} />
                    <VennIntersectionLabels component={Counter} />
                    <Tooltip itemSize={[140, 30]} labelFormat={tooltipLabelFormat} />
                </Venn>
            </MilestoneMotion>
        </Chart>
    )
}
