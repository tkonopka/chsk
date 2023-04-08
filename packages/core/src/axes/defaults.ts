import {
    AxisLabelThemedProps,
    AxisThemedProps,
    AxisTicksThemedProps,
    GridLinesThemedProps,
} from './types'

export const defaultAxisProps: AxisThemedProps = {
    distance: 0,
    ticks: undefined,
}

export const defaultAxisLabelBottomProps: AxisLabelThemedProps = {
    align: 0.5,
    distance: 40,
    offset: [0, 0],
    angle: 0,
}

export const defaultAxisLabelTopProps: AxisLabelThemedProps = {
    align: 0.5,
    distance: 40,
    offset: [0, 0],
    angle: 0,
}

export const defaultAxisLabelLeftProps: AxisLabelThemedProps = {
    align: 0.5,
    distance: 45,
    offset: [0, 0],
    angle: -90,
}

export const defaultAxisLabelRightProps: AxisLabelThemedProps = {
    align: 0.5,
    distance: 45,
    offset: [0, 0],
    angle: 90,
}

export const defaultAxisTicksProps: AxisTicksThemedProps = {
    ticks: undefined,
    tickSize: 5,
    labelDistance: 9,
    labelOffset: [0, 0],
    labelAngle: 0,
}

export const defaultGridLinesProps: GridLinesThemedProps = {
    shift: [0],
    expansion: [0, 0],
}
