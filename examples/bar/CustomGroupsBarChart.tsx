import {
    Chart,
    Axis,
    AxisLabel,
    AxisLine,
    AxisTicks,
    GridLines,
    ThemeSpec,
    RecordWithId,
} from '@chask/core'
import { LineLabel } from '@chask/annotation'
import { Bar, BarDataItem, Bars } from '@chask/band'
import { generateIdentifiers, generateSortedValues } from './generators'

const ids = generateIdentifiers(17, 10000, 'S')
const idsA = ids.slice(0, 5)
const idsB = ids.slice(5, 9)
const idsC = ids.slice(9, 17)
const valuesA = generateSortedValues(5, [25, 100])
if (valuesA[1] < 95) valuesA[0] = 95
const valuesB = generateSortedValues(4, [25, 80])
const valuesC = generateSortedValues(8, [25, 80])

const arrangeBarData = (ids: string[], values: number[], key: string): Array<RecordWithId> => {
    return ids.map((id, index) => {
        const item: RecordWithId = { id }
        item[key] = values[index]
        return item
    })
}
const customGroupsData: Array<BarDataItem> = arrangeBarData(idsA, valuesA, 'A')
    .concat(arrangeBarData(idsB, valuesB, 'B'))
    .concat(arrangeBarData(idsC, valuesC, 'C'))

export const multiviewTheme: ThemeSpec = {
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
        intervalLabel: {
            textAnchor: 'middle',
            fontWeight: 600,
            fill: '#444444',
        },
    },
}

const customGroupsBarProps = {
    stacked: true,
    horizontal: false,
    data: customGroupsData,
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
customGroupsBarProps.scaleIndex.extraPadding[idsB[0]] = 0.4
customGroupsBarProps.scaleIndex.extraPadding[idsC[0]] = 0.4

export const CustomGroupsBarChart = () => {
    return (
        <Chart
            id="customGroups"
            size={[600, 280]}
            padding={[40, 40, 80, 60]}
            theme={multiviewTheme}
        >
            <Bar position={[0, 0]} {...customGroupsBarProps}>
                <GridLines variant={'y'} />
                <Bars />
                <Axis variant={'bottom'}>
                    <AxisLine variant={'bottom'} />
                    <AxisTicks
                        variant={'bottom'}
                        labelRotate={-40}
                        labelOffset={8}
                        labelStyle={{ textAnchor: 'end' }}
                    />
                    <AxisLabel variant={'bottom'} anchor={0.5} offset={62} children={'Samples'} />
                </Axis>
                <Axis variant={'left'} label={'Score (%)'} />
                <LineLabel
                    start={[idsA[0], 105]}
                    end={[idsA[idsA.length - 1], 105]}
                    expansion={[0.5, 0.5]}
                >
                    Group A
                </LineLabel>
                <LineLabel
                    start={[idsB[0], 105]}
                    end={[idsB[idsB.length - 1], 105]}
                    expansion={[0.5, 0.5]}
                >
                    Group B
                </LineLabel>
                <LineLabel
                    start={[idsC[0], 105]}
                    end={[idsC[idsC.length - 1], 105]}
                    expansion={[0.5, 0.5]}
                >
                    others
                </LineLabel>
            </Bar>
        </Chart>
    )
}
