import { Chart, Surface, Rectangle } from '@chsk/core'
import { BlurFilter } from '../../src/filters'

export default {
    title: 'Addons/Annotation/Filters/BlurFilter',
    component: BlurFilter,
}

export const Small = {
    render: () => (
        <Chart
            size={[280, 180]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <BlurFilter id={'small-blur'} blurStdDeviation={1} />
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
                    filter: 'url(#small-blur)',
                }}
            />
        </Chart>
    ),

    name: 'small',
}

export const Large = {
    render: () => (
        <Chart
            size={[280, 180]}
            padding={[20, 20, 20, 20]}
            style={{
                display: 'inline-block',
            }}
        >
            <Surface />
            <BlurFilter id={'large-blur'} blurStdDeviation={4} />
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
                    filter: 'url(#large-blur)',
                }}
            />
        </Chart>
    ),

    name: 'large',
}
