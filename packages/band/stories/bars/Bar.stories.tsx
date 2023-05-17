import { Axis, Legend } from '@chsk/core'
import { Bar, Bars } from '../../src'
import { ChartDecorator } from '../decorators'
import dataSingles from '../dataSingles.json'
import dataMissing from '../dataMissing.json'
import { commonBarProps, ChartWithLegendDecorator } from './decorators'

const BarsAndLegend = () => {
    return (
        <>
            <Bars />
            <Axis variant={'left'} label={'values (a.u.)'} />
            <Legend
                position={[160, 200]}
                size={[150, 20]}
                positionUnits="absolute"
                anchor={[0.5, 0]}
                horizontal
                itemPadding={[2, 2, 2, 2]}
                itemSize={[50, 20]}
                firstOffset={[0, 0]}
                title=""
            />
        </>
    )
}

export default {
    title: 'Addons/Band/Bars/Bar',
    component: Bar,
}

export const VerticalGrouped = {
    name: 'vertical, grouped',
    args: {
        ...commonBarProps,
        variant: 'grouped',
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const VerticalStacked = {
    name: 'vertical, stacked',
    args: {
        ...commonBarProps,
        variant: 'stacked',
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const HorizontalGrouped = {
    name: 'horizontal, grouped',
    args: {
        ...commonBarProps,
        horizontal: true,
        variant: 'grouped',
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const HorizontalStacked = {
    name: 'horizontal, stacked',
    args: {
        ...commonBarProps,
        horizontal: true,
        variant: 'stacked',
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const LargeOuterPadding = {
    name: 'large outer padding',
    args: {
        ...commonBarProps,
        variant: 'stacked',
        horizontal: false,
        scaleIndex: {
            variant: 'band',
            paddingOuter: 0.8,
            paddingInner: 0.1,
        },
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const LargeInnerPadding = {
    name: 'large inner padding',
    args: {
        ...commonBarProps,
        variant: 'stacked',
        horizontal: false,
        scaleIndex: {
            variant: 'band',
            paddingOuter: 0.1,
            paddingInner: 0.8,
        },
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const LargeInternalPadding = {
    name: 'large internal padding',
    args: {
        ...commonBarProps,
        horizontal: false,
        paddingInternal: 0.8,
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const ZeroInternalPadding = {
    name: 'zero internal padding',
    args: {
        ...commonBarProps,
        horizontal: false,
        paddingInternal: 0.0,
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const TwoKeys = {
    name: 'two keys',
    args: {
        ...commonBarProps,
        horizontal: false,
        keys: ['x', 'y'],
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const SingleKey = {
    name: 'single key',
    args: {
        ...commonBarProps,
        horizontal: false,
        keys: ['x'],
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const EqualSpacing = {
    name: 'equal spacing',
    args: {
        ...commonBarProps,
        data: dataSingles,
        keys: ['value'],
        horizontal: false,
        scaleIndex: {
            variant: 'band',
            domain: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            padding: 0.2,
        },
        children: (
            <>
                <Bars key={0} />
                <Axis key={1} variant={'bottom'} />
                <Axis key={2} variant={'left'} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const FixedValueScale = {
    name: 'fixed domain',
    args: {
        ...commonBarProps,
        data: dataSingles,
        keys: ['value'],
        horizontal: false,
        scaleValue: {
            variant: 'linear',
            domain: [0, 100],
        },
        scaleIndex: {
            variant: 'band',
        },
        children: (
            <>
                <Bars key={0} />
                <Axis key={1} variant={'bottom'} />
                <Axis key={2} variant={'left'} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const ReorderedIds = {
    name: 'reordered ids',
    args: {
        ...commonBarProps,
        data: dataSingles,
        keys: ['value'],
        horizontal: false,
        scaleIndex: {
            variant: 'band',
            domain: ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'X', 'Y'],
        },
        children: (
            <>
                <Bars key={0} />
                <Axis key={1} variant={'bottom'} />
                <Axis key={2} variant={'left'} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const CustomSpacing = {
    name: 'custom spacing',
    args: {
        ...commonBarProps,
        data: dataSingles,
        keys: ['value'],
        horizontal: false,
        scaleIndex: {
            variant: 'band',
            domain: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            padding: 0.2,
            extraPadding: {
                E: 0.9,
            },
        },
        children: (
            <>
                <Bars />
                <Axis variant={'bottom'} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const LinearIndexScale = {
    name: 'continuous index',
    args: {
        ...commonBarProps,
        data: [
            { id: '1', value: 4 },
            { id: '2', value: 7 },
            { id: '6', value: 8 },
            { id: '8', value: 5 },
        ],
        keys: ['value'],
        horizontal: false,
        scaleIndex: {
            variant: 'linear',
            domain: [0, 10],
            padding: 0.2,
            bandwidth: [0, 1],
        },
        children: (
            <>
                <Bars />
                <Axis variant={'bottom'} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const MissingKeys = {
    name: 'missing keys',
    args: {
        ...commonBarProps,
        variant: 'stacked',
        data: dataMissing,
        horizontal: false,
        scaleIndex: {
            variant: 'band',
            padding: 0.2,
        },
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const NullInternalPadding = {
    name: 'null internal padding',
    args: {
        ...commonBarProps,
        variant: 'layered',
        data: dataMissing,
        horizontal: false,
        scaleIndex: {
            variant: 'band',
            padding: 0.2,
        },
        children: <Bars />,
    },
    decorators: [ChartDecorator],
}

export const AutoRescaling = {
    name: 'auto-rescaling',
    args: {
        ...commonBarProps,
        variant: 'stacked',
        data: dataMissing,
        horizontal: false,
        scaleIndex: {
            variant: 'band',
            padding: 0.2,
        },
        autoRescale: true,
        children: <BarsAndLegend />,
    },
    decorators: [ChartWithLegendDecorator],
}

export const FixedScales = {
    name: 'fixed scales',
    args: {
        ...commonBarProps,
        variant: 'stacked',
        data: dataMissing,
        horizontal: false,
        scaleIndex: {
            variant: 'band',
            padding: 0.2,
        },
        autoRescale: false,
        children: <BarsAndLegend />,
    },
    decorators: [ChartWithLegendDecorator],
}
