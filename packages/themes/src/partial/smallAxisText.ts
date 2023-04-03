import {
    defaultAxisLabelLeftProps,
    defaultAxisLabelProps,
    defaultAxisLabelRightProps,
    defaultAxisTicksProps,
    ThemeSpec,
} from '@chsk/core'

export const smallAxisTextTheme: ThemeSpec = {
    text: {
        axisLabel: {
            fontSize: '10px',
        },
        tickLabel: {
            fontSize: '10px',
        },
    },
    AxisLabel: {
        top: { offset: defaultAxisLabelProps.offset - 5 },
        bottom: { offset: defaultAxisLabelProps.offset - 5 },
        left: { offset: defaultAxisLabelLeftProps.offset - 5 },
        right: { offset: defaultAxisLabelRightProps.offset - 5 },
    },
    AxisTicks: {
        top: { labelDistance: defaultAxisTicksProps.labelDistance - 1 },
        bottom: { labelDistance: defaultAxisTicksProps.labelDistance - 1 },
        left: { labelDistance: defaultAxisTicksProps.labelDistance - 1 },
        right: { labelDistance: defaultAxisTicksProps.labelDistance - 1 },
    },
}
