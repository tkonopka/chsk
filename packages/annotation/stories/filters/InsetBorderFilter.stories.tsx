import { Chart, Surface, Rectangle } from '@chsk/core'
import { InsetBorderFilter } from '../../src/filters'

export default {
    title: 'Addons/Annotation/Filters/InsetBorderFilter',
    component: InsetBorderFilter,
}

export const Lighter = {
    render: () => (
        <Chart
            size={[280, 180]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <InsetBorderFilter id={'lighter-border'} floodColor={'#ffffff'} r={8} />
            <Rectangle
                x={40}
                y={40}
                width={60}
                height={60}
                style={{
                    stroke: '#000000',
                    strokeWidth: 3,
                    fill: '#dd9999',
                }}
            />
            <Rectangle
                x={140}
                y={40}
                width={60}
                height={60}
                style={{
                    stroke: '#000000',
                    strokeWidth: 3,
                    fill: '#dd9999',
                    filter: 'url(#lighter-border)',
                }}
            />
        </Chart>
    ),

    name: 'lighter',
}

export const Darker = {
    render: () => (
        <Chart
            size={[280, 180]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <InsetBorderFilter id={'darker-border'} floodColor={'#222222'} r={8} />
            <Rectangle
                x={40}
                y={40}
                width={60}
                height={60}
                style={{
                    stroke: '#000000',
                    strokeWidth: 3,
                    fill: '#dd9999',
                }}
            />
            <Rectangle
                x={140}
                y={40}
                width={60}
                height={60}
                style={{
                    stroke: '#000000',
                    strokeWidth: 3,
                    fill: '#dd9999',
                    filter: 'url(#darker-border)',
                }}
            />
        </Chart>
    ),

    name: 'darker',
}

export const Inset = {
    render: () => (
        <Chart
            size={[280, 180]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <InsetBorderFilter
                id={'inset-lighter-border'}
                erodeR={3}
                r={8}
                floodColor={'#ffffff'}
            />
            <Rectangle
                x={40}
                y={40}
                width={60}
                height={60}
                style={{
                    stroke: '#000000',
                    strokeWidth: 3,
                    fill: '#dd9999',
                }}
            />
            <Rectangle
                x={140}
                y={40}
                width={60}
                height={60}
                style={{
                    stroke: '#000000',
                    strokeWidth: 3,
                    fill: '#dd9999',
                    filter: 'url(#inset-lighter-border)',
                }}
            />
        </Chart>
    ),

    name: 'inset',
}
