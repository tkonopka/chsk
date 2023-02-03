import {
    defaultAxisLabelLeftProps,
    defaultAxisLabelProps,
    defaultAxisLabelRightProps,
    defaultAxisTicksProps,
    ThemeSpec,
} from '@chsk/core'
import { cloneDeep } from 'lodash'

export const faintTicksThemePiece: ThemeSpec = {
    text: {
        tickLabel: {
            fill: '#777777',
        },
    },
    line: {
        tick: {
            stroke: '#666666',
            strokeWidth: 1,
        },
    },
}
