import { Chart, ThemeSpec, mergeTheme, View, Label, MilestoneMotion } from '@chsk/core'
import { FlowPath, ArrowMarker } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { FilterIcon, DatasetIcon, CheckIcon } from '../icons'

export const generateHorizontalFlowData = () => []

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    path: {
        default: {
            fillOpacity: 1,
        },
        flow: {
            strokeWidth: '1px',
            fillOpacity: 0,
        },
        icon: {
            fill: '#4292c6',
            stroke: '#4292c6',
            strokeWidth: 1,
        },
    },
    text: {
        label: {
            fill: '#222',
            fontSize: '14px',
            textAnchor: 'start',
        },
        'label.center': {
            textAnchor: 'middle',
        },
        'label.right': {
            textAnchor: 'end',
        },
    },
})

export const HorizontalFlowChart = ({ fref, chartData }: MilestoneStory) => {
    const y = 60
    const branchHeight = 32
    // positions for lines
    const x = [80, 160, 240, 340, 420]
    // positions for icons
    const xStart = x[0] - 44
    const xMid = (x[2] + x[3]) / 2
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="horizontal-flow"
            size={[640, 180]}
            padding={[30, 30, 30, 30]}
            theme={customTheme}
        >
            <defs>
                <ArrowMarker variant={'winged'} id={'arrowH'} size={24} style={{ fill: '#222' }} />
            </defs>
            <View>
                <MilestoneMotion enterOn={'start'}>
                    <DatasetIcon x={xStart - 12} y={y - 24} className={'icon'} />
                    <Label position={[xStart, y + 12]} size={[100, 30]} className={'center'}>
                        Input data
                    </Label>
                </MilestoneMotion>
                <MilestoneMotion enterOn={'branch1'}>
                    <FlowPath
                        points={[
                            [x[0], y],
                            [x[1], y],
                            [x[1], y - branchHeight],
                            [x[4], y - branchHeight],
                        ]}
                        units={'absolute'}
                        transition={{ pathLength: { duration: 1 } }}
                        markerEnd={'arrowH'}
                    />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'branch1'} transition={{ delay: 1 }} exit={null}>
                    <CheckIcon x={x[4] + 20} y={y - branchHeight - 12} className={'icon'} />
                    <Label
                        position={[x[4] + 50, y - branchHeight]}
                        size={[120, 28]}
                        className={'left'}
                    >
                        Standard analysis
                    </Label>
                </MilestoneMotion>
                <MilestoneMotion enterOn={'branch2a'}>
                    <FlowPath
                        points={[
                            [x[0], y],
                            [x[1], y],
                            [x[1], y + branchHeight],
                            [x[2], y + branchHeight],
                        ]}
                        units={'absolute'}
                        transition={{ pathLength: { duration: 0.7 } }}
                        markerEnd={'arrowH'}
                    />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'branch2a'} transition={{ delay: 0.7 }} exit={null}>
                    <FilterIcon x={xMid - 12} y={y + branchHeight - 24} className={'icon'} />
                    <Label
                        position={[xMid, y + branchHeight + 12]}
                        size={[80, 28]}
                        className={'center'}
                    >
                        Data filter
                    </Label>
                </MilestoneMotion>
                <MilestoneMotion enterOn={'branch2b'}>
                    <FlowPath
                        points={[
                            [340, y + branchHeight],
                            [420, y + branchHeight],
                        ]}
                        units={'absolute'}
                        transition={{ pathLength: { duration: 0.3 } }}
                        markerEnd={'arrowH'}
                    />
                </MilestoneMotion>
                <MilestoneMotion enterOn={'branch2b'} transition={{ delay: 0.3 }} exit={null}>
                    <CheckIcon x={x[4] + 20} y={y + branchHeight - 12} className={'icon'} />
                    <Label
                        position={[x[4] + 50, y + branchHeight]}
                        size={[80, 28]}
                        className={'left'}
                    >
                        Custom analysis
                    </Label>
                </MilestoneMotion>
                <MilestoneMotion enterOn={'buttons'}>
                    <DownloadButtons position={[520, 140]} image />
                </MilestoneMotion>
            </View>
        </Chart>
    )
}
