import { domAnimation, LazyMotion } from 'framer-motion'
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
} from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { downloadThemePiece } from '@chsk/themes'
import { randomUniformValue, round2dp } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const groupedIds = ['alpha', 'beta', 'gamma', 'delta']

export const generateDotBarData = () =>
    groupedIds.map(id => {
        const value1 = randomUniformValue(10, 90)
        const value2 = value1 + randomUniformValue(-20, 20)
        return {
            id,
            last: round2dp(value1),
            current: round2dp(Math.min(100, Math.max(0, value2))),
        }
    })

const customTheme: ThemeSpec = mergeTheme(downloadThemePiece, {
    line: {
        grid: {
            strokeWidth: 0.5,
            stroke: '#222222',
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
const customSymbolStyle = { fill: '#ffffff', strokeWidth: 3 }

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
                    itemSize={[90, 28]}
                    title={'Years'}
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
                    <LazyMotion features={domAnimation}>
                        <Bars component={CustomBarSymbol} style={customSymbolStyle} />
                    </LazyMotion>
                    <DownloadButtons position={[390, -60]} data image />
                </MilestoneMotion>
            </Bar>
        </Chart>
    )
}
