import { AxisTooltip, Surface } from '../../../src'
import { ChartForDetectorTooltipDecorator } from './decorators'

export default {
    title: 'Core/Components/Tooltips/AxisTooltip',
    component: AxisTooltip,
}

export const Top = {
    name: 'top',
    args: {
        variant: 'top',
        size: [20, 20],
        padding: [0, 0, 0, 0],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}

export const Right = {
    name: 'right',
    args: {
        variant: 'right',
        size: [20, 20],
        padding: [0, 0, 0, 0],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}

export const Bottom = {
    name: 'bottom',
    args: {
        variant: 'bottom',
        size: [20, 20],
        padding: [0, 0, 0, 0],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}

export const Left = {
    name: 'left',
    args: {
        variant: 'left',
        size: [20, 20],
        padding: [0, 0, 0, 0],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}

export const CustomPlacement = {
    name: 'custom placement',
    args: {
        variant: 'top',
        offset: [0, 0],
        anchor: [0.5, 0.5],
        size: [20, 20],
        padding: [0, 0, 0, 0],
        children: (
            <Surface
                style={{
                    fill: '#aabbee',
                }}
            />
        ),
    },
    decorators: [ChartForDetectorTooltipDecorator],
}
