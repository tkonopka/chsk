import {
    Chart,
    Axis,
    GridLines,
    MilestoneMotion,
    ThemeSpec,
    Typography,
    RectangleProps,
    mergeTheme,
    Circle,
    Legend,
    Tooltip,
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { downloadThemePiece } from '@chsk/themes'
import { randomUniformValue, round2dp } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const generateDotBarData = () =>
    ['alpha', 'beta', 'gamma', 'delta'].map(id => {
        const value1 = randomUniformValue(10, 90)
        const value2 = value1 + randomUniformValue(-20, 20)
        return {
            id,
            last: round2dp(value1),
            current: round2dp(Math.min(100, Math.max(0, value2))),
        }
    })

const customTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    circle: {
        default: {
            strokeWidth: 3,
        },
        'bar:hover': {
            cursor: 'pointer',
        },
    },
    line: {
        grid: {
            strokeWidth: 0.5,
            stroke: '#222222',
        },
        'axis.top': {
            strokeWidth: 1,
        },
    },
    AxisTicks: {
        left: {
            labelOffset: 60,
            labelStyle: { textAnchor: 'start' },
            tickSize: 0,
        },
    },
})

const CustomBarSymbol = ({ y, width, height, ...props }: RectangleProps) => {
    return <Circle cx={width} cy={y + height / 2} r={6} {...props} />
}
const customSymbolStyle = { fill: '#ffffff' }

export const DotBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="dots"
            size={[600, 300]}
            padding={[110, 40, 10, 80]}
            theme={customTheme}
        >
            <Bar
                variant={'layered'}
                horizontal={true}
                keys={['last', 'current']}
                scaleIndex={{
                    variant: 'band',
                    padding: 0.3,
                    paddingOuter: 0.3,
                }}
                scaleValue={{
                    variant: 'linear',
                    domain: [0, 100],
                }}
                data={rawData}
            >
                <Typography variant={'title'} position={[-60, -80]}>
                    Performance metrics
                </Typography>
                <Legend
                    position={[-64, -70]}
                    positionUnits={'absolute'}
                    horizontal={true}
                    itemSize={[80, 28]}
                    title={'Years:'}
                    r={6.5}
                    firstOffset={[-10, 0]}
                    symbol={Circle}
                    symbolStyle={customSymbolStyle}
                />
                <MilestoneMotion initial={'invisible'} initialOn={'axes'}>
                    <GridLines variant={'y'} />
                    <Axis variant={'top'} label={''} />
                    <Axis variant={'left'} label={''} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'data'}>
                    <Bars component={CustomBarSymbol} style={customSymbolStyle} />
                    <Tooltip
                        padding={[8, 0, 8, 0]}
                        itemSize={[120, 20]}
                        itemPadding={[2, 8, 2, 8]}
                        r={7}
                        rx={2}
                        ry={2}
                        style={{
                            strokeWidth: 0.5,
                            stroke: '#777',
                            filter: 'drop-shadow(3px 5px 3px #22222244)',
                        }}
                    />
                    <DownloadButtons position={[390, -80]} data image />
                </MilestoneMotion>
            </Bar>
        </Chart>
    )
}
