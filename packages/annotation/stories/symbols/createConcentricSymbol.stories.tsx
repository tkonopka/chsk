import { Chart, Surface } from '@chsk/core'
import { createConcentricSymbol } from '../../src'
import {
    ConcentricCirclesBg,
    ConcentricCirclesFg,
    ConcentricSquares,
    ConcentricHybrid,
} from './decorators'

export default {
    title: 'Addons/Annotation/Symbols/createConcentricSymbol',
    component: createConcentricSymbol,
}

export const Background = {
    render: () => (
        <Chart
            size={[200, 140]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface variant={'inner'} />
            <ConcentricCirclesBg
                cx={80}
                cy={50}
                r={20}
                style={{
                    fill: '#dd9999',
                    stroke: '#993333',
                    strokeWidth: '1px',
                }}
            />
        </Chart>
    ),

    name: 'background',
}

export const Foreground = {
    render: () => (
        <Chart
            size={[200, 140]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface variant={'inner'} />
            <ConcentricCirclesFg
                cx={80}
                cy={50}
                r={20}
                style={{
                    fill: '#dd9999',
                    stroke: '#993333',
                    strokeWidth: '1px',
                }}
            />
        </Chart>
    ),

    name: 'foreground',
}

export const Squares = {
    render: () => (
        <Chart
            size={[200, 140]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface variant={'inner'} />
            <ConcentricSquares
                cx={80}
                cy={50}
                r={20}
                style={{
                    fill: '#dd9999',
                    stroke: '#993333',
                    strokeWidth: '1px',
                }}
            />
        </Chart>
    ),

    name: 'squares',
}

export const Hybrid = {
    render: () => (
        <Chart
            size={[200, 140]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface variant={'inner'} />
            <ConcentricHybrid
                cx={80}
                cy={50}
                r={20}
                style={{
                    fill: '#dd9999',
                    stroke: '#993333',
                    strokeWidth: '1px',
                }}
            />
        </Chart>
    ),

    name: 'hybrid',
}
