import {
    defaultAxisLabelLeftProps,
    defaultAxisLabelTopProps,
    defaultAxisLabelBottomProps,
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
        top: { distance: defaultAxisLabelTopProps.distance - 5 },
        bottom: { distance: defaultAxisLabelBottomProps.distance - 5 },
        left: { distance: defaultAxisLabelLeftProps.distance - 5 },
        right: { distance: defaultAxisLabelRightProps.distance - 5 },
    },
    AxisTicks: {
        top: { labelDistance: defaultAxisTicksProps.labelDistance - 1 },
        bottom: { labelDistance: defaultAxisTicksProps.labelDistance - 1 },
        left: { labelDistance: defaultAxisTicksProps.labelDistance - 1 },
        right: { labelDistance: defaultAxisTicksProps.labelDistance - 1 },
    },
}
