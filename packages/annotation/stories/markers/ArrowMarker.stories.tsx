import { Chart, Line } from '@chsk/core'
import { ArrowMarker } from '../../src'

export default {
    title: 'Addons/Annotation/Markers/ArrowMarker',
    component: ArrowMarker,
}

export const Triangle = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <ArrowMarker
                    id="triangle"
                    variant="Triangle"
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
                markerEnd={'triangle'}
                style={{
                    strokeWidth: 3,
                }}
            />
        </Chart>
    ),

    name: 'triangle',
}

export const Winged = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <ArrowMarker
                    id="winged"
                    variant="Winged"
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
                markerEnd={'winged'}
                style={{
                    strokeWidth: 3,
                }}
            />
        </Chart>
    ),

    name: 'winged',
}

export const Chevron = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <ArrowMarker
                    id="chevron"
                    variant="Chevron"
                    style={{
                        stroke: '#222222',
                        strokeWidth: 2,
                        fillOpacity: 0,
                    }}
                />
            </defs>
            <Line
                x1={0}
                y1={60}
                x2={140}
                y2={20}
                markerEnd={'chevron'}
                style={{
                    strokeWidth: 3,
                }}
            />
        </Chart>
    ),

    name: 'chevron',
}

export const Narrow = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <ArrowMarker
                    id="narrow"
                    variant="Triangle"
                    width={0.7}
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
                markerEnd={'narrow'}
                style={{
                    strokeWidth: 3,
                }}
            />
        </Chart>
    ),

    name: 'narrow',
}

export const Large = {
    render: () => (
        <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>
            <defs>
                <ArrowMarker
                    id="large"
                    variant="Winged"
                    size={16}
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
                markerEnd={'large'}
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
                <ArrowMarker
                    id="color"
                    variant="Chevron"
                    size={14}
                    width={1}
                    style={{
                        stroke: '#2222dd',
                        strokeWidth: 2,
                        fillOpacity: 0,
                    }}
                />
            </defs>
            <Line
                x1={0}
                y1={60}
                x2={140}
                y2={20}
                markerStart={'color'}
                markerEnd={'color'}
                style={{
                    strokeWidth: 3,
                    stroke: '#2222dd',
                    strokeLinecap: 'round',
                }}
            />
        </Chart>
    ),

    name: 'double sided',
}
