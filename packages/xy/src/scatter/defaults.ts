import { X, Y } from '@chsk/core'
import { ScatterInteractiveDataItem } from './types'

export const defaultScatterTooltipFormat = (data: ScatterInteractiveDataItem) =>
    String(data.index) + (data.point ? ' (' + data.point[X] + ', ' + data.point[Y] + ')' : '')
