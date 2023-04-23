import { Counter } from '../../../src'
import { CounterController, CustomCounterValue } from './CounterController'

export default {
    title: 'Core/Components/Text/Counter',
    component: Counter,
}

export const Position = {
    render: () => <CounterController position={[80, 40]} />,
    name: 'counter',
}

export const CustomFormat = {
    render: () => (
        <CounterController position={[80, 40]} format={v => String(v) + '%'} nDecimalPlaces={1} />
    ),
    name: 'custom format',
}

export const CustomComponent = {
    render: () => (
        <CounterController position={[80, 40]} nDecimalPlaces={0} component={CustomCounterValue} />
    ),
    name: 'custom component',
}
