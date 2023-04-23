import { Chart, Surface, Rectangle } from '@chsk/core'
import { InsetShadowFilter } from '../../src/filters'

export default {
    title: 'Addons/Annotation/Filters/InsetShadowFilter',
    component: InsetShadowFilter,
}

export const Narrow = {
    render: () => (
        <Chart
            size={[280, 180]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <InsetShadowFilter id={'narrow-shadow'} blurStdDeviation={6} />
            <Rectangle
                x={40}
                y={40}
                width={60}
                height={60}
                style={{
                    stroke: '#000000',
                    strokeWidth: 1,
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
                    strokeWidth: 1,
                    fill: '#dd9999',
                    filter: 'url(#narrow-shadow)',
                }}
            />
        </Chart>
    ),

    name: 'narrow',
}

export const Wide = {
    render: () => (
        <Chart
            size={[280, 180]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <InsetShadowFilter id={'wide-shadow'} blurStdDeviation={18} />
            <Rectangle
                x={40}
                y={40}
                width={60}
                height={60}
                style={{
                    stroke: '#000000',
                    strokeWidth: 1,
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
                    strokeWidth: 1,
                    fill: '#dd9999',
                    filter: 'url(#wide-shadow)',
                }}
            />
        </Chart>
    ),

    name: 'wide',
}

export const Light = {
    render: () => (
        <Chart
            size={[280, 180]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <InsetShadowFilter
                id={'light-shadow'}
                blurStdDeviation={6}
                floodColor={'#ffffff'}
                floodOpacity={0.8}
            />
            <Rectangle
                x={40}
                y={40}
                width={60}
                height={60}
                style={{
                    stroke: '#000000',
                    strokeWidth: 1,
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
                    strokeWidth: 1,
                    fill: '#dd9999',
                    filter: 'url(#light-shadow)',
                }}
            />
        </Chart>
    ),

    name: 'light',
}
