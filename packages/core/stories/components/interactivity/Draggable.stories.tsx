import { useState } from 'react'
import {
    Axis,
    Chart,
    ChartProps,
    DragData,
    Draggable,
    Surface,
    Typography,
    View,
    ViewProps,
    roundDecimalPlaces,
} from '../../../src'
import { ChartForButtonDecorator } from './decorators'

export default {
    title: 'Core/Components/Interactivity/Draggable',
    component: Draggable,
}

export const XY = {
    name: 'xy',
    args: {
        variant: 'xy',
        children: <rect x={20} y={20} width={40} height={40} style={{ fill: '#ffcccc' }} />,
    },
    decorators: [ChartForButtonDecorator],
}

export const X = {
    name: 'x',
    args: {
        variant: 'x',
        children: <rect x={20} y={20} width={40} height={40} style={{ fill: '#ffcccc' }} />,
    },
    decorators: [ChartForButtonDecorator],
}

export const Y = {
    name: 'y',
    args: {
        variant: 'y',
        children: <rect x={20} y={20} width={40} height={40} style={{ fill: '#ffcccc' }} />,
    },
    decorators: [ChartForButtonDecorator],
}

const chartProps: Pick<ChartProps, 'size' | 'padding' | 'style'> = {
    size: [400, 300],
    padding: [60, 60, 60, 80],
    style: { margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' },
}
const viewProps: Pick<ViewProps, 'scaleX' | 'scaleY' | 'data'> = {
    scaleX: {
        variant: 'band',
        domain: ['alpha', 'beta', 'gamma', 'delta', 'epsilon'],
    },
    scaleY: {
        variant: 'linear',
        domain: [0, 100],
    },
    data: [],
}

export const XDragChart = () => {
    const [info, setInfo] = useState<string>('')

    const handleDrag = (data: DragData) => {
        console.log(JSON.stringify(data))
        setInfo('x: ' + roundDecimalPlaces(data.view[0], 4))
    }

    return (
        <Chart {...chartProps}>
            <View {...viewProps}>
                <Surface variant={'inner'} />
                <Draggable variant={'x'} onDrag={handleDrag}>
                    <line
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={180}
                        style={{ stroke: '#ffcccc', strokeWidth: 12 }}
                    />
                    <line
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={180}
                        style={{ stroke: '#000000', strokeWidth: 1 }}
                    />
                </Draggable>
                <Axis variant={'left'} />
                <Axis variant={'bottom'} />
                <Typography position={[0, -30]} style={{ textAnchor: 'start' }}>
                    {info}
                </Typography>
            </View>
        </Chart>
    )
}

export const YDragChart = () => {
    const [info, setInfo] = useState<string>('')

    const handleDrag = (data: DragData) => {
        console.log(JSON.stringify(data))
        setInfo('y: ' + roundDecimalPlaces(data.view[1], 4))
    }

    return (
        <Chart {...chartProps}>
            <View {...viewProps}>
                <Surface variant={'inner'} />
                <Draggable variant={'y'} onDrag={handleDrag}>
                    <line
                        x1={0}
                        y1={0}
                        x2={260}
                        y2={0}
                        style={{ stroke: '#ffcccc', strokeWidth: 12 }}
                    />
                    <line
                        x1={0}
                        y1={0}
                        x2={260}
                        y2={0}
                        style={{ stroke: '#000000', strokeWidth: 1 }}
                    />
                </Draggable>
                <Axis variant={'left'} />
                <Axis variant={'bottom'} />
                <Typography position={[0, -30]} style={{ textAnchor: 'start' }}>
                    {info}
                </Typography>
            </View>
        </Chart>
    )
}

export const Band = {
    name: 'band',
    render: XDragChart,
}

export const Linear = {
    name: 'linear',
    render: YDragChart,
}
