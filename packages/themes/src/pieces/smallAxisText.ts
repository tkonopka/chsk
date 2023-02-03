import {
    defaultAxisLabelLeftProps,
    defaultAxisLabelProps,
    defaultAxisLabelRightProps,
    defaultAxisTicksProps,
    ThemeSpec,
} from '@chsk/core'
import { cloneDeep } from 'lodash'

export const smallAxisTextThemePiece: ThemeSpec = {
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
        top: { labelOffset: defaultAxisTicksProps.labelOffset - 1 },
        bottom: { labelOffset: defaultAxisTicksProps.labelOffset - 1 },
        left: { labelOffset: defaultAxisTicksProps.labelOffset - 1 },
        right: { labelOffset: defaultAxisTicksProps.labelOffset - 1 },
    },
}
