import {
    Chart,
    Axis,
    AxisLine,
    GridLines,
    MilestoneMotion,
    ThemeSpec,
    RecordWithId,
    Typography,
    Tooltip,
    TooltipData,
    TooltipDataItem,
} from '@chsk/core'
import { LineLabel } from '@chsk/annotation'
import { Bar, Bars } from '@chsk/band'
import { generateIdentifiers } from '../utils'
import { MilestoneStory } from '../types'
import { generateSortedValues } from './generators'

const ids = generateIdentifiers(17, 10000, 'S')
const idsA = ids.slice(0, 5)
const idsB = ids.slice(5, 9)
const idsC = ids.slice(9, 17)

export const generateCustomGroupsBarData = () => {
    const valuesA = generateSortedValues(5, [25, 100])
    if (Number(valuesA[1]) < 95) valuesA[0] = 95
    const valuesB = generateSortedValues(4, [25, 80])
    const valuesC = generateSortedValues(8, [25, 80])

    const arrangeBarData = (ids: string[], values: number[], key: string): Array<RecordWithId> => {
        return ids.map((id, index) => {
            const item: RecordWithId = { id }
            item[key] = values[index]
            return item
        })
    }

    return arrangeBarData(idsA, valuesA, 'A')
        .concat(arrangeBarData(idsB, valuesB, 'B'))
        .concat(arrangeBarData(idsC, valuesC, 'C'))
}

const customTheme: ThemeSpec = {
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 1,
        },
    },
    text: {
        axisLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
        lineLabel: {
            textAnchor: 'middle',
            fontWeight: 600,
            fill: '#444444',
        },
    },
    AxisTicks: {
        bottom: {
            labelAngle: -45,
            labelDistance: 8,
            labelStyle: { textAnchor: 'end' },
        },
    },
}

const customGroupsBarProps = {
    position: [0, 0] as [number, number],
    variant: 'stacked' as const,
    horizontal: false,
    keys: ['A', 'B', 'C'],
    scaleIndex: {
        variant: 'band' as const,
        domain: ids,
        padding: 0.2,
        extraPadding: {} as Record<string, number>,
        paddingOuter: 0.4,
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 100] as [number, number],
    },
}
customGroupsBarProps.scaleIndex.extraPadding[String(idsB[0])] = 0.4
customGroupsBarProps.scaleIndex.extraPadding[String(idsC[0])] = 0.4

const customTooltipTitle = (x: TooltipData) => {
    return x?.data?.[0]?.id
}
const customTooltipLabel = (x: TooltipDataItem) => {
    const value = 'data' in x ? Number(x['data']) : 0
    return value + '%'
}
const customModifiers = {
    onMouseEnter: { strokeWidth: 2, stroke: '#222222' },
    onMouseLeave: {},
}

export const CustomGroupsBarChart = ({ fref, chartData, rawData }: MilestoneStory) => (
    <Chart
        data={chartData}
        fref={fref}
        id="customGroups"
        size={[600, 280]}
        padding={[40, 40, 60, 75]}
        theme={customTheme}
    >
        <Bar {...customGroupsBarProps} data={rawData}>
            <MilestoneMotion enterOn={'axes'}>
                <GridLines variant={'y'} />
                <Axis variant={'bottom'}>
                    <AxisLine />
                </Axis>
                <Typography variant={'axisLabel'} position={[-45, 206]}>
                    Samples
                </Typography>
                <Axis variant={'left'} label={'Score (%)'} />
            </MilestoneMotion>
            <MilestoneMotion enterOn={'A'}>
                <Bars keys={['A']} modifiers={customModifiers} />
                <LineLabel
                    start={[idsA[0] as string, 105]}
                    end={[idsA[idsA.length - 1] as string, 105]}
                    expansion={[0.5, 0.5]}
                >
                    Group A
                </LineLabel>
                <Axis variant={'bottom'} ticks={idsA} label={''} />
            </MilestoneMotion>
            <MilestoneMotion enterOn={'B'}>
                <Bars keys={['B']} modifiers={customModifiers} />
                <LineLabel
                    start={[idsB[0] as string, 105]}
                    end={[idsB[idsB.length - 1] as string, 105]}
                    expansion={[0.5, 0.5]}
                >
                    Group B
                </LineLabel>
                <Axis variant={'bottom'} ticks={idsB} label={''} />
            </MilestoneMotion>
            <MilestoneMotion enterOn={'C'}>
                <Bars keys={['C']} modifiers={customModifiers} />
                <LineLabel
                    start={[idsC[0] as string, 105]}
                    end={[idsC[idsC.length - 1] as string, 105]}
                    expansion={[0.5, 0.5]}
                >
                    others
                </LineLabel>
                <Axis variant={'bottom'} ticks={idsC} label={''} />
            </MilestoneMotion>
            <Tooltip
                offset={[16, 0]}
                anchor={[0, 0.5]}
                itemSize={[70, 24]}
                itemPadding={[4, 8, 4, 8]}
                titleFormat={customTooltipTitle}
                labelFormat={customTooltipLabel}
            />
        </Bar>
    </Chart>
)
