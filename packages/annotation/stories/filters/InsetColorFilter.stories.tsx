import { Chart, Surface, Rectangle } from '@chsk/core'
import { InsetColorFilter } from '../../src/filters'

export default {
    title: 'Addons/Annotation/Filters/InsetColorFilter',
    component: InsetColorFilter,
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
            <InsetColorFilter id={'lighter'} floodColor={'#ffffff'} />
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
                    filter: 'url(#lighter)',
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
            <InsetColorFilter id={'darker'} floodColor={'#222222'} floodOpacity={0.6} />
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
                    filter: 'url(#darker)',
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
            <InsetColorFilter id={'inset-lighter'} erodeR={3} floodColor={'#ffffff'} />
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
                    filter: 'url(#inset-lighter)',
                }}
            />
        </Chart>
    ),

    name: 'inset',
}

export const MismatchedRadius = {
    render: () => (
        <Chart
            size={[280, 180]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <InsetColorFilter id={'inset-mismatched'} erodeR={12} floodColor={'#ffffff'} />
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
                    filter: 'url(#inset-mismatched)',
                }}
            />
        </Chart>
    ),

    name: 'mismatched radius',
}
