import { Axis } from '@chsk/core'
import { Venn, VennSets } from '../src'
import {
    ChartDecorator,
    commonVenn1Props,
    commonVenn2Props,
    commonVenn2bProps,
    commonVenn3Props,
    commonVennDisjointProps,
    commonVennASubsetProps,
    commonVennBSubsetProps,
} from './decorators'

export default {
    title: 'Addons/Set/Venn',
    component: Venn,
}

export const Default = {
    name: 'default',
    args: {
        ...commonVenn2Props,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const LittleSeparation = {
    name: 'little separation',
    args: {
        ...commonVenn2Props,
        separation: 0.4,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const Disjoint = {
    name: 'disjoint',
    args: {
        ...commonVennDisjointProps,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const ProportionalSmallOverlap = {
    name: 'proportional, small overlap',
    args: {
        ...commonVenn2Props,
        proportional: true,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const ProportionalLargeOverlap = {
    name: 'proportional, large overlap',
    args: {
        ...commonVenn2bProps,
        proportional: true,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const AContainedInB = {
    name: 'A contained in B',
    args: {
        ...commonVennASubsetProps,
        proportional: true,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const BContainedInA = {
    name: 'B contained in A',
    args: {
        ...commonVennBSubsetProps,
        proportional: true,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const ProportionalDisjoint = {
    name: 'proportional disjoint',
    args: {
        ...commonVennDisjointProps,
        proportional: true,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const OneSet = {
    name: 'one set',
    args: {
        ...commonVenn1Props,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const ThreeSets = {
    name: 'three sets',
    args: {
        ...commonVenn3Props,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const RotatedTwoSets = {
    name: 'rotated, two sets',
    args: {
        ...commonVenn2Props,
        angle: Math.PI / 2,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const RotatedThreeSets = {
    name: 'rotated, three sets',
    args: {
        ...commonVenn3Props,
        angle: Math.PI / 3,
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}

export const CustomSize = {
    name: 'custom size',
    args: {
        ...commonVenn3Props,
        scaleX: {
            type: 'linear',
            domain: [-5.5, 5.5],
        },
        children: (
            <>
                <VennSets />
                <Axis variant="left" ticks={5} />
                <Axis variant="bottom" ticks={[-4, -2, 0, 2, 4]} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const CustomColors = {
    name: 'custom colors',
    args: {
        ...commonVenn2Props,
        interpolation: () => '#d0d0d0',
        children: <VennSets />,
    },
    decorators: [ChartDecorator],
}
