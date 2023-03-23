import {
    Chart,
    LinearGradient,
    mergeThemes,
    MilestoneMotion,
    Surface,
    ThemeSpec,
    Tooltip,
    Typography,
    View,
} from '@chsk/core'
import { Bar, Bars, BarsLabels } from '@chsk/band'
import { LineLabel, Paragraph } from '@chsk/annotation'
import { randomUniformValue } from '../utils'
import { MilestoneStory } from '../types'
import { fontSystemUITheme } from '@chsk/themes'

export const generateFractionShadowsBarData = () => {
    const valueA = randomUniformValue(35, 60)
    const valueB = randomUniformValue(20, valueA - 12)
    const valueC = randomUniformValue(3, valueB - 12)
    const normalization = (valueA + valueB + valueC) / 100
    return [
        {
            id: 'A',
            A: Math.round(valueA / normalization),
        },
        {
            id: 'B',
            B: Math.round(valueB / normalization),
        },
        {
            id: 'C',
            C: Math.round(valueC / normalization),
        },
    ]
}

const customTheme: ThemeSpec = mergeThemes([
    fontSystemUITheme,
    {
        text: {
            title: {
                fontSize: '24px',
                fill: '#161616',
            },
            paragraph: {
                textAnchor: 'start',
                fontSize: '14px',
                fill: '#000000',
                fontWeight: 300,
            },
            barLabel: {
                dominantBaseline: 'hanging',
                textAnchor: 'start',
                fontSize: '18px',
                fontWeight: 300,
                fill: '#666666',
            },
            barTitle: {
                textAnchor: 'start',
                fontSize: '20px',
                fontWeight: 600,
                fill: '#161616',
                dominantBaseline: 'auto',
            },
        },
        rect: {
            bar: {
                strokeWidth: 2.5,
                stroke: '#ffffff',
                filter: 'drop-shadow(-8px 6px 10px #55555555)',
            },
            surface: {
                stroke: '#d0d0d0',
                strokeWidth: 0.5,
            },
        },
        line: {
            lineLabel: {
                strokeWidth: 4.5,
                stroke: '#262626',
            },
        },
    },
])

const TwoBarsLabels = ({ ids, keys, label }: { ids: string[]; keys: string[]; label: string }) => {
    return (
        <>
            <BarsLabels
                ids={ids}
                keys={keys}
                padding={[12, 0, 12, 0]}
                align={[0, 1]}
                minSize={[0, 0]}
                className={'barTitle'}
                format={() => label}
            />
            <BarsLabels
                ids={ids}
                keys={keys}
                padding={[2, 0, 2, 0]}
                align={[1, 1]}
                minSize={[0, 0]}
                translate={[10, 4]}
                format={v => v + '%'}
            />
        </>
    )
}

export const FractionShadowsBarChart = ({ fref, chartData, rawData }: MilestoneStory) => (
    <Chart
        data={chartData}
        fref={fref}
        id="shadows"
        size={[640, 400]}
        padding={[80, 100, 60, 420]}
        theme={customTheme}
    >
        <defs>
            <LinearGradient
                id="shadows-bg"
                start={[0.4, 0.25]}
                end={[1, 0]}
                stops={['#f6f6f6', '#ffffff']}
            />
        </defs>
        <Surface variant={'outer'} style={{ fill: 'url(#shadows-bg)' }} />
        <View container={{ position: [-365, 0], positionUnits: 'absolute' }}>
            <MilestoneMotion initial={'invisible'} initialOn={'title'}>
                <Typography variant={'title'} position={[0, -10]}>
                    Chart with shadows
                </Typography>
            </MilestoneMotion>
            <MilestoneMotion initial={'invisible'} initialOn={'description'}>
                <Paragraph position={[0, 25]} size={[310, 18]} align={0}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </Paragraph>
            </MilestoneMotion>
        </View>
        <g transform="skewY(-0.5)">
            <Bar
                variant={'stacked'}
                data={rawData}
                keys={['A', 'B', 'C']}
                scaleIndex={{
                    variant: 'band',
                    paddingOuter: 0,
                    padding: 0.25,
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#1f77b4', '#d62728', '#7f7f7f'],
                }}
            >
                <MilestoneMotion initial={'invisible'} initialOn={'A'}>
                    <Bars keys={['A']} style={{ stroke: '#ffffff' }} />
                    <TwoBarsLabels ids={['A']} keys={['A']} label={'Group A'} />
                    <LineLabel
                        end={['C', 1.02]}
                        start={['A', 1.02]}
                        units={['view', 'relative']}
                        expansion={[0.5, 0.5]}
                    />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'B'}>
                    <Bars keys={['B']} style={{ stroke: '#ffffff' }} />
                    <TwoBarsLabels ids={['B']} keys={['B']} label={'Group B'} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'C'}>
                    <Bars keys={['C']} style={{ stroke: '#ffffff' }} />
                    <TwoBarsLabels ids={['C']} keys={['C']} label={'Others'} />
                </MilestoneMotion>
                <Tooltip itemSize={[70, 30]} rx={4} ry={4} labelFormat={d => d?.data + '%'} />
            </Bar>
        </g>
    </Chart>
)
