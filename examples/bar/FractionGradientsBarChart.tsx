import {
    Axis,
    AxisTicks,
    Chart,
    LinearGradient,
    mergeThemes,
    Surface,
    ThemeSpec,
    Tooltip,
    Typography,
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { alphabetGreek, randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { fontSystemUITheme } from '@chsk/themes'

export const generateFractionGradientsBarData = () => {
    return alphabetGreek.slice(0, 8).map(id => ({
        id,
        value: Math.round(randomUniformValue(5, 100)),
    }))
}

const customTheme: ThemeSpec = mergeThemes([
    fontSystemUITheme,
    {
        text: {
            title: {
                fontSize: '20px',
            },
            subtitle: {
                fontSize: 11,
                fontWeight: 300,
                fill: '#333333',
            },
            tooltip: {
                fill: '#000000',
            },
        },
        rect: {
            bar: {
                opacity: 0.9,
                strokeWidth: 0,
            },
            surface: {
                stroke: '#d0d0d0',
                strokeWidth: 0.5,
            },
            'tooltip.surface': {
                stroke: '#101010',
                strokeWidth: 1,
                filter: 'drop-shadow(-1px 1px 3px #101010ff)',
            },
        },
        line: {
            axis: {
                strokeWidth: 2,
                stroke: '#101010',
            },
        },
    },
])

export const FractionGradientsBarChart = ({ fref, chartData, rawData }: MilestoneStory) => (
    <Chart
        data={chartData}
        fref={fref}
        id="gradients"
        size={[480, 400]}
        padding={[120, 70, 60, 80]}
        theme={customTheme}
    >
        <defs>
            <LinearGradient
                id="blues-bg"
                start={[0, 0]}
                end={[0, 1]}
                stops={['#084594', '#2171b5']}
            />
            <LinearGradient
                id="gradients-bg"
                start={[0.1, 0.25]}
                end={[1, 0]}
                stops={['#f6f6f6', '#ffffff']}
            />
        </defs>
        <Surface variant={'outer'} style={{ fill: 'url(#gradients-bg)' }} />
        <Bar
            data={rawData}
            keys={['value']}
            scaleIndex={{
                variant: 'band',
                paddingOuter: 0.2,
                padding: 0.2,
            }}
            scaleValue={{
                variant: 'linear',
                nice: 3,
            }}
            scaleColor={{
                variant: 'categorical',
                colors: ['#084594'],
            }}
        >
            <Typography variant={'title'} position={[0, -60]}>
                Chart with gradients
            </Typography>
            <Typography variant={'subtitle'} position={[0, -40]}>
                Source: synthetic data
            </Typography>
            <Bars style={{ fill: '#ffffff' }} />
            <Bars
                style={{ fill: 'url(#blues-bg)' }}
                modifiers={{ onMouseEnter: { opacity: 1 }, onMouseLeave: {} }}
            />
            <Axis variant={'bottom'} />
            <Axis variant={'left'}>
                <AxisTicks variant={'left'} tickSize={0} labelFormat={v => v + '%'} />
            </Axis>
            <Tooltip
                itemSize={[110, 25]}
                rx={2}
                ry={2}
                labelFormat={d => d.id + ': ' + d?.data + '%'}
            />
        </Bar>
    </Chart>
)
