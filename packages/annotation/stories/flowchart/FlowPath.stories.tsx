import { FlowPath } from '../../src'
import { FlowMilestones } from './FlowMilestones'

export default {
    title: 'Addons/Annotation/Flowchart/FlowPath',
    component: FlowPath,
}

export const SimpleLine = {
    render: () => (
        <FlowMilestones
            points={[
                ['A', 80],
                ['D', 80],
            ]}
        />
    ),
    name: 'simple line',
}

export const ComplexLine = {
    render: () => (
        <FlowMilestones
            points={[
                ['A', 80],
                ['D', 80],
                ['D', 20],
                ['B', 20],
                ['B', 70],
            ]}
            style={{
                fillOpacity: 0,
            }}
        />
    ),

    name: 'complex line',
}

export const NaturalCurve = {
    render: () => (
        <FlowMilestones
            points={[
                ['A', 80],
                ['D', 80],
                ['D', 20],
                ['B', 20],
                ['B', 70],
            ]}
            curve={'Natural'}
        />
    ),

    name: 'natural curve',
}

export const SlowTransition = {
    render: () => (
        <FlowMilestones
            points={[
                ['A', 80],
                ['D', 80],
                ['D', 20],
                ['B', 20],
                ['B', 70],
            ]}
            curve={'Natural'}
            transition={{
                pathLength: {
                    duration: 3,
                },
            }}
        />
    ),

    name: 'slow transition',
}
