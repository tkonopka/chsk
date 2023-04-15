import {
    Chart,
    Axis,
    AxisLine,
    MilestoneMotion,
    ThemeSpec,
    mergeTheme,
    Tooltip,
    TooltipDataItem,
} from '@chsk/core'
import { UpSet, UpSetGrid, UpSetMemberships, UpSetBar, isUpSetData } from '@chsk/matrix'
import { Bars, BandSurface } from '@chsk/band'
import { buttonTheme } from '@chsk/themes'
import { schemeDark2 } from 'd3-scale-chromatic'
import { alphabetGreek, generateIdentifiers, randomSelection } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const generateHorizontalUpSetData = () => {
    const elements = generateIdentifiers(200, 10000, 'el')
    const ids = alphabetGreek.slice(0, 5)
    const common = elements.slice(0, 20)
    const preferred = elements.slice(20, 100)
    const other = elements.slice(100, elements.length)
    const generateSet = (n: number) => {
        const set = new Set(common)
        randomSelection(preferred, n / 2).forEach(x => set.add(x))
        randomSelection(other, n / 2).forEach(x => set.add(x))
        return Array.from(set)
    }
    return ids.map(id => ({ id, data: generateSet(50) }))
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    line: {
        upSetMembership: {
            strokeWidth: 4,
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
})

export const HorizontalUpSetChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isUpSetData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="horizontal-upset"
            size={[800, 400]}
            padding={[240, 60, 60, 80]}
            theme={customTheme}
        >
            <UpSet
                data={rawData}
                scaleColor={{
                    variant: 'categorical',
                    colors: schemeDark2,
                }}
            >
                <MilestoneMotion enterOn={'axes'}>
                    <Axis variant={'left'} />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'grid'}>
                    <UpSetGrid />
                    <UpSetMemberships />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'bars'}>
                    <UpSetBar
                        size={200}
                        padding={[0, 0, 10, 0]}
                        scaleIndex={{ variant: 'band', padding: 0.25 }}
                    >
                        <Axis variant={'left'} label={'Set intersection'}></Axis>
                        <Axis variant={'bottom'}>
                            <AxisLine variant={'bottom'} />
                        </Axis>
                        <BandSurface
                            interactive={true}
                            tooltip={true}
                            style={{ fill: '#eeeeee' }}
                        />
                        <Bars />
                        <Tooltip
                            itemSize={[60, 24]}
                            labelFormat={(x: TooltipDataItem) => String(x.data)}
                        />
                    </UpSetBar>
                </MilestoneMotion>
                <DownloadButtons position={[580, -230]} data image />
            </UpSet>
        </Chart>
    )
}
