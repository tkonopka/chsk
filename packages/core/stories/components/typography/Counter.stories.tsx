import { Counter } from '../../../src'
import { CounterController } from './CounterController'

export default {
    title: 'Core/Components/Text/Counter',
    component: Counter,
}

export const Position = {
    name: 'counter',
    render: () => <CounterController position={[80, 40]} />,
}

export const CustomFormat = {
    name: 'custom format',
    render: () => (
        <CounterController position={[80, 40]} format={v => String(v) + '%'} nDecimalPlaces={1} />
    ),
}

export const CustomFormatTspan = {
    name: 'custom styling',
    render: () => (
        <CounterController
            position={[80, 40]}
            format={v => (
                <tspan>
                    {String(v)}
                    <tspan style={{ fontSize: 14, dominantBaseline: 'text-before-edge' }}>%</tspan>
                </tspan>
            )}
            nDecimalPlaces={1}
        />
    ),
}

export const Speed = {
    name: 'speed',
    render: () => (
        <CounterController
            position={[80, 40]}
            valueTransition={{ type: 'tween', duration: 3, delay: 0 }}
            nDecimalPlaces={1}
        />
    ),
}
