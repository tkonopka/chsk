import { X, Y } from '@chsk/core'
import { ScatterInteractiveDataItem } from './types'

export const defaultScatterTooltipFormat = (data: ScatterInteractiveDataItem) => {
    if (data.point) {
        return String(data.index) + ' (' + data.point[X] + ', ' + data.point[Y] + ')'
    } else {
        return String(data.index)
    }
}
