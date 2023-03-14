import {
    Axis,
    AxisTicks,
    Chart,
    GridLines,
    Legend,
    mergeTheme,
    MilestoneMotion,
    ThemeSpec,
    Tooltip,
    useProcessedData,
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { BracketLabel } from '@chsk/annotation'
import { groupedKeys, groupedIds, groupedTheme } from './GroupedVerticalBarChart'
import { MilestoneStory } from '../types'

export const customTheme: ThemeSpec = mergeTheme(groupedTheme, {
    text: {
        bracketLabel: {
            textAnchor: 'start',
            dominantBaseline: 'middle',
            fontSize: '14px',
            fontWeight: 600,
        },
    },
    path: {
        bracketLabel: {
            stroke: '#222222',
            strokeWidth: 1.5,
            fillOpacity: 0,
        },
    },
    g: {
        'legendItem:hover': {
            cursor: 'auto',
        },
    },
})

const PercentageChangeLabels = ({
    keys,
    colors = ['#000000', '#dd0000'],
}: {
    keys: string[]
    colors?: [string, string]
}) => {
    const processedData = useProcessedData()
    // determine indexes for keys holding before/after values
    const before = processedData.keys.indexOf(keys[0])
    const after = processedData.keys.indexOf(keys[1])
    if (before < 0 || after < 0) return null
    // compute percentages
    const changes = processedData.data.map(item => {
        const values = item.data
        if (!Array.isArray(values)) return 0
        return Math.round((100 * (values[after] - values[before])) / values[before])
    })
    // create labels
    const result = processedData.data.map((item, index) => {
        const label = (changes[index] > 0 ? '+' : '') + changes[index] + '%'
        const color = colors[changes[index] > 0 ? 0 : 1]
        return (
            <BracketLabel
                key={'label-' + item.id}
                start={[1.06, item.id]}
                end={[1.06, item.id]}
                expansion={[0.5, 0.5]}
                units={['relative', 'view']}
                textStyle={{ fill: color }}
                translate={[10, 0]}
            >
                {label}
            </BracketLabel>
        )
    })
    return <g role={'percentage-change'}>{result}</g>
}

export const GroupedHorizontalBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="grouped-horizontal"
            size={[560, 300]}
            padding={[90, 100, 30, 80]}
            theme={customTheme}
        >
            <Bar
                data={rawData}
                keys={groupedKeys}
                scaleIndex={{
                    variant: 'band',
                    domain: groupedIds,
                    padding: 0.2,
                }}
                horizontal={true}
            >
                <Legend
                    position={[-60, -80]}
                    positionUnits={'absolute'}
                    size={[300, 80]}
                    sizeUnits={'absolute'}
                    horizontal={true}
                    r={10.5}
                    itemSize={[85, 20]}
                    itemPadding={[2, 0, 2, 0]}
                    firstOffset={[-85, 24]}
                    title={'Measurements (arbitrary values)'}
                    interactive={false}
                />
                <MilestoneMotion initial={'invisible'} initialOn={'grid'}>
                    <GridLines variant={'x'} style={{ stroke: '#bbbbbb', strokeWidth: 1 }} />
                    <Axis variant={'top'} />
                    <Axis variant={'left'}>
                        <AxisTicks
                            variant={'left'}
                            labelOffset={60}
                            labelStyle={{ textAnchor: 'start' }}
                        />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'bars-before'}>
                    <Bars keys={['before']} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'bars-after'}>
                    <Bars keys={['after']} />
                    <Tooltip />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'percentages'}>
                    <PercentageChangeLabels keys={groupedKeys} />
                </MilestoneMotion>
            </Bar>
        </Chart>
    )
}
