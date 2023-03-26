import { Chart, ThemeSpec, mergeTheme, View, Typography, Label, MilestoneMotion } from '@chsk/core'
import { BoxedLabel, FlowPath, ArrowMarker } from '@chsk/annotation'
import { downloadTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const generateVerticalFlowData = () => []

const customTheme: ThemeSpec = mergeTheme(downloadTheme, {
    rect: {
        boxedLabel: {
            stroke: '#222222',
            strokeWidth: 1,
            fill: '#fafafa',
        },
        'boxedLabel.A': {
            fill: '#4292c6',
        },
        'boxedLabel.B': {
            fill: '#2171b5',
        },
        'boxedLabel.C': {
            fill: '#084594',
        },
    },
    path: {
        flow: {
            strokeWidth: '1px',
        },
    },
    text: {
        boxedLabel: {
            fill: '#fff',
            fontSize: '14px',
            fontWeight: 600,
        },
        explanation: {
            fill: '#666',
            textAnchor: 'start',
            fontWeight: 300,
            fontSize: '14px',
        },
    },
})

export const VerticalFlowChart = ({ fref, chartData }: MilestoneStory) => {
    const y1 = 20
    const y2 = 90
    const y3 = 160
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="vertical-flow"
            size={[440, 280]}
            padding={[60, 30, 40, 30]}
            theme={customTheme}
        >
            <defs>
                <ArrowMarker variant={'Winged'} id={'arrowV'} size={24} style={{ fill: '#222' }} />
            </defs>
            <View>
                <MilestoneMotion initialOn={'title'}>
                    <Typography variant={'title'} position={[0, -30]}>
                        A typical project has three stages
                    </Typography>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'A'}>
                    <BoxedLabel position={[60, y1]} size={[120, 28]} className={'A'}>
                        1. Beginning
                    </BoxedLabel>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'A'} transition={{ delay: 0.5 }}>
                    <Label position={[145, y1]} size={[200, 20]} className={'explanation'}>
                        Usually, we start at the beginning.
                    </Label>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'B'}>
                    <FlowPath
                        points={[
                            [60, y1 + 14],
                            [60, y2 - 19],
                        ]}
                        units={'absolute'}
                        markerEnd={'arrowV'}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'B'} transition={{ delay: 0.5 }}>
                    <BoxedLabel position={[60, y2]} size={[120, 28]} className={'B'}>
                        2. Middle
                    </BoxedLabel>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'B'} transition={{ delay: 1 }}>
                    <Label position={[145, y2 - 10]} size={[200, 20]} className={'explanation'}>
                        The middle stage is often the longest.
                    </Label>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'B'} transition={{ delay: 1.5 }}>
                    <Label position={[145, y2 + 10]} size={[200, 20]} className={'explanation'}>
                        It may contain many sub-stages.
                    </Label>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'C'}>
                    <FlowPath
                        points={[
                            [60, y2 + 14],
                            [60, y3 - 19],
                        ]}
                        units={'absolute'}
                        markerEnd={'arrowV'}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'C'} transition={{ delay: 0.5 }}>
                    <BoxedLabel position={[60, y3]} size={[120, 28]} className={'C'}>
                        3. End
                    </BoxedLabel>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'C'} transition={{ delay: 1 }}>
                    <Label position={[145, y3]} size={[200, 20]} className={'explanation'}>
                        Finally, we reach a conclusion.
                    </Label>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'buttons'}>
                    <DownloadButtons position={[330, 210]} image />
                </MilestoneMotion>
            </View>
        </Chart>
    )
}
