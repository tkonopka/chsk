import { X, Y } from '@chsk/core'
import { DensityInteractiveDataItem } from './types'

export const defaultDensityTooltipFormat = (data: DensityInteractiveDataItem) =>
    '(' + data.bins[X] + ', ' + data.bins[Y] + ') count: ' + data.count
