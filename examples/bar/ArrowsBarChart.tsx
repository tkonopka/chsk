import {
    Chart,
    Axis,
    AxisLine,
    AxisTicks,
    GridLines,
    MilestoneMotion,
    ThemeSpec,
    RectangleProps,
    Tooltip,
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { alphabetGreek } from '../utils'
import { MilestoneStory } from '../types'
import { generateSortedValues } from './generators'
import { BlockArrow } from '@chsk/annotation'

const ids = alphabetGreek

export const generateArrowsData = () => {
    const values = generateSortedValues(1, [95, 100]).concat(
        generateSortedValues(ids.length - 1, [5, 95])
    )
    return ids.map((id, index) => {
        return { id, value: values[index] }
    })
}

const customTheme: ThemeSpec = {
    line: {
        axis: {
            visibility: 'visible',
            strokeWidth: 1,
        },
    },
    path: {
        bar: {
            fillOpacity: 1,
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
        'tickLabel.bottom': {
            textAnchor: 'start' as const,
            dominantBaseline: 'middle' as const,
        },
    },
}

const customProps = {
    horizontal: false,
    keys: ['value'],
    scaleIndex: {
        variant: 'band' as const,
        domain: ids,
        padding: 0.2,
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 100] as [number, number],
    },
}

const BarsComponentWithArrow = ({ x, y, width, height, ...props }: RectangleProps) => {
    if (width < 0) {
        width = Math.abs(width)
        x -= width
    }
    if (height < 0) {
        height = Math.abs(height)
        y -= height
    }
    return (
        <BlockArrow
            start={[x + width / 2, y + height]}
            end={[x + width / 2, y]}
            units={'absolute'}
            headLength={Math.min(14, height)}
            {...props}
        />
    )
}

export const ArrowsBarChart = ({ fref, chartData, rawData }: MilestoneStory) => (
    <Chart
        data={chartData}
        fref={fref}
        id="arrows"
        size={[640, 280]}
        padding={[40, 40, 60, 75]}
        theme={customTheme}
    >
        <Bar {...customProps} data={rawData}>
            <MilestoneMotion enterOn={'axes'}>
                <GridLines variant={'y'} />
            </MilestoneMotion>
            <MilestoneMotion enterOn={'data'}>
                <Bars component={BarsComponentWithArrow} />
            </MilestoneMotion>
            <MilestoneMotion enterOn={'axes'}>
                <Axis variant={'left'} label={'Score (%)'} />
                <Axis variant={'bottom'}>
                    <AxisLine variant={'bottom'} />
                    <AxisTicks variant={'bottom'} labelAngle={45} labelDistance={11} />
                </Axis>
            </MilestoneMotion>
            <Tooltip />
        </Bar>
    </Chart>
)
