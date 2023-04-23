import { Surface, Label } from '@chsk/core'
import { Pie, Origin, Slices } from '../../src'
import { ChartDecorator } from '../decorators'
import { commonPieProps, OriginAndSlices } from './decorators'

export default {
    title: 'Addons/Polar/Pie/Pie',
    component: Pie,
}

export const PieChart = {
    name: 'pie',
    args: {
        ...commonPieProps,
        rInner: 0,
        rOuter: 1,
        children: <OriginAndSlices />,
    },
    decorators: [ChartDecorator],
}

export const Doughnut = {
    name: 'doughnut',
    args: {
        ...commonPieProps,
        rInner: 0.6,
        rOuter: 1,
        children: <OriginAndSlices />,
    },
    decorators: [ChartDecorator],
}

export const Scaled = {
    name: 'scaled',
    args: {
        ...commonPieProps,
        rInner: 0.4,
        rOuter: 0.6,
        children: <OriginAndSlices />,
    },
    decorators: [ChartDecorator],
}

export const WideXDomain = {
    name: 'wide x domain',
    args: {
        ...commonPieProps,
        scaleX: {
            variant: 'linear',
            domain: [-3, 3],
        },
        children: (
            <>
                <Surface />
                <OriginAndSlices />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const NonCentralOrigin = {
    name: 'non-central origin',
    args: {
        ...commonPieProps,
        scaleY: {
            variant: 'linear',
            domain: [0, 2],
        },
        children: (
            <>
                <Surface />
                <OriginAndSlices />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const Rotated = {
    name: 'rotated',
    args: {
        ...commonPieProps,
        angle: Math.PI / 2,
        angleUnit: 'radian',
        children: <OriginAndSlices />,
    },
    decorators: [ChartDecorator],
}

export const RightAligned = {
    name: 'right-aligned',
    args: {
        ...commonPieProps,
        angleAlign: 1,
        children: <OriginAndSlices />,
    },
    decorators: [ChartDecorator],
}

export const CenterAligned = {
    name: 'center-aligned',
    args: {
        ...commonPieProps,
        angleAlign: 0.5,
        children: <OriginAndSlices />,
    },
    decorators: [ChartDecorator],
}

export const CenterLabel = {
    name: 'center label',
    args: {
        ...commonPieProps,
        rInner: 0.8,
        children: (
            <Origin>
                <Slices style={{ fillOpacity: 1 }} />
                <Label
                    position={[0, 0]}
                    style={{
                        fontSize: '18px',
                        fontWeight: 600,
                    }}
                >
                    Label
                </Label>
            </Origin>
        ),
    },
    decorators: [ChartDecorator],
}
