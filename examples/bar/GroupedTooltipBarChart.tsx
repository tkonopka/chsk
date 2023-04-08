import {
    Chart,
    Axis,
    AxisTicks,
    AxisLabel,
    GridLines,
    Legend,
    ThemeSpec,
    mergeTheme,
    Tooltip,
    TooltipDataItem,
    useProcessedData,
    Typography,
} from '@chsk/core'
import { Bar, Bars, BandHighlight } from '@chsk/band'
import { buttonTheme } from '@chsk/themes'
import { HorizontalGoldenRectangle } from '@chsk/annotation'
import { generateBarData } from './generators'
import { MilestoneStory } from '../types'

export const groupedIds = ['alpha', 'beta', 'gamma']
export const groupedKeys = ['before', 'after']

export const generateGroupedTooltipData = () =>
    generateBarData({
        ids: groupedIds,
        keys: groupedKeys,
        interval: [15, 95],
    })

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    text: {
        title: {
            fontSize: '16px',
            fontWeight: 600,
        },
    },
    rect: {
        bandHighlight: {
            fill: '#ffffff',
            opacity: 0.6,
        },
        'tooltip.surface': {
            stroke: '#222222',
            strokeWidth: 1,
        },
    },
    Colors: {
        categorical: {
            variant: 'categorical',
            colors: ['#888888', '#de2d26'],
        },
    },
})

const customLabelFormat = (x: TooltipDataItem) => {
    const processedData = useProcessedData()
    const seriesData = processedData.data[processedData.seriesIndexes[x.id]].data as number[]
    const keyIndex = processedData.keys.indexOf(x.key ?? '')
    return x.key + ' - ' + seriesData[keyIndex] + '%'
}

export const GroupedTooltipBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            fref={fref}
            data={chartData}
            id="grouped-tooltip"
            size={[400, 400]}
            padding={[60, 140, 60, 75]}
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
            >
                <Typography variant={'title'} position={[0, -30]}>
                    Chart with a grouped tooltip
                </Typography>
                <GridLines variant={'y'} />
                <Axis variant={'bottom'} />
                <Axis variant={'left'}>
                    <AxisLabel variant={'left'} distance={55} align={0.5}>
                        Measurements
                    </AxisLabel>
                    <AxisTicks variant={'left'} labelFormat={v => v + '%'} />
                </Axis>
                <Bars />
                <BandHighlight />
                <Legend
                    offset={[20, 0]}
                    position={[1, 1]}
                    positionUnits={'relative'}
                    anchor={[0, 1]}
                    padding={[4, 0, 4, 0]}
                    r={10}
                    itemSize={[90, 22]}
                    itemPadding={[2, 8, 2, 8]}
                    symbol={HorizontalGoldenRectangle}
                    horizontal={false}
                />
                <Tooltip
                    offset={[32, 0]}
                    anchor={[0, 1]}
                    itemSize={[110, 26]}
                    labelFormat={customLabelFormat}
                />
            </Bar>
        </Chart>
    )
}
