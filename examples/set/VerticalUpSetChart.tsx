import {
    Chart,
    Axis,
    AxisLabel,
    AxisLine,
    AxisTicks,
    MilestoneMotion,
    ThemeSpec,
    mergeTheme,
} from '@chsk/core'
import { UpSet, UpSetGrid, UpSetMemberships, UpSetBar, isUpSetData } from '@chsk/matrix'
import { Bars } from '@chsk/band'
import { alphabetGreek, generateIdentifiers, randomSelection } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { buttonTheme } from '@chsk/themes'

export const generateVerticalUpSetData = () => {
    const elements = generateIdentifiers(200, 10000, 'el')
    const ids = alphabetGreek.slice(0, 6)
    const preferred = elements.slice(0, 80)
    const other = elements.slice(80, elements.length)
    const generateSet = (n: number) => {
        const set = new Set()
        randomSelection(preferred, n / 2).forEach(x => set.add(x))
        randomSelection(other, n / 2).forEach(x => set.add(x))
        return Array.from(set)
    }
    return ids.map(id => ({ id, data: generateSet(50) }))
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    line: {
        axis: {
            visibility: 'visible',
        },
        upSetMembership: {
            strokeWidth: 3,
        },
    },
    circle: {
        default: {
            fill: '#ccc',
            fillOpacity: 0.7,
        },
        upSetMembership: {
            fillOpacity: 1,
        },
    },
    Motion: {
        default: {
            type: 'spring',
            mass: 0.5,
            stiffness: 100,
            damping: 20,
        },
    },
})

export const VerticalUpSetChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isUpSetData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="vertical-upset"
            size={[480, 600]}
            padding={[80, 320, 40, 40]}
            theme={customTheme}
        >
            <UpSet data={rawData} horizontal={false}>
                <MilestoneMotion initialOn={'axes'}>
                    <Axis variant={'top'}>
                        <AxisTicks
                            variant={'top'}
                            labelAngle={-90}
                            labelStyle={{
                                textAnchor: 'start',
                                dominantBaseline: 'middle',
                                fontSize: 14,
                            }}
                        />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'grid'}>
                    <UpSetGrid symbolStyle={{ strokeWidth: 1, stroke: '#aaa' }} />
                    <UpSetMemberships />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'bars'}>
                    <UpSetBar
                        size={260}
                        padding={[0, 0, 0, 10]}
                        scaleIndex={{ variant: 'band', padding: 0.25 }}
                    >
                        <Axis variant={'top'}>
                            <AxisLine variant={'top'} />
                            <AxisTicks variant={'top'} />
                            <AxisLabel variant={'top'}>Set intersection</AxisLabel>
                        </Axis>
                        <Axis variant={'left'}>
                            <AxisLine variant={'left'} />
                        </Axis>
                        <Bars />
                    </UpSetBar>
                </MilestoneMotion>
                <DownloadButtons position={[280, 500]} data image />
            </UpSet>
        </Chart>
    )
}
