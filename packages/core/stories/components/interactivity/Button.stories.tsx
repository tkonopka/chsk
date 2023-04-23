import { Button } from '../../../src'
import { ChartForButtonDecorator } from './decorators'

export default {
    title: 'Core/Components/Interactivity/Button',
    component: Button,
}

export const TextButton = {
    name: 'text button',
    args: {
        variant: 'button',
        position: [40, 40],
        size: [100, 40],
        onClick: () => {
            console.log('clicked')
        },
    },
    decorators: [ChartForButtonDecorator],
}

export const CustomContent = {
    name: 'custom content',
    args: {
        variant: 'button',
        position: [40, 40],
        size: [100, 40],
        onClick: () => {
            console.log('clicked')
        },
        children: (
            <rect
                x={0}
                y={0}
                width={40}
                height={40}
                style={{
                    fill: '#777777 ',
                }}
            />
        ),
    },
    decorators: [ChartForButtonDecorator],
}
