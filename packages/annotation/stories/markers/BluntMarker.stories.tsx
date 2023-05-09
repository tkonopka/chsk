import { Chart, Line } from '@chsk/core'
import { BluntMarker } from '../../src'

export default {
    title: 'Addons/Annotation/Markers/BluntMarker',
    component: BluntMarker,
}

export const Circle = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <BluntMarker
                    id="circle"
                    variant="circle"
                    style={{
                        fill: '#222222',
                        fillOpacity: 1,
                    }}
                />
            </defs>
            <Line
                x1={0}
                y1={60}
                x2={140}
                y2={20}
                markerEnd={'circle'}
                style={{
                    strokeWidth: 3,
                }}
            />
        </Chart>
    ),

    name: 'circle',
}

export const Square = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <BluntMarker
                    id="square"
                    variant="square"
                    style={{
                        fill: '#222222',
                        fillOpacity: 1,
                    }}
                />
            </defs>
            <Line
                x1={0}
                y1={60}
                x2={140}
                y2={20}
                markerEnd={'square'}
                style={{
                    strokeWidth: 3,
                }}
            />
        </Chart>
    ),

    name: 'square',
}

export const Diamond = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <BluntMarker
                    id="diamond"
                    variant="diamond"
                    style={{
                        fill: '#222222',
                        fillOpacity: 1,
                    }}
                />
            </defs>
            <Line
                x1={0}
                y1={60}
                x2={140}
                y2={20}
                markerEnd={'diamond'}
                style={{
                    strokeWidth: 3,
                }}
            />
        </Chart>
    ),

    name: 'diamond',
}

export const Small = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <BluntMarker
                    id="small-circle"
                    variant="circle"
                    size={8}
                    style={{
                        fill: '#222222',
                        fillOpacity: 1,
                    }}
                />
            </defs>
            <Line
                x1={0}
                y1={60}
                x2={140}
                y2={20}
                markerEnd={'small-circle'}
                style={{
                    strokeWidth: 3,
                }}
            />
        </Chart>
    ),

    name: 'small',
}

export const Large = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <BluntMarker
                    id="large-square"
                    variant="square"
                    size={15}
                    style={{
                        fill: '#222222',
                        fillOpacity: 1,
                    }}
                />
            </defs>
            <Line
                x1={0}
                y1={60}
                x2={140}
                y2={20}
                markerEnd={'large-square'}
                style={{
                    strokeWidth: 3,
                }}
            />
        </Chart>
    ),

    name: 'large',
}

export const DoubleSided = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <BluntMarker
                    id="color-circle"
                    variant="circle"
                    style={{
                        stroke: '#2222dd',
                        fill: '#2222dd',
                        fillOpacity: 1,
                    }}
                />
            </defs>
            <Line
                x1={0}
                y1={60}
                x2={140}
                y2={20}
                markerStart={'color-circle'}
                markerEnd={'color-circle'}
                style={{
                    strokeWidth: 2,
                    stroke: '#2222dd',
                }}
            />
        </Chart>
    ),

    name: 'double sided',
}
