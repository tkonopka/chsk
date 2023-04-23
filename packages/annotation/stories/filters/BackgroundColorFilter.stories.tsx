import { Chart, Surface, Rectangle, Typography } from '@chsk/core'
import { BackgroundColorFilter } from '../../src/filters'

export default {
    title: 'Addons/Annotation/Filters/BackgroundColorFilter',
    component: BackgroundColorFilter,
}

export const Color = {
    render: () => (
        <Chart
            size={[280, 120]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <BackgroundColorFilter id={'bgColor'} floodColor={'#ffffff'} />
            <Rectangle
                x={0}
                y={0}
                width={120}
                height={80}
                style={{
                    fill: '#d0d0dd',
                }}
            />
            <Typography
                position={[120, 40]}
                style={{
                    fill: '#aa2222',
                    filter: 'url(#bgColor)',
                    fontSize: '16px',
                    textAnchor: 'middle',
                }}
            >
                This is <tspan style={{ fontWeight: 600 }}>important</tspan> text.
            </Typography>
        </Chart>
    ),

    name: 'color',
}

export const Opacity = {
    render: () => (
        <Chart
            size={[280, 120]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <BackgroundColorFilter id={'bgOpacity'} floodColor={'#ffffff'} floodOpacity={0.6} />
            <Rectangle
                x={0}
                y={0}
                width={120}
                height={80}
                style={{
                    fill: '#d0d0dd',
                }}
            />
            <Typography
                position={[120, 40]}
                style={{
                    fill: '#aa2222',
                    filter: 'url(#bgOpacity)',
                    fontSize: '16px',
                    textAnchor: 'middle',
                }}
            >
                This is <tspan style={{ fontWeight: 600 }}>important</tspan> text.
            </Typography>
        </Chart>
    ),

    name: 'opacity',
}

export const Expansion = {
    render: () => (
        <Chart
            size={[280, 120]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <BackgroundColorFilter
                key={'bgExpansionFilter'}
                id={'bgExpansion'}
                floodColor={'#ffffff'}
                floodOpacity={0.7}
                expansion={[0.3, 0.0, 0.3, 0.0]}
            />
            <Rectangle
                x={0}
                y={0}
                width={120}
                height={80}
                style={{
                    fill: '#d0d0dd',
                }}
            />
            <Typography
                position={[120, 40]}
                style={{
                    fill: '#aa2222',
                    filter: 'url(#bgExpansion)',
                    fontSize: '16px',
                    textAnchor: 'middle',
                }}
            >
                This is <tspan style={{ fontWeight: 600 }}>important</tspan> text.
            </Typography>
        </Chart>
    ),

    name: 'expansion',
}
